const Express = require("express");
const app = Express();
var cors = require("cors");
const mongooseConnection = require("./helpers/mongoose-connection.js");
const appRoutes = require("./routes");

app.use(Express.json());
app.use(cors());

app.use("/api", appRoutes);

const { port } = require("./config");
const PORT = process.env.PORT || port;

mongooseConnection();
app.listen(PORT, () => {
  console.log("Server listening on PORT:", port);
});
