import express from 'express';
import { Book } from '../models/book-models.js';

const router = express.Router();

// Create a new book
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return response.status(400).json({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = await Book.create({ title, author, publishYear });

        return response.status(201).json(newBook);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ message: error.message });
    }
});

// Get all books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({ count: books.length, data: books });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ message: error.message });
    }
});

// Get a book by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);

        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ message: error.message });
    }
});

// Update a book by ID
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return response.status(400).json({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, publishYear },
            { new: true } // Return the updated document
        );

        if (!updatedBook) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json({ message: 'Book updated', updatedBook });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ message: error.message });
    }
});

// Delete a book by ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json({ message: 'Book deleted' });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ message: error.message });
    }
});

export default router;
