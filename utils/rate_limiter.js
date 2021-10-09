const rateLimit = require("express-rate-limit");

const ratelimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max:      200 // Max 200 requests per windowMs
});

module.exports = ratelimiter;