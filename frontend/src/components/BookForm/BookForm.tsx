import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookform.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/');
  };

  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <div className="formGroup">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="formGroup">
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className="formGroup">
        <label>ISBN:</label>
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      </div>
      <button type="submit" className="submitButton">Save Book</button>
    </form>
  );
};

export default BookForm;
