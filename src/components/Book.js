import React from 'react'
import { FaCaretDown } from "react-icons/fa";

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
      <div className='description'>
        <h4 className='description-title'>Show description</h4>
        <FaCaretDown className='down-icon'/>
      </div>


      <button className='btn-info'>See on Google Play</button>
    </article>
  )
}

export default Book;
