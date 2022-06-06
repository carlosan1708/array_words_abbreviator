const generateArrayWithNoCommonsWords = require('./removalSimilaritiesLogic');
const generateAbbreviationArray = require("./abbreviationLogic");

describe("Test abbreviationLogic", () => {
    test("Should abbreviate words, which guarantee uniqueness", () => {
        const itemList = ['item_2', 'item_1', 'item_3', 'item-5']
        const specialCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
        const arrayOfAbbreviations = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
        expect(arrayOfAbbreviations).toEqual([
            "2",
            "1",
            "3",
            "5"
        ])
    });

    test("Should abbreviate words and without removing everything", () => {
        const itemList = ['item_2', 'item_2_1', 'item_3_1', 'item-5-5']
        const specialCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
        const result = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
        expect(result).toEqual([
            "2",
            "21",
            "31",
            "55"
        ])
    });

    test("Should abbreviate and tried to separate numbers", () => {
        const itemList = ['item2', '11item_21', '43item_31', 'item-55']
        const specialCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
        const result = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
        //Result is not so nice, but it's a problem on the entry :)
        expect(result).toEqual([
            "2",
            "1121",
            "4331",
            "55"
        ])
    });

    test("Uncommon Case, shouldn't be repeated", () => {
        const itemList = ['78qwe84-4548748-5457878', '78qwe84-4548748-5457878', '78qwe84-4548748-5457878', '78qwe84-4548748-5457878']
        const specialCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
        const result = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
        expect(result).toEqual(['0', '1', '2', '3'])
    });

    test("Should find the beginning which is unique", () => {
        const itemList = ['A178qwe84-4548748-5457878', 'B178qwe84-4548748-5457878', 'C178qwe84-4548748-5457878', 'D178qwe84-4548748-5457878']
        const specialCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
        const result = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
        expect(result).toEqual(['A', 'B', 'C', 'D'])
    });

    test("Should find the middle which is unique", () => {
        const itemList = ['178qwe84-4548G12748-5457878', '178qwe84-45487G1348-5457878', '178qwe84-4548G14748-5457878', '178qwe84-4548G15748-5457878']
        const specialCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterList, itemList, true)
        const result = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
        expect(result).toEqual([
            "12748",
            "1348",
            "14748",
            "15748"
        ])
    });

    test("Should produce small array", () => {
        const itemList = ['1', '2']
        const specialCharacterListCharacterList = ['_', '-', ',']
        const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(specialCharacterListCharacterList, itemList, true)
        const sizeCriteria = 8
        const result = generateAbbreviationArray(arrayWithNoCommonsWords, sizeCriteria)
        expect(result).toEqual([
            "1",
            "2",
        ])
    });

    test("Should work without removing common words small array", () => {
        let itemList = ['item_item_2', 'item_item_1', 'item_item_3', 'item_item-5']
        const sizeCriteria = 8
        itemList = itemList.map(function (curr) {
            return [curr]
        })
        const result = generateAbbreviationArray(itemList, sizeCriteria)
        expect(result).toEqual([
            "item_2",
            "item_1",
            "item_3",
            "item-5"
        ])
    });
});