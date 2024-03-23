import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route ,link} from 'react-router-dom';
import AdminPage from './AdminPage';

class App extends Component {
  render(){
  return (
    <Router>
      {/* Add other routes here */}
      <Routes>
      <Route path="/AdminPage" element={<AdminPage/>}/> 
      </Routes>
    </Router>
  );
}
}

export default App;