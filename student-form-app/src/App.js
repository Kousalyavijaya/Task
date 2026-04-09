import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [name, setName] = useState('');

  // Weather API fetch
  const fetchWeather = async () => {
    const apiKey = '7dc30c4fd282bcae7ff50f25b73a3b6d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${name}`);
  };

  // Google Login handlers
  const handleSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
  };

  const handleError = () => {
    console.log('Google Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId="AIzaSyCaxzh0z0Yuqe4xbdjAHJu3OMTEwcYAyQg">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>

          {/* Form start */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          {/* Form end */}

          {/* Weather API */}
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Enter city for weather"
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {weather && (
              <div>
                <h3>{weather.name}</h3>
                <p>Temp: {weather.main.temp}°C</p>
                <p>Weather: {weather.weather[0].description}</p>
              </div>
            )}
          </div>

          {/* Google Login */}
          <div style={{ marginTop: '20px' }}>
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '20px' }}
          >
            Learn React
          </a>
        </header>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;