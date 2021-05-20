module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }
    
    // default to 500 server error
    return res.status(500).json({ message: err.message });
}