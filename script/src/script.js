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

const scrapeSaveOnFoodData = async (url,
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
    const $img = $item.find(imgTag).children('img').eq(0);
    const dbItem = {
      imgSource: $img.attr('src') || 'temporaily unavailable',
      storeName: storeName,
      itemName: $item.find(itemName).text(),
      itemPrice: $item.find(priceTag).text(),
      itemDesc: $item.find(descTag).text()
    }
    console.log(dbItem);

    postData(api, dbItem);

  })
  
  await browser.close();
  
}

/**
 * CAN'T scrape walmart data yet, because this is the resulting data scraped
 * {
  imgSource: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  storeName: 'walmart',
  itemName: 'Chicken Thighs - Value Pack',
  itemPrice: '$12.38\n\t\n\t\n',
  itemDesc: ''
}
 */

const scrapeWalmartData = async (url,
  api, 
  storeName,
  productContainer, 
  imgTag,
  itemName,
  priceTag,
  descTag = 'no description availalbe') => {

  console.log('opening browser');
  console.log(url);
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto(url, {waitUntil: "networkidle0"});
  const html = await page.content(); // grabs the content from the page
  const $ = cheerio.load(html);
  const productItems = $(productContainer);
  
  console.log("scraping");
  console.log(productContainer);
  console.log(productItems.length);

  productItems.each(async (index, item) => {
    const $item = $(item);
    const dbItem = {
      imgSource: $item.find(imgTag).attr('src') || 'temporaily unavailable',
      storeName: storeName,
      itemName: $item.find(itemName).text(),
      itemPrice: $item.find(priceTag).text(),
      itemDesc: $item.find(descTag).text()
    }
    console.log(dbItem);

    postData(api, dbItem);

  })
  
  await browser.close();
  
}

const postData = async(api, dbItem) => {

    try {
      await axios.post(api, dbItem);
      console.log("post success");
    } catch (error) { 
      console.log(error.message);
    }
}

module.exports = {scrapeSaveOnFoodData, scrapeWalmartData}