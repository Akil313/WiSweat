var mongoose = require("mongoose");
const mongoAtlasUri = `mongodb+srv://Akil313:Sodium!2@wisweat-data.c63or.mongodb.net/WiSweatDB?retryWrites=true&w=majority`;

async function mongooseConnection() {
  try {
    // Connect to MongoDB Cluster
    await mongoose.connect(mongoAtlasUri).then(() => {
      console.log("You're in! B)");
    });
  } catch (e) {
    console.log(`Could not connect.\n${e}`);
  }
  const dbConnection = mongoose.connection;

  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));

  dbConnection.once("open", () => console.log("Connected to DB!"));
}

module.exports = mongooseConnection;
