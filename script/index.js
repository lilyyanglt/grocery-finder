const {scrapeSaveOnFoodData, scrapeWalmartData} = require('./src/script');
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
scrapeSaveOnFoodData(saveOnFoods.link[1],
  postAPI,
  saveOnFoods.storeName,
  saveOnFoods.productContainer,
  saveOnFoods.imgTag,
  saveOnFoods.itemName,
  saveOnFoods.priceTag,
  saveOnFoods.descTag);

// scrapeWalmartData(walmart.link[0],
//   postAPI,
//   walmart.storeName,
//   walmart.productContainer,
//   walmart.imgTag,
//   walmart.itemName,
//   walmart.priceTag,
//   walmart.descTag);