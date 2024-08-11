const mongoose = require('mongoose');
const mongoURL = process.env.mongoURL

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        client.user.setActivity({
            name: "/help",
            type: 1,
            url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
        });

        if (!mongoURL) return;
        await mongoose.connect(mongoURL || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (mongoose.connect) {
            console.log('Connected to MongoDB')
        } else {
            console.log('Failed to connect to MongoDB')
        }
    },
};