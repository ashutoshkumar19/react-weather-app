import React from 'react';
import '../styles/Current.scss';
import WeatherGraph from './WeatherGraph';
import SunriseGraph from './SunriseGraph';

const Current = ({ data, status }) => {
  return (
    <div className='col-sm-12 col-md-12 col-lg-12 current-container'>
      <div className='row-1'>
        <div className='temperature'>{Math.round(data.temp)}°C</div>
        <div className='status-icon'>
          <img src={status.Sunny} alt='' />
        </div>
      </div>

      <div className='row-2'>
        <WeatherGraph />
      </div>

      <div className='row-3'>
        <div className='pressure'>
          <div className='heading'>Pressure</div>
          <div className='value'>
            {data.pressure} <span>hpa</span>
          </div>
        </div>
        <div className='humidity'>
          <div className='heading'>Humidity</div>
          <div className='value'>
            {data.humidity}
            <span>%</span>
          </div>
        </div>
      </div>

      <div className='row-4'>
        <div className='details'>
          <div className='sunrise'>
            <div className='heading'>Sunrise</div>
            <div className='value'>{data.sunrise}</div>
          </div>
          <div className='sunset'>
            <div className='heading'>Sunset</div>
            <div className='value'>{data.sunset}</div>
          </div>
        </div>
        <div className='sunrise-graph'>
          <SunriseGraph />
        </div>
      </div>
    </div>
  );
};

export default Current;
