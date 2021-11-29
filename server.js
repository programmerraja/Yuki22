const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
// const compression = require('compression');
require("dotenv").config();

const app = express();
const passport = require("./passport");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(compression({filter:(req,res)=>{
//     //such that it will compress all thing
//    return compression.filter(req, res)
// }}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use(cors())


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static("admin/build"));
}


// app.use(
//   session({
//     name: "justPlaced",
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000, // 24 hrs
//     }
//   })
// );
app.use(passport.initialize());
// app.use(passport.session());
// use API routes here
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/justplaceds", {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify: false, 
  useCreateIndex: true
});


app.get("/yukiAdmin", (req, res) => {
  res.sendFile(path.join(__dirname, "./admin/build/index.html"));
});

// Send every other request to the React app  
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



