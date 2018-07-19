const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'brooke-hackathon';

const putParams = (word, def) => ({
    TableName: TABLE_NAME,
    Item: {
        'word': word,
        'definition': def
    }
});

const getParams = (word) =>  ({
    TableName: TABLE_NAME,
    Key: {'word': word}
});

const countParams = (word, count) => ({
    TableName: TABLE_NAME,
    Item: {
        'word': word,
        'count': count
    }
});

const addWord = (word, def) => {
    docClient.put(putParams(word.toLowerCase(), def), function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
};

const lookupWord = (word) => {
    return new Promise(function (resolve, reject) {
        docClient.get(getParams(word.toLowerCase()), function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                try {
                    console.log("Success", data.Item.definition);
                    resolve(data.Item.definition);
                } catch (err) {
                    console.log("Not yet defined");
                    resolve("Not yet defined")
                }
            }
        });
    })
};

const getCountAndIncrement = (word) => {
    return new Promise(function (resolve, reject) {
        docClient.get(getParams(word.toLowerCase()), function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                if (data.Item !== undefined && data.Item.definition !== undefined) {
                    console.log("Already defined!");
                    resolve(-1);
                }
               else if (data.Item === undefined || data.Item.count === undefined) {
                    console.log("Starting the count now!");
                    docClient.put(countParams(word.toLowerCase(), 1), (D, E) => {
                        if (E) console.log(E);
                    });
                    resolve(1);
                }
                else {
                    console.log("Success, count is", data.Item.count + 1);
                    docClient.put(countParams(word.toLowerCase(), data.Item.count + 1), (D, E) => {
                        if (E) console.log(E);
                    });
                    resolve(data.Item.count + 1);
                }

            }
        });
    })
};

module.exports.addWord = addWord;
module.exports.lookupWord = lookupWord;
module.exports.getCountAndIncrement = getCountAndIncrement;
