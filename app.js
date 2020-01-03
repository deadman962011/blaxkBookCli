const express = require('express');

const pug = require('pug');
const morgan = require('morgan');
const path = require('path');
const app = express();









//require route files
const MainRoute=require('./routes/MainRoutes')
//



// app managment
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));
//





//routes managment

app.use('/',MainRoute)

//



app.listen(4000,function (err) {

  console.log(err)
if(!err){
  console.log('BlaxkBooks-cli connected on 4000');
}

})
