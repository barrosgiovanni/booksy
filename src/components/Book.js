import React from 'react'
import Description from './Description';

function Book({ title, authors, image, description, url }) {
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
      <a href={url}><button className='btn-info'>+ More info</button></a>
    </article>
  )
}

export default Book;
