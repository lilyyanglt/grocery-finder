const API = 'http://localhost:4000/api';

const fetchData = async (callback) => {
  callback({
    type: "FETCH_DATA_INIT"
  })

  try {
    const response = await fetch(API);
    const result = await response.json();
    console.log('fetch success');

    callback({
      type: 'DATA_FETCH_SUCCESS',
      payload: result
    })
  } catch (error) {
    console.log(error.message);
    console.log('---------------------')
    callback({
      type: 'DATA_FETCH_FAILED'
    })
  }
}

export default fetchData;