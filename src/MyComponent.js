import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data'); // Replace '/api/data' with your backend route
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.name}</li> // Example: Displaying names from fetched data
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;