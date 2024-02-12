const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

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
const File = mongoose.model('File', {
  name: String,
  data: Buffer,
});

// Handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { originalname, buffer } = req.file;

    // Save the file to MongoDB
    const file = new File({
      name: originalname,
      data: buffer,
    });

    await file.save();

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getPdf/:x', async (req, res) => {
  const a = req.params.x;
  try {
    const file = await File.findOne({ name: a });

    if (file) {
      // Save the file to the server temporarily (optional)
      fs.writeFileSync(a, file.data);

      // Send the file to the client
      res.sendFile(a, { root: __dirname });
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
