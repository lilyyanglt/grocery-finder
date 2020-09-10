This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Grocery Finder

## Problem Statement
- I always had a hard time comparing prices of the different grocery items from store to store. Whenever I am at one store, I'll always feel like maybe the item is cheaper in another store, but in order to find out, I might have to visit each site of different stores to compare manually. This app is created to solve this problem so that people can use to find grocery items they are interested in by a simple search and it will show the prices from different stores arranged from the cheapest to the more expensive.

## Attribution

Special thanks to:
- [Blush](https://blush.design/) for providing the illustration I am using for the no result view when search term has no matches
- [Canva](https://www.canva.com/) for icon design
- [CodingGarden](https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw) for his tutorials on fullstack react application and web scraping with cheerios so I can learn the techniques to build my application
  - https://www.youtube.com/watch?v=5pQsl9u_10M&t=4458s
  - https://www.youtube.com/watch?v=6R7u6EMWaa4&t=2601s
- [Tutorial for setting up twitter authentication](https://github.com/leannezhang/twitter-authentication) - I learned from her approach to implement my google login authentication

## Demo
* Here's a demo of what the app looks like. This is version 2.0 demo completed on Sept 9, 2020.

![link](./demo/grocery_app_demo.gif)

## Change Log

### Version next
- Features to be included:
  - Filter by favorites
  - sort items by lowest price
  - other stores available
  - etc.

### Version 2.0 (To be Deployed)
Total time taken to build this: ~5 days. (Sept 2020)

- Implemented login with google
- Added Login routes
- Updated backend with the ability to add or remove items from favorites
- Updated frontend with add or remove items from favorites

### Version 1.0 (Deployed to production)
Total time taken to build this: ~ 4 weeks including learning React and building this. (July 2020)

- Simple Search by grocery name
- Data is currently limited to meat and seafood from SaveOnFoods

## Tools and Technologies:

- React
- Node/Express
- MongoDB Atlas
- Passport (Google Strategy)
- Cheerios / Puppeteer
- Netlify
- Vercel


## Tasks to achieve initial MVP (Version 1.0):

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

