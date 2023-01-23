const dotenv = require('dotenv');
dotenv.config({ path: './.config.env' });

const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successfully'))
  .catch((err) => console.log(`ERROR! 🔥: ${err}`));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
