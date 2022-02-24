const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const passport = require("./passport");
const routes = require("./routes");
const {sendWhoIs} = require("./util/util");
const bot = require("./util/bot");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use(cors())


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  sendWhoIs(req);
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("admin/build"));
}

app.use(passport.initialize());

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

app.get("/yukiAdmin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./admin/build/index.html"));
});
app.get("/report",(req,res)=>{
  sendReport(req.query.ques,true,req);
})
// Send every other request to the React app  
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  sendWhoIs(req);
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



