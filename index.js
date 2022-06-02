const generateArrayWithNoCommonsWords = require('./src/removalSimilaritiesLogic');
const generateAbbreviationArray = require("./src/abbreviationLogic");

const itemList = ['item_2', 'item_2_1', 'item_3_1', 'item-5-5']
const specialCharacterList = ['_', '-', ',']
const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
const sizeCriteria = 8
const result = generateAbbreviationArray(arrayWithNoCommonsWords, sizeCriteria)
console.log(result)



