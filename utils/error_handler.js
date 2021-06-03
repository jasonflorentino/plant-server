module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    // From 'throw' -- client errors
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }
    
    // From 'throw new Error()' -- server errors
    return res.status(500).json({ message: err.message });
}