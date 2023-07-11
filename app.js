const express = require('express');
const dotenv = require('dotenv');
const app = express();

const cors=require('cors');

dotenv.config({ path: './config.env' })

//database connection
require('./db/conn');
// const Member=require('./model/memberSchema');

// app.use(express.json());

// app.use(cors({
//     origin:'*'
// }))

//linking router files
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;



// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.get('/about', (req, res) => {
//     res.send('about');
// });

// app.get('/contact', (req, res) => {
//     res.send('contactss');
// });

// app.get('/trainers', (req, res) => {
//     res.send('trainers');
// });

// app.get('/classes', (req, res) => {
//     res.send('classes');
// });

// app.get('/signin', (req, res) => {
//     res.send('signin');
// });

// app.get('/signup', (req, res) => {
//     res.send('signup');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
