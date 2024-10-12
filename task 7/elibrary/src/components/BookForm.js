import React, { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Typography, Grid, Box, Paper } from '@mui/material';

const BookForm = ({ books, addBook, updateBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [book, setBook] = useState({
    title: '', author: '', genre: '', publicationDate: '', isBorrowed: false
  });

  useEffect(() => {
    if (isEditing) {
      const existingBook = books.find(b => b.id === parseInt(id));
      if (existingBook) setBook(existingBook);
    }
  }, [id, isEditing, books]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateBook(book);
    } else {
      addBook({ ...book, id: books.length + 1 });
    }
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ padding: '20px', maxWidth: 500, width: '100%', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            {isEditing ? "Edit Book" : "Add New Book"}
          </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={book.title}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={book.title}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Author"
                name="author"
                value={book.author}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Genre"
                name="genre"
                value={book.genre}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Publication Date"
                name="publicationDate"
                value={book.publicationDate}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ marginTop: '10px', borderRadius: '5px' }}
              >
                {isEditing ? "Update Book" : "Add Book"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default BookForm; 