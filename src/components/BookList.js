import React from 'react'
import Book from "./Book";

function BookList({ books }) {

  const generateUniqueId = require('generate-unique-id');

  const renderBooks = books.map((book) => {
    return <Book title={book.volumeInfo.title} authors={book.volumeInfo.authors} key={generateUniqueId()} image={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} url={book.volumeInfo.infoLink} />
  })

  return (
    <section className='book-list'>
      {renderBooks}
    </section>
  )
}

export default BookList;
