import React from 'react'
import Description from './Description';

function Book({ title, authors, image, description }) {
  return (
    <article className='book'>
      <img
        className='book-image'
        src={image}
        alt={title} />
      <h3>{title}</h3>
      <h4 className='author'>{authors[0]}</h4>
      <h4 className='author'>{authors[1]}</h4>
      <h4 className='author'>{authors[2]}</h4>
      <Description description={description} />
      <button className='btn-info'>See on Google Play</button>
    </article>
  )
}

export default Book;
