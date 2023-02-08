import './App.css';
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [books, setBooks] = useState([]);

  const apiKey = 'AIzaSyBS-IJtZb4Yw47yTHVF1z0f5RwtZoHh45U';

  const fetchBooks = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=javascript+intitle:javascript&download=epub&key=${apiKey}&maxResults=40`);
    const items = response.data['items'];
    setBooks(items);
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



// GOOGLE_BOOKS_API_KEY=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU

// searches.each do |language|
//     books = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{language}+intitle:#{language}&download=epub&key=#{api_data[:key]}&maxResults=40")
//     books_array = JSON.parse(books)["items"]
//     books_array.each do |book|
//       Book.create(
//         title: book["volumeInfo"]["title"],
//         author: book["volumeInfo"]["authors"] == nil ? nil : book["volumeInfo"]["authors"][0],
//         publisher: book["volumeInfo"]["publisher"],
//         year: book["volumeInfo"]["publishedDate"] == nil ? nil : book["volumeInfo"]["publishedDate"][0, 4].to_i,
//         pages: book["volumeInfo"]["pageCount"],
//         description: book["volumeInfo"]["description"],
//         rating: book["volumeInfo"]["averageRating"],
//         category: book["volumeInfo"]["categories"] == nil ? nil : book["volumeInfo"]["categories"][0],
//         isbn: book["volumeInfo"]["industryIdentifiers"] == nil ? nil : book["volumeInfo"]["industryIdentifiers"][0]["identifier"],
//         image_url: book["volumeInfo"]["imageLinks"] == nil ? nil : book["volumeInfo"]["imageLinks"]["thumbnail"],
//         book_url: book["volumeInfo"]["infoLink"] == nil ? '' : book["volumeInfo"]["infoLink"],
//         user_id: rand(1..13)
//       )
