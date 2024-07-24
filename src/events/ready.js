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

        async function pickPresence () {
            const option = Math.floor(Math.random() * statusArray.length);

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: statusArray[option].content,
                            type: statusArray[option].type,

                        },
                    
                    ],

                    status: statusArray[option].status
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};