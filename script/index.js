const scrapeData = require('./src/script');
const {saveOnFoods, walmart } = require('./src/constants');
const axios = require('axios');

const postAPI = 'http://localhost:4000/api';
const deleteAPI = 'http://localhost:4000/api';

const deleteOldData = async(api) => {
  try {
    const response = await axios.delete(api);
    console.log({message: "success",
  response: response});
  } catch (error) {
    console.log(error.message);
  }
}

deleteOldData(deleteAPI);
scrapeData(saveOnFoods.link[0],
  postAPI,
  saveOnFoods.storeName,
  saveOnFoods.productContainer,
  saveOnFoods.imgTag,
  saveOnFoods.itemName,
  saveOnFoods.priceTag,
  saveOnFoods.descTag);
