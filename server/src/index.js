require('dotenv').config();

const { notFound, general} = require('./middleware/errorHandling');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

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
  origin: process.env.CORS_ORIGIN
}));
app.use(express.json());

// ====== CUSTOM MIDDLEWARE FOR HANDLING ROUTES =============
app.use('/api', itemRouter);
app.use('/users', userRouter);

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








