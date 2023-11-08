const mongoose = require('mongoose');


//by me to supress warning
mongoose.set("strictQuery",false);

const mongoURI = "mongodb+srv://krishna_mern:anupam21love@cluster0.p5kouvn.mongodb.net/influencerWebsite";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log(`Connected to mongo succesfully on cluster`);
    });
}

module.exports = connectToMongo;