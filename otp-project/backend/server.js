const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/otp-demo', { useNewUrlParser: true, useUnifiedTopology: true ,
family:4,
});

// Define a schema and model for storing users
const userSchema = new mongoose.Schema({
  email: String,
  otp: String,
});

app.use(cors());
const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Endpoint to verify OTP
// app.post('/verify-otp', async (req, res) => {
//     const { email, otp } = req.body;
  
//     // Check if the provided OTP is valid
//     const user = await User.findOne({ email, otp });
//     if (user) {
//       // Clear the OTP in the database after successful verification
//       await User.updateOne({ email }, { $unset: { otp: 1 } });
//       res.status(200).send('OTP verified successfully.');
//     } else {
//       res.status(400).send('Invalid OTP.');
//     }
//   });
  

app.post('/request-otp', async (req, res) => {
  const { email } = req.body;

 
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

 
  await User.findOneAndUpdate({ email }, { otp }, { upsert: true });


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prorefer.team@gmail.com', 
      pass: 'naac nlgg hdwj bgxv', 
    },
  });

  const mailOptions = {
    from: 'prorefer.team@gmail.com', 
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('OTP sent successfully.');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});