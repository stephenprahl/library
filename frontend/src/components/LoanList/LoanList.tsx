import { Link } from 'react-router-dom';

const LoanList = () => {
  return (
    <div>
      <h2>Book Loans</h2>
      <Link to="/loans/new">Create New Loan</Link>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Member Name</th>
            <th>Loan Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Loan rows will be mapped here */}
        </tbody>
      </table>
    </div>
  );
};

export default LoanList;
