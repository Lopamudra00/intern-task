import './App.css';
import Main from './main'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  function fetch() {
    setLoading(true);
    axios.get('https://reqres.in/api/users?page=1')
      .then(data => {
        console.log(data.data.data);
        setData(data.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar">
            <div className="menu">
              <h3 className="logo">VIBE <span>STUDIO</span> </h3>
              <button onClick={fetch} className="fetchButton">Get Users</button>
            </div>
          </div>
          <Main data={data} isLoading={isLoading} error={error} />
        </div>
      </div>
    </>
  );
}

export default App;
