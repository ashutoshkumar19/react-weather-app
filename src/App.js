import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.scss';
import Sunny from './icons/sunny.svg';
import Cloudy from './icons/cloudy-sunny-1.svg';
import Rain from './icons/rain-heavy.svg';
import Searchbar from './components/Searchbar';
import Forecast from './components/Forecast';
import Current from './components/Current';

const getTime = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();
  let part = 'am';
  if (hours > 12) {
    part = 'pm';
    hours = hours - 12;
  }

  let formattedTime = hours + ':' + minutes.substr(-2) + part;
  return formattedTime;
};

const App = () => {
  const [state, setState] = useState({
    fullData: [],
    dailyData: [],
    currentLocation: '',
  });

  // const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=cd0485f5bd3fd4e2e68723cbe1e0f0e0`;

  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${state.currentLocation}&units=metric&appid=cd0485f5bd3fd4e2e68723cbe1e0f0e0`;

  // Get current location from IP Address
  useEffect(() => {
    axios.get('http://ip-api.com/json').then(
      function success(response) {
        console.log("User's Location Data is ", response.data);
        console.log("User's Country:", response.data.country);
        console.log("User's City:", response.data.city);
        setState({ ...state, currentLocation: response.data.city });
      },
      function fail(data, status) {
        console.log('Request failed.  Returned status of', status);
      }
    );
  }, []);

  // Get current weather
  useEffect(() => {
    axios.get(weatherURL).then((res) => {
      setState({ ...state, fullData: res.data });
    });
    // .then((data) => {
    //   const dailyData = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'));
    //   setState({
    //     fullData: data.list,
    //     dailyData: dailyData,
    //   });
    // });
  }, [state.currentLocation]);

  useEffect(() => {
    console.log(state);
    try {
      setCurrentData({
        ...currentData,
        location: state.fullData.name,
        temp: state.fullData.main.temp,
        temp_max: state.fullData.main.temp_max,
        temp_min: state.fullData.main.temp_min,
        feels_like: state.fullData.main.feels_like,
        pressure: state.fullData.main.pressure,
        humidity: state.fullData.main.humidity,
        visibility: state.fullData.visibility,
        wind_speed: state.fullData.wind.speed,
        sunrise: getTime(state.fullData.sys.sunrise),
        sunset: getTime(state.fullData.sys.sunset),
        main: state.fullData.weather[0].main,
        description: state.fullData.weather[0].description,
      });
    } catch (error) {}
  }, [state]);

  const [currentData, setCurrentData] = useState({
    location: '',
    main: '',
    description: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    feels_like: '',
    pressure: '',
    humidity: '',
    visibility: '',
    wind_speed: '',
    sunrise: '',
    sunset: '',
  });

  const forecastState = [
    {
      day: 'Fri',
      max: '28',
      min: '19',
      status: 'Sunny',
    },
    {
      day: 'Sat',
      max: '29',
      min: '21',
      status: 'Sunny',
    },
    {
      day: 'Sun',
      max: '29',
      min: '21',
      status: 'Cloudy',
    },
    {
      day: 'Mon',
      max: '30',
      min: '20',
      status: 'Cloudy',
    },
    {
      day: 'Tue',
      max: '31',
      min: '20',
      status: 'Rain',
    },
    {
      day: 'Wed',
      max: '32',
      min: '21',
      status: 'Cloudy',
    },
    {
      day: 'Thu',
      max: '28',
      min: '20',
      status: 'Sunny',
    },
  ];
  const [forecast, setForecast] = useState(forecastState);

  const status = { Sunny: Sunny, Cloudy: Cloudy, Rain: Rain };

  return (
    <div className='container App text-center'>
      <Searchbar />
      <Forecast forecast={forecast} status={status} />
      <Current data={currentData} status={status} />
    </div>
  );
};

export default App;
