const router = require('express').Router();
const passport = require('passport');

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

module.exports = router;