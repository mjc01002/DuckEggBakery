const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Cookies' },
    { name: 'Cake' },
    { name: 'Bread' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Baby Birthday Cookies',
      description:
        'Perfect cookies for a first birthday',
      image: 'baby.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Beach Cookies',
      description:
        'Great cookies for the beach lover.',
      image: 'beach.jpg',
      category: categories[0]._id,
      price: 2.49,
      quantity: 500
    },
    {
      name: 'Garden Hats',
      category: categories[0]._id,
      description:
        'These garden hat cookies are perfect for spring time.',
      image: 'beachhats.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Birthday Cookies 1',
      category: categories[0]._id,
      description:
        'Option 1 for first birthday.',
      image: 'Birthday1.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Chirstmas Cookies 1',
      category: categories[0]._id,
      description:
        'Bring custom cookies to your Christmas get together.',
      image: 'Christmas.jpg',
      price: 49.99,
      quantity: 100
    },
    {
      name: 'Christmas Cookies 2',
      category: categories[0]._id,
      description:
      'Bring custom cookies to your Christmas get together.',
      image: 'ChristmasCookies.jpg',
      price: 69.99,
      quantity: 30
    },
    {
      name: 'Cinco De Mayo Cookies',
      category: categories[0]._id,
      description:
        'Perfect cookies to go with margaritas!!!',
      image: 'cincodemayo.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Owl Cookies',
      category: categories[0]._id,
      description:
        'These Owl Cookies are for the owl lover.  Other animals are also available.',
      image: 'OwlCookies.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Uconn Cookies',
      category: categories[0]._id,
      description: 'After the boot camp is over celebrate with Uconn cookies.',
      image: 'Uconn.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Christmas Cake',
      category: categories[1]._id,
      description:
        'Great cake for Christmas.',
      image: 'ChristmasCake.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Owl Cake',
      category: categories[1]._id,
      description:
        'Great cake for the owl lover.  Other animals are available.',
      image: 'OwlCake.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Peanut Butter Cake',
      category: categories[1]._id,
      description:
        'Peanut Butter Lover cake.',
      image: 'PeanutButter.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Snow Cake',
      category: categories[1]._id,
      description:
        'Winter birthdays are always better with an igloo cake.',
      image: 'SnowCake.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Spa Cake',
      category: categories[1]._id,
      description:
        'Relax with a spa day and a spa cake.',
      image: 'SpaCake.jpg',
      price: 39.99,
      quantity: 100
    },
    {
      name: 'Duck Egg Bread',
      category: categories[2]._id,
      description:
        'Signature Item - French Toast, Sandwiches, Montecristo Sandwiches...Do we need to say more?!!!!',
      image: 'DuckEggBread.jpg',
      price: 8.99,
      quantity: 50
    },
    {
      name: 'Cinnamon Bread',
      category: categories[2]._id,
      description:
        'Cinnamon Bread is perfect with a cup of tea.',
      image: 'CinnamonBread.jpg',
      price: 8.99,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
