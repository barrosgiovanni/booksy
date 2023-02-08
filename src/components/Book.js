import React from 'react'

function Book({ title, authors, image }) {
  return (
    <article className='book'>
      <img
        src={image}
        alt={title} />
      <h3>{title}</h3>
      <p>{authors[0]}</p>
      <p>{authors[1]}</p>
      <p>{authors[2]}</p>
    </article>
  )
}

export default Book;
