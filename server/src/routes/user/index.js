const { Router } = require('express');
const userDB = require('../../model/usersMockDB');

const router = Router();

router.get('/', (req, res) => {
  res.json({message: `${req.url} is valid`});
})

router.post('/login', (req, res) => {
  
  res.json({isLogggedin: true});
})

module.exports = router;