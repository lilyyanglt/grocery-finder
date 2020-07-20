module.exports = {
  notFound: (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  },

  general: (error, req, res, next) => {
    const statusCode = (res.statusCode === 200) ? 500 : res.statusCode;
    res.statusCode = statusCode;
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? '🇻🇦' : error.stack
    })
  }
}