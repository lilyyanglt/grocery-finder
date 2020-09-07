const router = require('express').Router();
const passport = require('passport');
const User = require('../../model/userSchema');

router.get('/', (req, res) => {
  res.json({message: `${req.url} is valid`});
})

router.get('/auth/google', 
passport.authenticate('google', {
  scope: ["profile"]
}))

router.get('/auth/google/callback',
passport.authenticate('google', {failureRedirect: '/user/auth/login/failed'}),
(req, res) => {
  console.log("Calling /auth/google/callback");
  res.redirect('http://localhost:4000/user/auth/login/success');
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:4000/user/loginStat');
})

router.get('/auth/login/failed', (req, res) => {
  res.status(401).json({
    loginSuccess: false,
    message: "user failed to login"
  })
})

router.get('/auth/login/success', (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    res.json({
      loginSuccess: true,
      user: req.user,
      message: "User logged in successfully"
    })
  } else {
    const error = new Error("auth/login/success doesn't have user")
    next(error)
  }
})

// handle for providing user logout status
router.get('/loginStat', (req, res) => {
  if (req.user) {
    res.json({
      loginStat: true,
      user: req.user
    })
  } else {
    res.json({
      loinStat: false,
      userLoggedOutSuccess: true
    })
  }
})

/**
 * handle for updating user shopping list with items
 * :id is the userid
 * just need to add the id is sufficient
 *  */ 

router.put('/addItem/:id', (req, res, next) => {
  const newItem = req.body
  const userId = req.params.id
  console.log(newItem);
  User.findOne({_id: userId}, (err, user) => {
    if (user) {
      const currentList = user.shoppingList
      currentList.push(newItem._id);
      User.findOneAndUpdate({_id: userId}, {shoppingList: currentList})
      .then(user => {
        if (user) {
          res.json({
            message: "Successfully added",
            listUpdated: true
          })
        } else {
          res.json({
            message: "Added failure",
            listUpdated: false
          })
        }
      })
      .catch(err => next(err))
     
    } else {
      next(err)
    }
  })
})

/**
 * @route PUT /user/removeItem will remote the item from the user's shopping list
 */

 router.put('/removeItem/:userId', (req, res) => {
   const userId = req.params.userId
   const itemIdToBeRemoved = req.body._id
   User.findOne({_id: userId})
   .then(user => {
    if (user) {
      let list = user.shoppingList;
      list = list.filter((item) => {
          return item !== itemIdToBeRemoved
      })

      User.findOneAndUpdate({_id: userId}, {shoppingList: list})
      .then(user => res.json({message: "updated", errored: false}))
      .catch(err => res.json({message: err.message, errored: true}))

    } else {
      res.json({message: "User not found",
      errored: true})
    }
   })
   .catch(err => {
    res.json({message: err.message, errored: true})
   })
 })

/**
 * @route GET /user/getShoppingList will return a json of the user's shopping list
 */
router.get('/getShoppingList/:userId', (req, res) => {
  const userId = req.params.userId
  User.findOne({_id: userId})
  .then(user => {
    if(user) {
      res.json({
        userList: user.shoppingList,
      errored: false})
    } else {
      res.json({message: "User not found",
    errored: true})
    }
  })
  .catch((err) => {
    res.json({message: err.message,
    errored: true})
  })
})

module.exports = router;