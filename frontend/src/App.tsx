import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import LoanForm from './components/LoanForm/LoanForm';
import LoanList from './components/LoanList/LoanList';
import MemberForm from './components/MemberForm/MemberForm';
import MemberList from './components/MemberList/MemberList';

function App() {
  return (
    <Router>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/new" element={<BookForm />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/members/new" element={<MemberForm />} />
            <Route path="/loans" element={<LoanList />} />
            <Route path="/loans/new" element={<LoanForm />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
