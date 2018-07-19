#WordNerd
#### Just trying to keep up with all this crazy slang.


###Background
Meetup, like probably any workplace, has a lot of internal jargon. From "mecha" to "pcal" to "lambdagator," it's hard to keep up! **We need some way to keep track of all of our made-up words!**

###The Idea
WordNerd is a Slack Bot who hangs out in any channel you invite him to. He listens to what's going on and keeps track of words he doesn't know. Once he hears the same unknown term three or more times, he politely asks you to define it for him. He's also always around to define words for you if you ask.

###How it Works
WordNerd listens to all conversations going on in the channels he's in via the Slack Real Time Messaging API through Slack's Node SDK. He checks each word to see if it's a valid word in the English language, a common texting abbreviation, or a common name. If a term is used which isn't any of these things, he considers it a weird word. For each weird word he finds, WordNerd increments a counter in his DynamoDB table (unless the word is already defined). Once he hears a word for the third time and he doesn't know what it means, WordNerd will ask you to define it. He's not a total nag, though, and he'll only bug you to define one word at a time.

To define a word for him, you can say `@WordNerd {{word}} means {{definition}}`, and he will add that definition into his DynamoDB table. 

If you're wondering what a word means, you can say `@WordNerd, what is {{word}}? ` (punctuation optional). He'll look it up for you in DynamoDB and give you back a definition if he has one. 

If you need help, you can always say `@WordNerd help!`

###How it's Built 
This project was built in Node.js using AWS's and Slack's SDKs. We also used a Zeit Now server to host this code. DynamoDB is the datastore for words, definitions, and counts.



![WordNerd pro pic](nerd.jpeg)