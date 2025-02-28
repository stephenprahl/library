import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './booklist.css';

interface Book {
  book_id: number;
  title: string;
  author: string;
  isbn: string;
  publication_year: number;
  genre: string;
  description: string;
  cover_image_url: string;
}

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('/books').then((response) => setBooks(response.data));
  }, []);

  return (
    <div className="bookList">
      <Link to="/books/new" className="addButton">Add New Book</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Cover</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.book_id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.publication_year}</td>
              <td>{book.genre}</td>
              <td><img src={book.cover_image_url} alt={book.title} style={{ maxWidth: "50px" }} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BookList;