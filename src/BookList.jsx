// BookList.jsx

import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import BookCard from './BookCard'; // BookCard bileşenini import edin

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://localhost:7078/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const RowRenderer = ({ index, style }) => {
    return (
      <div style={style}>
        <BookCard book={books[index]} />
      </div>
    );
  };

  return (
    <div>
    <h1>Book List</h1>
    <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
    {!loading && (
      <List
        height={600} // Yüksekliği artırın
        itemCount={books.length}
        itemSize={150}
        width={800} // Genişliği artırın
      >
        {RowRenderer}
      </List>
    )}
  </div>
  );
};

export default BookList;
