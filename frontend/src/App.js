import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch hello message
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => setError('Failed to fetch message'));

    // Fetch data
    fetch('/api/data')
      .then(response => response.json())
      .then(result => {
        setData(result.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>boostUA</h1>
        <h2>React + Node.js Web Application</h2>
        
        {error && <p className="error">{error}</p>}
        
        <div className="message-box">
          <h3>Message from API:</h3>
          <p>{message || 'Loading...'}</p>
        </div>

        <div className="data-section">
          <h3>Data from Backend:</h3>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <ul className="data-list">
              {data.map(item => (
                <li key={item.id}>
                  <strong>{item.name}</strong>: {item.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
