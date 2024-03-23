import React from 'react';

const MyComponent = ({ fetchedData }) => {
  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {fetchedData.map(item => (
          <li key={item._id}>{item.name}</li>
           /*  Displaying names from fetched data */
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;