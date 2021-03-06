const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet');

module.exports = {
    async index(req, res){
        const tweets = await Tweet.find(); 
        return res.json(tweets);
    },
    async store (req, res){
        const tweet = await Tweet.create(req.body);
        return res.json(tweet);
    }
};

