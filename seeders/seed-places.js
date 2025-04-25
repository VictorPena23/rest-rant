// Purpose of a seeder file: to provide sample data in a database (for good app demonstration)
const db = require('../models')

// Use Mongoose's create() method to create multiple places at once
db.Place.create([
  {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://placekitten.com/500/500',
    founded: 1989
  },
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://placekitten.com/600/400',
    founded: 2020
  }
])
  .then(() => {
    console.log('Seed data added successfully! ✅');
    process.exit();
  })
  .catch(err => {
    console.log('Seeding failed! ❌', err);
    process.exit();
  });
