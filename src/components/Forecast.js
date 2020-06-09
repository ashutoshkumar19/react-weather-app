import React from 'react';
import '../styles/Forecast.scss';

const Forecast = ({ forecast, status }) => {
  return (
    <div className='col-sm-12 col-md-12 col-lg-12 forecast-container'>
      {forecast.map((item, key) => (
        <div key={key} className='forecast col-sm-12 col-md-10 col-lg-2'>
          <p className='day'>{item.day}</p>

          <div className='temperature'>
            <p className='max'>
              {item.max}
              <span>°</span>
            </p>
            <p className='min'>
              {item.min}
              <span>°</span>
            </p>
          </div>

          <div className='status-icon'>
            <img src={status[item.status]} alt={item.status} />
          </div>

          <p className='status'>{item.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
