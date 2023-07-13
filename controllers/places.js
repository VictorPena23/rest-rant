const router = require('express').Router();
const placesModel = require('../models/places.js')

// GET /places
router.get('/', (req, res) => {
  const placesArr = [{
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

// Show
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const place = placesModel[id];
  if (isNaN(id) || !place) {
    res.render('error404');
  } else {
    res.render('places/show', { place: place });
  }
});

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// POST /places
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  placesModel.push(req.body);
  res.redirect('/places');
});

// Export router
module.exports = router;


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

//Show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

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
