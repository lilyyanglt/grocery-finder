const { Router } = require('express');
const { Items } = require('../model/grocerySchema');
require('dotenv').config();

const router = Router();

router.get('/:key', async (req, res, next) => {
  if(req.params.key === process.env.SECRET) {
    try {
      const results = await Items.find();
      res.json(results);
    } catch (error) {
      next(error);
    }
  } else {
    const error = new Error('Not allowed to get without key');
    res.status(401);
    next(error);
  }
 
})

/** only user with valid secret key can post to db*/

router.post('/:key', async (req, res, next) => {
  if(req.params.key === process.env.SECRET) {
    try {
      const newItem = new Items(req.body);
      const createdEntry = await newItem.save();
      res.json(createdEntry);
    } catch (error) {
      console.log(error);
      res.status(416);
      next(error);
    }
  } else {
    const error = new Error('Not allowed to post without key');
    res.status(401);
    next(error);
  }
})

router.delete('/:key', async (req, res, next) => {
  if(req.params.key === process.env.SECRET) {
    try {
      /* before new data adds to db, I want to make a delete call 
      * to remove stale data to prevent overloading of the db
      * this route will be responsible for ensuring stale data is 
      * removed
      */
      const response = await Items.deleteMany({});
      console.log(response);
      res.json({message: "Deleted All Successfully"});
    } catch (error) {
      console.log(error.message);
      res.status(416);
      next(error);
    }
  } else {
    const error = new Error('Not allowed to delete without key');
    res.status(401);
    next(error);
  }
})


module.exports = router;