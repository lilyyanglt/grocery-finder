const { Router } = require('express');
const { Items } = require('../model/grocerySchema');

const router = Router();

router.get('/', async (req, res) => {
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


module.exports = router;