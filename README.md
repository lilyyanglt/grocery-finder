This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Grocery Search Engine
- I always have a hard time comparing price of the different grocery items from store to store, so I created this app so I can personally use it to search for groceries and compare prizes before I make a trip out to the store. 


## Features
- Search Engine with products from [store names]

## Roadmap
- I would like to be able to enable login for users that wants to add items to their shopping list

## ToDo:

* Initial thoughts:

Initial MVP - No need to write my own REST API but instead I am using sheet.bet to privde this layer

Frontend:
- [x] Build frontend prototype without styles
  - [ ] Using sheetbest as the db
- [x] basic search
- [x] GET data from api 
- [x] filter out data that's not needed
- [x] display results of search in a list (using React)
- [x] Simple Styling of the components to make it look good
- [ ] Need to improve on the styling using a css framework. (bulma? Material? boostrap? or semantics ui)

Script for Scraping
- [x] Use Cheerio and Axios to scrape data from a Save on Foods
  - [ ] Cheerio wasn't sufficient, so I need to use puppeteer. 
- [ ] Once data is scraped, post to Google Sheets api

Once the basic building block is working, now build the RESTAPI to move away from Excel sheet

- [x] Detemine the structure of db (very simple with 4 properties: storeName, itemName, itemPrice, and itemDescription)
- [x] Connect to DB
- [x] GET api request
- [x] POST api request
- [ ] DELETE api request - I want to use this route because every time before new data is posted to db, I want to remove previous data since those would be old.
  - [ ] Not sure if this is the best way, but for an MVP, this will do for now. 

