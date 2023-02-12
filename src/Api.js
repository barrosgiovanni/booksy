import axios from "axios";

const searchBooks = async (term) => {

  const apiKey = 'AIzaSyBS-IJtZb4Yw47yTHVF1z0f5RwtZoHh45U';
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle:${term}&download=epub&key=${apiKey}&maxResults=40&startIndex=0`);
  const items = response.data['items'];

  return items;

}

export default searchBooks;


