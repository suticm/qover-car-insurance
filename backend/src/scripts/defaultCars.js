// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URL)
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
  .catch((e) => {
    console.log(e);
    console.log('mongoose connection failed');
    process.exit(1);
  });
