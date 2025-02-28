import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './memberform.css';

const MemberForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/members');
  };

  return (
    <form className="memberForm" onSubmit={handleSubmit}>
      <h2>Add New Member</h2>
      <div className="formGroup">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="formGroup">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit" className="submitButton">Save Member</button>
    </form>
  );
};

export default MemberForm;
