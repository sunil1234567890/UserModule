const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
var userController = require('./controllers/userController.js')

var app = express();
app .use (bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin:'http://localhost:4200'}));
//app.use(cors());


app.listen(3000,()=>console.log('server started at port:3000'));

app.use('/users',userController);