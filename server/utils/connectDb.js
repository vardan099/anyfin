const mongoose = require('mongoose');
const config = require("config");
const connection = {};

console.log(config.get('MONGO_SRV'));

async function connect() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing connection");
    return;
  }
  // Use new database connection
  const db = await mongoose.connect(config.get('MONGO_SRV'), {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

module.exports.connect = connect;
