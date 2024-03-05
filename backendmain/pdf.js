const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const userID = 1;

const app = express();

app.use((req, res, next) => {
  // Set CORS headers to allow cross-origin requests (required to communicate with flutter thorugh localhosting)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers','Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale');
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS, PUT, GET, DELETE");
  next();
});




// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a MongoDB model for storing files
const File = mongoose.model('Resume', {
  User_ID: Number,
  data: Buffer,
});

// Handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    const filter = { User_ID: userID };
    
    // Update specificField if document exists, or create a new document with specificField if it doesn't exist
    const update = { data: buffer };
    
    // Options: return the updated document if new is true, and upsert is true to create the document if it doesn't exist
    const options = { new: true, upsert: true };
    
    // Perform the update operation
    const result = await File.findOneAndUpdate(filter, update, options);

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getPdf/', async (req, res) => {
//   const a = req.params.x;
  try {
    const file = await File.findOne({ User_ID: userID });

    if (file) {
      // Save the file to the server temporarily (optional)
    //   fs.writeFileSync(userID, file.data);

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Length': file.data.length,
      });

      // Send the file to the client
      res.send(file.data);
    } else {
      res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    console.error('Error retrieving file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
