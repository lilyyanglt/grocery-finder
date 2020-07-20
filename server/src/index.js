const { notFound, general} = require('./middleware/errorHandling');
const express = require('express');

// morgan is used for logging requests to your routes
const morgan = require('morgan');

// helmet is used for customizing headers for security reasons
const helmet = require('helmet');

// this library adds the Cross-origin sharing header
const cors = require('cors');

// immediately loading my environment varilables onto my server
require('dotenv').config();

// initializing the server
const app = express();
const PORT = process.env.PORT || 1337;

// middleware from third-party libraries
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.ORIGIN
}));

// ====== CUSTOM MIDDLEWARE =================================


// ====== ROUTES ============================
app.get('/', (req, res) => {
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






