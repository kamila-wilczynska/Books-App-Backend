const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const booksRouter = require('./routes/Books');

const app = express();

const corsOptions = {
	origin: 'https://book-app-backend-and-frontend.netlify.app/',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/books', booksRouter);

app.get('/', (req, res) => {
	res.send('Backend is running');
});

module.exports = app;
