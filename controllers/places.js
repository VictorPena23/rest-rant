const router = require('express').Router()

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    let places = [{
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
      }]
      
    res.render('places/index', { places });
})

module.exports = router