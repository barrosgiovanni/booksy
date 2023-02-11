import React from 'react'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


function SearchBar({ onSubmit}) {

  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  }

  return (
    <div className='search-bar'>
      <form className='form-control' onSubmit={handleFormSubmit}>
        <input type='text' id='term' name='term' placeholder='...' value={term} onChange={(e) => setTerm(e.target.value)}></input>
        <button type='submit' className='btn-search'><FaSearch /></button>
      </form>
    </div>
  )
}

export default SearchBar
