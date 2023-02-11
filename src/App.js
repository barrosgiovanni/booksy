import './App.css';
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from './components/SearchBar';
import searchBooks from './Api';

function App() {

  const [books, setBooks] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchBooks(term);
    setBooks(result);
  }

  return (
    <div className='app'>
      <SearchBar onSubmit={handleSubmit}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
