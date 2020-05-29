const express = require('express');
const path = require('path');


const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const globalErrorHandler = require('./controllers/errorController');

const app = express();


//  set views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
const multer = require('multer');
const upload = multer({ dest: '/uploads' });

app.get('/', (req, res, next) => {
    res.status(200).send(console.log('hello'));
})

app.use('/api/v1/user', userRouter)
app.use('/api/v1/post', upload.single('photos'), postRouter)


app.use(globalErrorHandler);
module.exports = app;