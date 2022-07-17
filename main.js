
const { Client } = require('whatsapp-web.js');
const QR = require('qrcode-terminal');

const client = new Client();
client.initialize();
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    // console.log('QR RECEIVED', qr);
    QR.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

    // REPLYING to an incoming message
    var Authors = new Array();
    client.on('message', msg => {
        // if (msg.body == 'ping' && !Authors.includes(msg.from.toString)) {
        if (!Authors.includes(msg.from.toString())) {
            // if (true) {
            msg.reply('Hi, I am Sandra, Dr. MKA\'s PA\n Dr. MKA is busy right now, Shall I take a note from you?');
            // msg.reply('Automates REPLY Message!');
            // client.sendMessage(msg.chatId.toString(), 'How can I help you? Oh sorry, I forgot that I am a robot, I cannot really be of help!!! Sorry!');
            Authors.push(msg.from.toString());    // Add the serialized phone number to the array
        }
        console.log("Authors are: " + Authors);
    });
});