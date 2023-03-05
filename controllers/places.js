const router = require('express').Router();
const placesModel = require('../models/places.js')

// GET /places
router.get('/', (req, res) => {
  let placesArr = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://cdn.vox-cdn.com/thumbor/FrLmG_YlsWzjIpoi7gGKZkCcuIs=/0x0:3000x930/1200x900/filters:focal(1260x225:1740x705):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62456851/Noodle_Asia.0.0.0.0.0.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://www.orlandocatcafe.com/wp-content/uploads/2022/07/orlando-cat-cafe-interior.jpg'
  }];

  res.render('places/index', { places: placesArr });
});

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// POST /places
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  placesModel.push(req.body)
  res.redirect('/places')
})

module.exports = router;
