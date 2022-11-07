const mongoose = require("mongoose");
const uri =
`mongodb+srv://karthikeyaguruju:8wYgqLPBWem7Ol64@cluster0.oz96v82.mongodb.net/cloud?retryWrites=true&w=majority`;
const connectToMongo = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("connection success to Mongo");
    }
  );
};
module.exports = connectToMongo;
