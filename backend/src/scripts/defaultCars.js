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
          minAgeRestriction: 18,
        },
        {
          manufacturer: 'BMW',
          globalPrice: 150,
          universalPercentageCoefficient: 0.4,
          minAgeRestriction: 18,
        },
        {
          manufacturer: 'PORSCHE',
          globalPrice: 500,
          universalPercentageCoefficient: 0.7,
          minAgeRestriction: 25,
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
    console.log(process.env.MONGO_URL);
    console.log('mongoose connection failed');
    process.exit(1);
  });
