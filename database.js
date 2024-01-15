const mongoose = require('mongoose');

// Define schema for 'post'
const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Compile model from schema
const Post = mongoose.model('Post', postSchema);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));

module.exports = Post;
