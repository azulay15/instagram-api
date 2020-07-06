const mongoose = require('mongoose');

const Post = new mongoose.model('Post', {
    postId: {
        type: objectId,
        required: true,
        unique: true
    },
    description: String,
    image: {
        type: String,
        required: true
    },
    userId: {
        type: objectId,
        required: true,
    },
    likes: [objectId],
    createdAt: {
        type: Date,
        default: () => new Date()
    }
});

module.exports = User;