 
 
import React, { useState } from 'react';
import TempCard from './TempCard'
import './App.css';

 

export default function App() {
  const [form, setForm] = useState({ city: '', country: '' });
  const [weatherdata, setweatherData] = useState([]);

  const APIKEY = '606a0ddc1ba3dc0ab74e0ca215cc0da9';

  async function enterD(e) {
    e.preventDefault();
    if (form.city === '') {
      alert('Add Values');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      //setWeather({ data: data });
      setweatherData({ data });
      console.log(weatherdata);
    }
  }

  function handleChange(e) {
    if (e.target.name === 'city') {
      setForm({ ...form, city: e.target.value });
    }
    if (e.target.name === 'country') {
      setForm({ ...form, country: e.target.value });
    }
  }

  return (
    <div>
      <h1>weather app</h1>
      <form>
        <input
          type="text"
          name="city"
          placeholder="town"
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={handleChange}
        />
        <button onClick={enterD}>submit </button>
        {weatherdata.data !== undefined?(<div><TempCard data={weatherdata.data}/></div>):''}
      </form>
    </div>
  );
}

