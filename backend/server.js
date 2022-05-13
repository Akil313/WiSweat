const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    // May have to change once site gets hosted
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}));

// Possible change to express.json({ limit: '50mb' })
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully.");
});

const sweatsRouter = require("./routes/active-sweats");
const teamsRouter = require("./routes/teams");

app.use("/active-sweats", sweatsRouter);
app.use("/teams", teamsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});