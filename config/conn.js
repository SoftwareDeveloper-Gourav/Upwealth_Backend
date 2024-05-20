const mongoose = require('mongoose');

const conn = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/upwealth').then(()=>{
        console.log('DB Connected');
    });
  
}

module.exports = conn;