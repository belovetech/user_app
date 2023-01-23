const express = require('express');
const mongoSanitizer = require('express-mongo-sanitize');
const morgan = require('morgan');

const userRouter = require('./userMVC/userRouter');
const globalErrorHandler = require('./userMVC/errorController');

// Express app
const app = express();

// body parser
app.use(express.json());

// Development logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Data sanitization against noSQL injection
app.use(mongoSanitizer());

// Route
app.use('/api/v1/users', userRouter);

// ERROR MIDDLEWARE
// app.use(globalErrorHandler);

module.exports = app;
