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
  res.redirect('http://localhost:3000/');
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
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
    User.findOne({_id: req.user._id})
    .then(user => {
      res.json({
        loginSuccess: true,
        user: {
          id: user._id,
          list: user.shoppingList
        },
        message: "User logged in successfully"
      })
    })
    .catch(err => next(err))
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
          next(new Error("User is not found, so can't update"))
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

 router.put('/removeItem/:userId', (req, res, next) => {
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
      .catch(err => next(err))

    } else {
      res.status(404)
      next(new Error("User not found"))
    }
   })
   .catch(err => {
    next(err)
   })
 })

/**
 * @route GET /user/getShoppingList will return a json of the user's shopping list
 */
router.get('/getShoppingList/:userId', (req, res, next) => {
    const userId = req.params.userId
    User.findOne({_id: userId})
    .then(user => {
        res.json({
          userList: user.shoppingList,
        errored: false})
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;