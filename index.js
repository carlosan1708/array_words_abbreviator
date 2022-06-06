const generateArrayWithNoCommonsWords = require('./src/removalSimilaritiesLogic');
const generateAbbreviationArray = require("./src/abbreviationLogic");


const testWithGenerateArrayWithNoCommonsWords = (specialCharacterList, itemList, sizeCriteria) => {
    const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
    const result = generateAbbreviationArray(arrayWithNoCommonsWords, sizeCriteria)
    console.log(result)
}

const testWithoutGenerateArrayWithNoCommonsWords = (itemList, sizeCriteria) => {
    itemList = itemList.map(function (curr) {
        return [curr]
    })
    const result = generateAbbreviationArray(itemList, sizeCriteria)
    console.log(result)
}

const sizeCriteria = 8
const specialCharacterList = ['_', '-', ',']
let itemList = ['item_item_2', 'item_item_1', 'item_item_3', 'item_item-5']
let itemList2 = ['item_item_2', 'item_item_1', 'item_item_3', 'item_item-5']
testWithGenerateArrayWithNoCommonsWords(specialCharacterList, itemList, sizeCriteria)
console.log("Second method")
testWithoutGenerateArrayWithNoCommonsWords(itemList, sizeCriteria)
