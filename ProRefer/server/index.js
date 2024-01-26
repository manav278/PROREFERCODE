const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// --------------------------------------

const connectDB = require('./db');
const mongoose = require('mongoose');
connectDB();
const userSchema = new mongoose.Schema({
  User_ID: {
    type: Number,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }

});

const users = mongoose.model('user-auth', userSchema);
var database_record_length;

//----------------------------------------------------

async function demo() {
  var a = await users.where("User_ID").gte(1).exec();
  database_record_length = a.length;
}


//----------------------------------------------------
//Login

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await users.findOne({ email: email, password: password });
    if (check) {
      res.json("exist");
    }
    else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail")
  }
})

// -----------------------------------------------------
//Signup

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await users.findOne({ email: email });
    if (check) {
      res.json("exist");
    }
    else {
      demo();
      const x = database_record_length + 1;
      console.log("After the signup of new user, the number of records in database are : "+x);
      var d = new users({ email: email, password: password, User_ID: x });
      await d.save();
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail")
  }
})


app.listen(3003, function (error) {
  if (error) console.log(error)
  console.log("Server listening on PORT 3003")
});



