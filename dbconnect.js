const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://admin1:anime@cluster0.fgqdy.mongodb.net/chatter?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
