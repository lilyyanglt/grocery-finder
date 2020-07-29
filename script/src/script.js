const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

/**
 * 
 * @param {*} url - the urls to be scraped
 * @param {*} api - the api to post the data to 
 * @param {*} storeName - name of store in string
 * @param {*} productContainer - name of the product container class in string
 * @param {*} imgTag - name of image class in string
 * @param {*} itemName - name of itemName class in string
 * @param {*} priceTag - name of price class in string
 * @param {*} descTag - name of description class in string
 */

const scrapeData = async (url,
  api, 
  storeName,
  productContainer, 
  imgTag,
  itemName,
  priceTag,
  descTag = 'no description availalbe') => {

  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto(url, {waitUntil: "networkidle0"});
  const html = await page.content(); // grabs the content from the page
  const $ = cheerio.load(html);
  const productItems = $(productContainer);
  
  productItems.each(async (index, item) => {
    const $item = $(item);
    const dbItem = {
      imgSource: imgTag,
      storeName: storeName,
      itemName: $item.find(itemName).text(),
      itemPrice: $item.find(priceTag).text(),
      itemDesc: $item.find(descTag).text()
    }
    console.log(dbItem);
    try {
      await axios.post(api, dbItem);
      console.log("post success");
    } catch (error) { 
      console.log(error.message);
    }
  })
  
  await browser.close();
  
}

module.exports = scrapeData;