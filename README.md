This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Grocery Finder
- I always had a hard time comparing prices of the different grocery items from store to store, so I created this app so I can personally use it to search for groceries and compare prices before I make a trip out to the store. This is currently an initial MVP with additional features to be added in the future. See projects tab for upcoming features that I am working on.

## Features
- Simple Search by grocery name
- Data is currently limited to meat and seafood from SaveOnFoods

## ToDo to achieve initial MVP:

* Initial thoughts:

Initial MVP - No need to write my own REST API yet but instead I am using sheet.best to privde the data layer. 

### Frontend:
- [x] Build frontend prototype without styles to get basic functionality in place
  - [x] Using sheetbest as the db
- [x] basic search
- [x] GET data from api 
- [x] filter out data that's not needed
- [x] display results of search in a list (using React)
- [x] Simple Styling of the components to make it look good
- [ ] Need to improve on the styling using a css framework. (bulma? Material? boostrap? or semantics ui)
- [x] Fix the issue where No Results components shows when there's a fetch error. 

### Script for Scraping
- [x] Use Cheerio and Axios to scrape data from a Save on Foods
  - [x] Cheerio wasn't sufficient to scrape dynamically generated sites, so I learned to puppeteer with cheerio. 
- [x] Once data is scraped, test to post to sheet.best api
- [x] Once backend API is ready, update to post to MONGODB 

### Backend

- [x] Used sheet.best api for initial data layer
- [x] Detemine the structure of db (very simple with 4 properties: storeName, itemName, itemPrice, and itemDescription)
- [x] Connect to DB
- [x] GET api request
- [x] POST api request
- [x] DELETE api request - I want to use this route because every time before new data is posted to db, I want to remove previous data since those would be old.
  - [x] Not sure if this is the best way, but for an MVP, this will do for now. 
- [x] Protect GET route of backend api by adding secret key

### Hosting:
- [x] host backend api on vercel - ensure cors origin is the production link of front-end
- [x] host frontend on netlify

## Attribution

Special thanks to:
- [Blush](https://blush.design/) for providing the illustration I am using for the no result view when search term has no matches
- [CodingGarden](https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw) for his tutorials on fullstack react application and web scraping with cheerios
  - https://www.youtube.com/watch?v=5pQsl9u_10M&t=4458s
  - https://www.youtube.com/watch?v=6R7u6EMWaa4&t=2601s