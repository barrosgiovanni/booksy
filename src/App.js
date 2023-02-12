import './App.css';
import BookList from "./components/BookList";
import { useState } from "react";
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
      { books.length >= 1 ? <BookList books={books}/> : <h1>No searches were executed yet.<br></br>Please, type a search term...</h1> }

    </div>
  );
}

export default App;
