const { RTMClient, WebClient } = require('@slack/client');
const checkWord = require("./checkWord");
const bodyParser = require('body-parser');
const express = require('express');
const dynamo = require('./dynamo');
const router = express();
router.use(bodyParser.json());


const token = process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);
rtm.start();

router.get('/', function (req, res) {
    res.send ("Hello, this is Brooke's Meetup Hackathon project!")
});

router.post('/define', function (req, res) {
    // console.log("REQUEST\n", req);
    // console.log("LOOKING for data: route...", req.route);
    // console.log("LOOKING for data: stack...", JSON.stringify(req.route.stack));
    // console.log("BODY\n", req.body);
    // rtm.sendMessage(req, "CBSN05QP5");
    // // const word = req.body.word;
    // dynamo.lookupWord(word)
    //     .then( data => res.send(`${word} means: ${data}`) )

});

router.post('/', function (req, res) {

});

router.listen(3000, function () {
    console.log('Local router listening on port 3000!')
});



const words = () => {

    rtm.on('message', (message) => {
        // Skip messages that are from a bot or my own user ID
        if ( (message.subtype && message.subtype === 'bot_message') ||
             (!message.subtype && message.user === rtm.activeUserId) ) {
            return;
        }

        // Log the message
        console.log(`(channel:${message.channel}) ${message.user} says: ${message.text}`);
        const messageText = (message.text).replace(/[^a-zA-Z ]/g, "");
        const spaces = /\W+/;
        const words = messageText.split(spaces);

        if (words[0] === "UBUJFE") {    // They are @ing us
            if (words[2] && words[2].toLowerCase() === "means") {
                dynamo.addWord(words[1], message.text.split("means")[1].trim());
                // console.log(message.text.split("means")[1]);
                rtm.sendMessage(`Thanks <@${message.user}>! Got it! I'll record that definition for "${words[1]}"`, message.channel);
            }
            else if (words[1] && words[1].toLowerCase() === "what" && words[2] && words[2].toLowerCase() === "is" && words[3]) {
                const word = words[3];
                dynamo.lookupWord(word)
                    .then (def => {
                        if (def === "Not yet defined")
                            rtm.sendMessage(`<@${message.user}>, ${word} means... actually, this is embarrassing, but I don't know what that means either!`, message.channel);
                        else
                            rtm.sendMessage(`<@${message.user}>, ${word} means "${def}"`, message.channel);
                    })

            }
            else if (words[1] === "help")
                rtm.sendMessage(`Hi, I'm WordNerd! I'm here to help us keep track of all the slang we make up.\n You can say: \n - "<@UBU58JFE2> what is {{_word_}}?"\n - "<@UBU58JFE2> {{word}} means {{_definition_}}"\n - or, of course, "<@UBU58JFE2> help" !`,
                    message.channel);
        }
        else {  // If they just talking
            const nonWords = words.filter(w => !checkWord(w));
            if (nonWords.length > 0) {
                console.log('These are weird: ' + JSON.stringify(nonWords));
                const usageCounts = Promise.all(nonWords.map(w => dynamo.getCountAndIncrement (w)));
                usageCounts.then(counts => {
                    for (let i = 0; i < counts.length; i++) {
                        if (counts[i] >= 3) {
                            rtm.sendMessage(`Huh... you keep saying "${nonWords[i]}", but does ${nonWords[i]} mean? \nReply with "<@UBU58JFE2> ${nonWords[i]} means {{_definition_}}" to record a definition`, message.channel);
                            break;
                        }
                    }
                });
            }
        }


    });
};

words();