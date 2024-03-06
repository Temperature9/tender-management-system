const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const app = express();
const PORT = 3001;
const mongoUri = 'mongodb://localhost:27017/user-auth';

// Use CORS middleware
app.use(cors());

app.options('*', cors()); // Enable preflight requests for all routes

app.use(express.json());

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.post('/register', async (req, res) => {
    const { username, password, type, email, phoneNumber, aadharNumber, name } = req.body;
  
    try {
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      const existingPhoneNumber = await User.findOne({ phoneNumber });
      if (existingPhoneNumber) {
        return res.status(400).json({ error: 'Phone number already exists' });
      }
  
      const existingAadhar = await User.findOne({ aadharNumber });
      if (existingAadhar) {
        return res.status(400).json({ error: 'Aadhar number already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        type,
        email,
        phoneNumber,
        aadharNumber,
        ...(name && { name }), // Include the "name" field if it exists
      });
  
      await newUser.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error('Error during registration:', error);
  
      if (error.name === 'ValidationError') {
        // Handle validation errors
        const errors = {};
        Object.keys(error.errors).forEach((field) => {
          errors[field] = error.errors[field].message;
        });
        return res.status(400).json({ errors });
      }
  
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // You can include additional user details in the response if needed
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
