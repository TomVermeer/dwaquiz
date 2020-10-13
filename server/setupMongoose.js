const mongoose = require('mongoose');

const registerMongoose = () => {
    const mongoDbAddress = process.env.MONGO_ADDRESS || 'localhost:27017';
    const database = process.env.DATABASE || 'Quizzer';

    mongoose.connect(`mongodb://${mongoDbAddress}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true});
};

module.exports = registerMongoose;