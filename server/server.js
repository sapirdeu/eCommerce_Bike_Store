const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const formidable = require('express-formidable');
// const cloudinary = require('cloudinary');

const app = express();
const mongoose = require('mongoose');
// const async = require('async');

const port = process.env.PORT || 3002;
app.listen(port, ()=> {
    console.log(`Server running at ${port}`)
});