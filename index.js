const kafka = require('kafka-node');
const Consumer = kafka.Consumer;

const client = new kafka.Client('172.23.238.193:2181');
const consumer = new Consumer(client, [{topic: 'CommunityLifecycleEvents'}], {autoCommit: true});

consumer.on('message', (messageObj) => {
	console.log(`Got a new message: ${messageObj}`);
});
