const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    content:{
        type: String,
        required: true,
    },
    hashtags:{
        type: [],
    },
    retweets:{
        type: String,
    },
    location:{
        type: String,
    },
    source:{
        type: String,
    }
});

mongoose.model('Tweet', TweetSchema);