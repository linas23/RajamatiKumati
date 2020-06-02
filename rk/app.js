const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config()
const cors = require('cors')

const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const profileRouter = require("./routes/profileRoute")
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(cors())

//  set views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10Mb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

const multer = require('multer');
const multerStorage = multer.memoryStorage();
const upload = multer({ dest: './uploads', storage: multerStorage });
const profileUpload = multer({ dest: './avatar' })
app.get('/', (req, res, next) => {
    // res.status(200).send(console.log('hello'));
})

app.use('/api/v1/user', userRouter)
app.use('/api/v1/post', upload.single('coverImage'), postRouter)
app.use('/api/v1/profile', profileUpload.single('avatar'), profileRouter)


app.use(globalErrorHandler);
module.exports = app;