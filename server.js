/**
 * Imports
 */
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
/**
 * Database
 */
const connectDB = require("./config/db");
const { mailSender } = require("./Utils/mailSender.js");
connectDB();

/**
 * Set Port
 */
const port = process.env.PORT || 5000;

/**
 * Initialize Express
 */
const app = express();

/**
 * Middlewares
 */
app.use(express.json({ extended: true }));
app.use(cors());
app.use(cookieParser());

// console.log(process.env);
// console.log(process.env.GOOGLE_CLIENT_ID);
// mailSender();
/**
 * Routes
 */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

app.get("/api", (req, res) => {
  res.json({ message: `The API is Runing ${process.env.helloworld} ` });
});

// trying to server images form the server
app.use("/api/images/", express.static("productImages"));

/**
 * Serve static assets in production
 */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

/**
 * Listen to port
 */
app.listen(port, () => console.log(`Listening on port ${port}`));
