const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./database');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/posts', async (req, res) => {
    try {
        const posts = await mongoose.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/posts', async (req, res) => {
    const post = new mongoose({
        text: req.body.text,
        date: new Date()
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
