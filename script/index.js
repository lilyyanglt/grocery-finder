const axios = require('axios');
const fetch = require('node-fetch')
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const postAPI = 'http://localhost:4000/api';
const STORE_NAME = 'saveOnFoods';
const SAVE_ON_FOOD_MAIN_BASE = "https://shop.saveonfoods.com/store/B1801094/?_ga=2.85733081.136931942.1594859121-1894784381.1594339522#/";
const SAVE_ON_FOOD_LANDING = SAVE_ON_FOOD_MAIN_BASE + "landing";
const SAVE_ON_FOOD_SEAFOOD = SAVE_ON_FOOD_MAIN_BASE + "category/585/meat%20%26%20seafood";


const scrapeData = async (url) => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto(url, {waitUntil: "networkidle0"});
  const html = await page.content(); // grabs the content from the page
  const $ = cheerio.load(html);
  const productItems = $('.product__itemContent');
  
  productItems.each(async (index, item) => {
    const $item = $(item);
    const dbItem = {
      storeName: STORE_NAME,
      itemName: $item.find('h3').text(),
      itemPrice: $item.find('span.priceInfo__price--current').text(),
      itemDesc: $item.find('p.text').text()
    }
    console.log(dbItem);
    try {
      await axios.post(postAPI, dbItem);
      console.log("post success");
    } catch (error) { 
      console.log(error.message);
    }
  })
  
  await browser.close();
  
}

scrapeData(SAVE_ON_FOOD_LANDING);
