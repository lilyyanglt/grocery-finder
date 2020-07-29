const { Router } = require('express');
const { Items } = require('../model/grocerySchema');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
  const results = await Items.find();
  res.json(results);
} catch (error) {
  next(error);
}
})

router.post('/', async (req, res, next) => {
  try {
    const newItem = new Items(req.body);
    const createdEntry = await newItem.save();
    res.json(createdEntry);
  } catch (error) {
    console.log(error);
    res.status(416);
    next(error);
  }
})

router.delete('/', async (req, res, next) => {
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
})


module.exports = router;