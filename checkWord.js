const names = require("./names");
const abbrevs = require("./abbrevs");
wordChecker = require('check-word');
checker = wordChecker('en');

const checkWordLists = (word) => (names.includes(word.toUpperCase()) || abbrevs.includes(word.toUpperCase()));

const checkDictionary = (word) => checker.check(word);

const checkWord = (word) =>
    checkDictionary(word.toLowerCase()) || checkWordLists(word.toUpperCase());


module.exports = checkWord;