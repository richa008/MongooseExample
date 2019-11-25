const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connect.then((db) => {
    console.log('Connected correctly to server');
    
    Dishes.create({
        name: 'Pizza',
        description: 'Test'
    })
    .then((dish) => {
        console.log(dish);
        
        return Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});