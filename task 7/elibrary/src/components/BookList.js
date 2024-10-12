import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, TextField, MenuItem, Box } from '@mui/material';
import Header from './Header'; // Import the Header component

const BookList = ({ books }) => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');

  const filteredBooks = books.filter(book => {
    return (genre ? book.genre === genre : true) &&
           (author ? book.author.toLowerCase().includes(author.toLowerCase()) : true) &&
           (publicationDate ? book.publicationDate === publicationDate : true);
  });

  return (
    <div>
      <Header /> {/* Add the Header here */}
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
          Available Books
        </Typography>
        
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          <Grid item xs={12} md={4}>
            <TextField 
              label="Filter by Genre" 
              select 
              value={genre} 
              onChange={(e) => setGenre(e.target.value)} 
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: 'white' }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Fiction">Fiction</MenuItem>
              <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
              <MenuItem value="Fantasy">Fantasy</MenuItem>
              <MenuItem value="Science Fiction">Science Fiction</MenuItem>
              <MenuItem value="Mystery">Mystery</MenuItem>
              <MenuItem value="Biography">Biography</MenuItem>
              {/* Add more genres as needed */}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField 
              label="Filter by Author" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField 
              label="Filter by Publication Date" 
              value={publicationDate} 
              onChange={(e) => setPublicationDate(e.target.value)} 
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {filteredBooks.length === 0 ? (
            <Typography variant="h6" align="center" sx={{ width: '100%' }}>
              No books found.
            </Typography>
          ) : (
            filteredBooks.map(book => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <Card elevation={3} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{book.title}</Typography>
                    <Typography color="text.secondary">Author: {book.author}</Typography>
                    <Typography color="text.secondary">Genre: {book.genre}</Typography>
                    <Typography color="text.secondary">Published: {book.publicationDate}</Typography>
                    <Box sx={{ marginTop: '10px' }}>
                      <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>
                        View Details
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
};

export default BookList;
