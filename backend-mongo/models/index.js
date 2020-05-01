const mongoose = require('mongoose');
const Superheroe = require('./Superheroe');

/// mongoose.connect(URL,OPTION,CALLBACK)
const URL_MONGO= 'mongodb+srv://usuario:123.123@cluster0-g1uhx.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL_MONGO, {useNewUrlParser:true}, (err) => {
    if (!err) console.log('Conexión exitosa');
    else console.log(err);
}); 

module.exports = { Superheroe }; 