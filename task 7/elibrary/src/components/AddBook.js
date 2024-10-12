import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(), // Generate a unique id
      title,
      author,
      genre,
      publicationDate,
      isBorrowed: false,
    };
    addBook(newBook); // Call the addBook function passed as a prop
    navigate('/'); // Redirect to the book list
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 2, backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
      <Typography variant="h5" gutterBottom align="center">
        Add New Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Publication Date"
          type="date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Book
        </Button>
      </form>
    </Box>
  );
};

export default AddBook;
