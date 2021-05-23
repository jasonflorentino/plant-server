require('dotenv').config();
const errorHandler = require('./utils/error_handler');
const authenticate = require('./utils/authenticate');
const ratelimiter = require('./utils/rate_limiter');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const isProd = process.env.NODE_ENV === 'production';

// Middlewares
app.use(morgan(isProd ? 'combined' : 'dev'));
app.use(helmet());
app.use(cors());
app.use(ratelimiter);
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// Routes
app.use('/', require('./routes/home/home.controller'));
app.use(authenticate);
app.use('/plants', require('./routes/plants/plants.controller'));

app.use(errorHandler);

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server listening on port ' + PORT));