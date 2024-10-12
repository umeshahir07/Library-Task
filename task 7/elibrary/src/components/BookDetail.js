import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Button, Card, CardContent, Typography, Box } from '@mui/material';

const BookDetail = ({ books, updateBook }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  const handleBorrowReturn = () => {
    const updatedBook = { ...book, isBorrowed: !book.isBorrowed };
    updateBook(updatedBook);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card elevation={3} sx={{ maxWidth: 400, padding: '20px' }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>{book.title}</Typography>
          <Typography variant="h6" color="text.secondary">Author: {book.author}</Typography>
          <Typography variant="h6" color="text.secondary">Genre: {book.genre}</Typography>
        
          <Typography variant="h6" color="text.secondary">Published: {book.publicationDate}</Typography>
          <Typography variant="h6" color={book.isBorrowed ? 'error' : 'success.main'} sx={{ marginBottom: '20px' }}>
            Status: {book.isBorrowed ? "Borrowed" : "Available"}
          </Typography>
          <Button 
            onClick={handleBorrowReturn} 
            variant="contained" 
            color={book.isBorrowed ? "error" : "primary"} 
            fullWidth
            sx={{ marginBottom: '10px' }}
          >
            {book.isBorrowed ? "Return Book" : "Borrow Book"}
          </Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" fullWidth color="primary">
              Back to Book List
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookDetail;
    