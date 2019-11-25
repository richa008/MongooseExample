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
    
    const newDish = Dishes({
        name: "Pizza",
        description: "test"
    });

    newDish.save()
    .then((dish) => {
        console.log(dish);

        return Dishes.find({});
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.deleteMany({});
    })
    .then(() => {
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
    });
});