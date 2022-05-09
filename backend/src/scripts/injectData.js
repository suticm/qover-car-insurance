/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('inserting user...');
    mongoose.connection.db
      .collection('users')
      .insertOne({
        username: 'Qover',
        email: 'Qover',
        password: await bcrypt.hash('ninja', 8),
      })
      .then(() => {
        console.log(
          'user successfully inserted.\nusername: Qover\npassword: ninja',
        );
      })
      .catch(() => {
        console.log('failed to insert user');
      });
  })
  .then(() => {
    console.log('inserting cars into db...');
    mongoose.connection.db
      .collection('cars')
      .insertMany([
        {
          manufacturer: 'AUDI',
          globalPrice: 250,
          universalPercentageCoefficient: 0.3,
          restrictions: [
            {
              name: 'minAge',
              value: 18,
            },
            {
              name: 'maxAge',
              value: 75,
            },
          ],
        },
        {
          manufacturer: 'BMW',
          globalPrice: 150,
          universalPercentageCoefficient: 0.4,
          restrictions: [
            {
              name: 'minAge',
              value: 18,
            },
            {
              name: 'maxAge',
              value: 75,
            },
          ],
        },
        {
          manufacturer: 'PORSCHE',
          globalPrice: 500,
          universalPercentageCoefficient: 0.7,
          restrictions: [
            {
              name: 'minAge',
              value: 25,
            },
            {
              name: 'maxAge',
              value: 75,
            },
          ],
        },
      ])
      .then(() => {
        console.log('cars successfully inserted.');
      })
      .catch(() => {
        console.log('failed to insert cars');
      })
      .finally(() => process.exit(0));
  })
  .catch(() => {
    console.log('mongoose connection failed');
    process.exit(1);
  });
