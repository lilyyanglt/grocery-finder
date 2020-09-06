require('dotenv').config();

const { notFound, general} = require('./middleware/errorHandling');
const express = require('express');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const passport = require('passport');

// routers
const userRouter = require('./routes/user');
const itemRouter = require('./routes/api/items');

// initializing the server
const app = express();
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`)
})

// connecting to the database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( result => console.log("Database connected!"))
.catch(error => console.log(error.message))

// middleware from third-party libraries
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.set("trust proxy", 1)
app.use(
  cookieSession({
  name: "session",
  keys: [process.env.SESSION_SECRET],
  maxAge: 24 * 60 * 60 * 1000
}))
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

require('../src/middleware/passport_google')(passport);

// ====== CUSTOM MIDDLEWARE FOR HANDLING ROUTES =============
app.use('/api', itemRouter);
app.use('/user', userRouter);

// ====== ROUTES ============================================
app.get('/', (req, res) => {
  res.json({message: "Welcome to grocery api"})
})

// ====== END OF STACK MIDDLEWARE ===========================
/**
 * Not found middleware - when path requested is not valid
 */

app.use(notFound);

/**
 * All other errors encountered will hit this middleware
 * to provide information to users
 */
app.use(general);








