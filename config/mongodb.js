// config/mongodb.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tuBaseDeDatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;
