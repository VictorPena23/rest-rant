// Modules and Globals
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose'); // Import mongoose

const app = express();

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Controllers & Routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.render('error404');
});

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});

module.exports = app;
