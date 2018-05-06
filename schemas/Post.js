const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        max: 100
    },
    content: {
        type: String
    }
});


module.exports = Post = mongoose.model('Post', PostSchema);