import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './AdminPage.css';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetchData,stFetchData]=useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const jsonData = await response.json();
      // Pass jsonData to MyComponent as props
      // You may need to modify MyComponent to accept props
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container"> 
      <h1>Admin Page</h1>
      <div className="form-group">
        <label className="label">Username:</label>
        <input type="text" className="input" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="form-group">
        <label className="label">Email:</label>
        <input type="email" className="input" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <input type="password" className="input" value={password} onChange={handlePasswordChange} />
      </div>
      <button className="button" onClick={handleSubmit}>Submit</button>
      {/* MyComponent will receive data from the backend and display it */}
      <MyComponent />
    </div>
  );
};

export default AdminPage;