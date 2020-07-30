import React from 'react';
import alertIcon from '../asset/alert.svg';
import '../style/loadingError.css';

// loading ClassName is from main.css because 
// i need to apply the same style as the <ReactLoading/> component

const LoadingError = () => {
  return (
    <div className="loading loading_error">
      <img className="error_icon" src={alertIcon}/> 
      <p>OOpsy, something went wrong</p>
    </div>
  )
}

export default LoadingError;