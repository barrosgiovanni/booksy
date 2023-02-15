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

  if (books === undefined) {
    return (
      <div className='app'>
        <SearchBar onSubmit={handleSubmit} />
        <h1>No results were found.</h1>
      </div>
    )

  } else {
    if (books.length === 0) {
      return (
        <div className='app'>
          <SearchBar onSubmit={handleSubmit} />
          <h1>No searches were executed yet.<br></br>Please, type a search term...</h1>
        </div>
      )

    } else {
      return (
        <div className='app'>
          <SearchBar onSubmit={handleSubmit} />
          <BookList books={books} />
        </div>
      )
    }
  }


}

export default App;
