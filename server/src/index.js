const { notFound, general} = require('./middleware/errorHandling');
const { Items } = require('./model/grocerySchema');
const itemRouter = require('./api/items');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// initializing the server
const app = express();
const PORT = process.env.PORT || 1337;

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

// ====== CUSTOM MIDDLEWARE =================================
app.use('/api', itemRouter);

// ====== ROUTES ============================
app.get('/', (req, res) => {
  Items.find((err, result) => {
    if(!err) {
      console.log(result);
    } else {
      console.log(err);
    }
  })
  res.json({
    message: "hello world"
  })
})

// ========== END OF STACK MIDDLEWARE =======================
// error handler - not found middleware - should always be 
// the last of the middleware in the queue
// this is specifically for "not found" error
app.use(notFound);
// this is for all generic error - if there's a database error
// or server error, it will come to this one
app.use(general);

app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`)
})






