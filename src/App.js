import './App.css';
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookList books={books}/>
    </div>
  );
}

export default App;
