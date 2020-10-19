const setupMongoose = require('./setupMongoose');
const mongoose = require('mongoose');
const {Question} = require('./models');
const questions = require('./resources/questions.json');

cleanDatabase = async () => {
    console.log('Cleaning entire database');
    return mongoose.connection.dropDatabase();
};

seedDatabase = async () => {
    console.log('seeding database');
    await Question.deleteMany({});
    return Question.insertMany(questions);
};


setupMongoose();

if (process.env.CLEAN != null) {
    cleanDatabase()
        .then(seedDatabase)
        .then(() => {
            console.log('done');
            process.exit(0);
        });
} else {
    seedDatabase()
        .then(() => {
        console.log('done');
        process.exit(0);
    });
}


