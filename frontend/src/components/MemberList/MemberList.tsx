import { Link } from 'react-router-dom';
import './memberlist.css';

const MemberList = () => {
  return (
    <div className="memberList">
      <h2>Library Members</h2>
      <Link to="/members/new" className="addButton">Add New Member</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Member ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Member rows will be mapped here */}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
