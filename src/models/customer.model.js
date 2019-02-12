let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/node_training", {useNewUrlParser: true})
.then(() => {
    console.log('Connected to the database!');
})
.catch((err) => {
    console.log('Connection failed', err);
});

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('customer', CustomerSchema);
