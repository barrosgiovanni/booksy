import React from 'react'

function Book({ title, authors, image, description }) {
  return (
    <article className='book'>
      <img
        className='book-image'
        src={image}
        alt={title} />
      <h3>{title}</h3>
      <h4>{authors[0]}</h4>
      <h4>{authors[1]}</h4>
      <h4>{authors[2]}</h4>
      <p>{description}</p>
    </article>
  )
}

export default Book;
