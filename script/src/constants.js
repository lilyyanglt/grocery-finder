
/**
 * SAVE ON FOOD LINKS
 */
const SAVE_ON_FOOD_MAIN_BASE = "https://shop.saveonfoods.com/store/B1801094/?_ga=2.85733081.136931942.1594859121-1894784381.1594339522#/";
const SAVE_ON_FOOD_LANDING = SAVE_ON_FOOD_MAIN_BASE + "landing";
const SAVE_ON_FOOD_SEAFOOD = SAVE_ON_FOOD_MAIN_BASE + "category/585/meat%20%26%20seafood";

/**
 * WALMART LINKS
 */
const WALMART_MAIN = 'https://www.walmart.ca/en/grocery/';
const WALMART_MEAT_SEAFOOD_PAGE_1 = `${WALMART_MAIN}meat-seafood/N-3793`;
const WALMART_MEAT_SEAFOOD_PAGE_2 = `${WALMART_MEAT_SEAFOOD_PAGE_1}page-2`;


const saveOnFoods = {
  storeName: 'saveOnFoods',
  link: [SAVE_ON_FOOD_LANDING, SAVE_ON_FOOD_SEAFOOD],
  productContainer: '.product__itemContent',
  imgTag:'temporaily null',
  priceTag: 'span.priceInfo__price--current',
  descTag: 'p.text',
  itemName: 'h3'
}

const walmart = {
  storeName: 'walmart',
  link: [WALMART_MEAT_SEAFOOD_PAGE_1, WALMART_MEAT_SEAFOOD_PAGE_2],
  productContainer: 'thumb-inner-wrap.nutrition-enable.nutrition-icon-enable',
  imgTag:'img.lazy-img (need source)',
  priceTag: 'div.span....',
  descTag: 'no description available',
  itemName: 'h2.thumb-header'
}


module.exports = {
  saveOnFoods,
  walmart
}