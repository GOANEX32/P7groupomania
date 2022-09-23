const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser,requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');
const path = require('path');



const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


//jwt middleware
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
} );

app.use("/images", express.static(path.join(__dirname, "images")));
// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);    

//server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);	
});