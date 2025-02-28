import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loanform.css';

const LoanForm = () => {
  const [bookId, setBookId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/loans');
  };

  return (
    <form className="loanForm" onSubmit={handleSubmit}>
      <h2>Create New Loan</h2>
      <div className="formGroup">
        <label>Book:</label>
        <select value={bookId} onChange={(e) => setBookId(e.target.value)}>
          <option value="">Select a book</option>
          {/* Book options will be mapped here */}
        </select>
      </div>
      <div className="formGroup">
        <label>Member:</label>
        <select value={memberId} onChange={(e) => setMemberId(e.target.value)}>
          <option value="">Select a member</option>
          {/* Member options will be mapped here */}
        </select>
      </div>
      <div className="formGroup">
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <button type="submit" className="submitButton">Create Loan</button>
    </form>
  );
};

export default LoanForm;
