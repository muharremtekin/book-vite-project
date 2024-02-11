import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '5px' }}>
      <strong>Title:</strong> {book.title}<br />
      <strong>Author:</strong> {book.authorFirstName} {book.authorLastName}<br />
      <strong>Publication Date:</strong> {new Date(book.publicationDate).toLocaleDateString()}<br />
    </div>
  );
};

export default BookCard;
