module.exports = authenticate;

function authenticate(req, res, next) {
    if (!req.query.api_key) {
      return res.status(401).json({ 
        message: "An API key was not provided. Please include an 'api_key' query parameter." 
      });
    }

    if (req.query.api_key !== process.env.API_KEY) {
      return res.status(403).json({ 
        message: "Your API key isn't recognized. Please provide a valid API key." 
      });
    }
    
    next();
}