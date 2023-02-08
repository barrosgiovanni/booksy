import './App.css';
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [books, setBooks] = useState([]);

  const apiKey = 'AIzaSyBS-IJtZb4Yw47yTHVF1z0f5RwtZoHh45U';
  const term = 'react'

  const fetchBooks = async () => {

    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle:${term}&download=epub&key=${apiKey}&maxResults=40`);
    const items = response.data['items'];
    setBooks(items);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books);

  return (
    <div>
      <BookList books={books}/>
    </div>
  );
}

export default App;
