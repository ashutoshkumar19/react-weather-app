import React from 'react';
import '../styles/Searchbar.scss';

const Searchbar = () => {
  return (
    <div className='col-sm-12 col-md-12 col-lg-8 searchbar-container'>
      <div className='input-group  input-group-lg '>
        <div className='input-group-prepend'>
          <div className='input-group-text'>
            <span className='material-icons'>location_on</span>
          </div>
        </div>
        <input
          type='text'
          className='form-control'
          id='inlineFormInputGroup'
          placeholder='Search for location'
        />
        <div className='input-group-append'>
          <div className='input-group-text'>
            <span className='material-icons'>search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
