import React from 'react'
import Book from "./Book";

function BookList({ books }) {

  const renderBooks = books.map((book) => {
    return <Book title={book.volumeInfo.title} authors={book.volumeInfo.authors} key={book.id} image={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} />
  })

  return (  
    <section className='book-list'>
      {renderBooks}
    </section>
  )
}

export default BookList;
