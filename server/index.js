const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const Student = require('./models/studentModel');
const path = require("path");

const app = express();
const port = 3020;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://NoorEMalaika:12345@nooremalaika.vxdclw1.mongodb.net/attendance?retryWrites=true&w=majority&appName=NoorEMalaika", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Register a new user
app.post('/api/v1/user/register', async (req, res) => {
  const { name, email, rollno, password } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send({ success: false, message: 'User already exists' });
    }

    const user = new User({ name, email, rollno, password });
    await user.save();
    res.status(200).send({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Login a user
app.post('/api/v1/user/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).send({ success: false, message: 'Invalid email or password' });
    }

    res.status(200).send({ success: true, message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Get all users
app.get('/api/v1/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Get user by ID
app.get('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send({ success: false, message: 'User not found' });
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Update user by ID
app.put('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, rollno, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { name, email, rollno, password }, { new: true });

    if (!user) {
      return res.status(404).send({ success: false, message: 'User not found' });
    }

    res.status(200).send({ success: true, message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Delete user by ID
app.delete('/api/v1/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).send({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Get all students
app.get('/api/v1/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Add a new student
app.post('/api/v1/students', async (req, res) => {
  const { name, rollNo, course } = req.body;
  try {
    const student = new Student({ name, rollNo, course });
    await student.save();
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Update student by ID
app.put('/api/v1/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, rollNo, course } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, { name, rollNo, course }, { new: true });

    if (!student) {
      return res.status(404).send({ success: false, message: 'Student not found' });
    }

    res.status(200).send(student);
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});

// Delete student by ID
app.delete('/api/v1/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).send({ success: false, message: 'Student not found' });
    }

    res.status(200).send({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});
app.get("/", (req, res) => {
  app.use(express.static(path.resolve (__dirname, "client", "build")))
  res.sendFile(path.resolve(__dirname, "client", "build" , "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

