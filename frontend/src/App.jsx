import React from 'react';
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'
import EditBook from './pages/EditBook.jsx'
import ShowBook from './pages/ShowBook.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Book/create' element={<CreateBook />} />
      <Route path='/book/details/:id' element={<ShowBook />} />
      <Route path='/Book/edit/:id' element={<EditBook />} />
      <Route path='/Book/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App
