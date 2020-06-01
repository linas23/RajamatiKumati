const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const app = express();


// process.on('uncaughtException', err => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

dotenv.config({ path: './config.env' });
const app = require('./app');
app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  next();
});
/* const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
); */
const DB = 'mongodb://localhost/rajamatikumati'

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(() => console.log('DB connection successful!')).catch(err => console.log('something went wrong', err));

const port = process.env.PORT || 8888;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
