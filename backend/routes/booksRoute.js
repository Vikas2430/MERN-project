import express from 'express';
import { Book } from "../models/book-models.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routing = createBrowserRouter(routing, {
  future: {
    v7_startTransition: true,       
    v7_relativeSplatPath: true,    
  },
});

<RouterProvider router={router} />;

const router = express.Router();

router.post('/', async (request,response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear'
            });
        }
        const newbook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newbook);

        return response.status(201).send(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        })
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const books = await Book.findById(id);

        return response.status(200).json(books)
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

router.put('/:id', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear'
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({message:'book not found'})
        }
        
        return response.status(200).send({message : 'book updated'})
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

router.delete('/:id', async (request, response) => {

    try {
        
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message:'book not found'});
        }

        return response.status(200).send({message:'book deleted'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

export default router;