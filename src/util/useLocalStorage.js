import React from 'react';

const useLocalStorage = (key, initialValue='') => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialValue
  ); 

  React.useEffect(()=>{
    localStorage.setItem(key, value);
  });

  return [value, setValue]
}

export default useLocalStorage;