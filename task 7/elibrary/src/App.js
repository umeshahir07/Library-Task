import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import { Container } from '@mui/material';
import AddBook from './components/AddBook';
import Footer from './components/Footer';

function App() {
  const [books, setBooks] = useState([
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        publicationDate: "1925-04-10",
        isBorrowed: false,
    },  {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publicationDate: "1960-07-11",
        isBorrowed: false,
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publicationDate: "1949-06-08",
        isBorrowed: true,
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publicationDate: "1813-01-28",
        isBorrowed: false,
      },
      {
        id: 5,
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure",
        publicationDate: "1851-10-18",
        isBorrowed: true,
      },
      {
        id: 6,
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        publicationDate: "1869-01-01",
        isBorrowed: false,
      },
      {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        publicationDate: "1951-07-16",
        isBorrowed: false,
      },
      {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationDate: "1937-09-21",
        isBorrowed: true,
      },
      {
        id: 9,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationDate: "1954-07-29",
        isBorrowed: false,
      },
      {
        id: 10,
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        publicationDate: "1932-08-18",
        isBorrowed: false,
      },
      {
        id: 11,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Adventure",
        publicationDate: "1988-05-01",
        isBorrowed: true,
      },
      {
        id: 12,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Philosophical Fiction",
        publicationDate: "1866-01-01",
        isBorrowed: false,
      },
      {
        id: 13,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        genre: "Gothic Fiction",
        publicationDate: "1847-12-01",
        isBorrowed: false,
      },
      {
        id: 14,
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic",
        publicationDate: "800-BC",
        isBorrowed: true,
      },
      {
        id: 15,
        title: "Les Misérables",
        author: "Victor Hugo",
        genre: "Historical Fiction",
        publicationDate: "1862-01-01",
        isBorrowed: true,
      },
      {
        id: 16,
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Gothic Horror",
        publicationDate: "1897-05-26",
        isBorrowed: false,
      },
      {
        id: 17,
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Gothic Fiction",
        publicationDate: "1818-01-01",
        isBorrowed: true,
      },
      {
        id: 18,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        genre: "Epic Poetry",
        publicationDate: "1320-01-01",
        isBorrowed: false,
      },
      {
        id: 19,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        genre: "Adventure",
        publicationDate: "1605-01-16",
        isBorrowed: false,
      },
      {
        id: 20,
        title: "The Iliad",
        author: "Homer",
        genre: "Epic",
        publicationDate: "750-BC",
        isBorrowed: false,
      },  { id: 21, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", publicationDate: "1932-08-01", isBorrowed: false },
  { id: 22, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Philosophical Fiction", publicationDate: "1890-07-01", isBorrowed: true },
  { id: 23, title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", publicationDate: "1988-04-01", isBorrowed: false },
  { id: 24, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Philosophical Fiction", publicationDate: "1866-01-01", isBorrowed: true },
  { id: 25, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Philosophical Fiction", publicationDate: "1880-01-01", isBorrowed: false },
  { id: 26, title: "Wuthering Heights", author: "Emily Brontë", genre: "Classic", publicationDate: "1847-12-01", isBorrowed: true },
  { id: 27, title: "The Grapes of Wrath", author: "John Steinbeck", genre: "Historical Fiction", publicationDate: "1939-04-14", isBorrowed: false },
  { id: 28, title: "The Catch-22", author: "Joseph Heller", genre: "Satire", publicationDate: "1961-11-10", isBorrowed: true },
  { id: 29, title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", publicationDate: "2006-09-26", isBorrowed: false },
  { id: 30, title: "Little Women", author: "Louisa May Alcott", genre: "Coming-of-Age", publicationDate: "1868-09-30", isBorrowed: true },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };
  

  return (
    <Router>
      <Container>
        <Routes>
        <Route path="/add" element={<AddBook addBook={addBook} />} />
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookDetail books={books} updateBook={updateBook} />} />
          <Route path="/add-book" element={<BookForm addBook={addBook} />} />
          <Route path="/edit-book/:id" element={<BookForm books={books} updateBook={updateBook} />} />
          
         
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
