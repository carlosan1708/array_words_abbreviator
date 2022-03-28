const generateArrayWithNoCommonsWords = require('./removalSimilaritiesLogic');
const generateAbbreviationArray = require("./abbreviationLogic");

describe("Test removalSimilaritiesLogic", () => {
    test("Should remove item from all", () => {
        let items = ['item_2', 'item_1', 'item_3', 'item-5']
        const special = ['_', '-', ',']
        const result = generateArrayWithNoCommonsWords(special, items, true)
        expect(result).toEqual([
            [
                "2"
            ],
            [
                "1"
            ],
            [
                "3"
            ],
            [
                "5"
            ]
        ])
    });

    test("Should remove item from all, using at least one appearance", () => {
        let items = ['item_2', 'item_1', 'item_3', 'item-5']
        const special = ['_', '-', ',']
        const result = generateArrayWithNoCommonsWords(special, items, false)
        expect(result).toEqual([
            [
                "2"
            ],
            [
                "1"
            ],
            [
                "3"
            ],
            [
                "5"
            ]
        ])
    });

    test("Should mantain few pieces few identifiers", () => {
        let items = ['item_2_2', 'item_1_2', 'item_3-1', 'item-5-5']
        const special = ['_', '-', ',']
        const result = generateArrayWithNoCommonsWords(special, items, false)
        expect(result).toEqual([
                [
                    "2",
                    "2"
                ],
                [
                    "1",
                    "2"
                ],
                [
                    "3"
                ],
                [
                    "5",
                    "5"
                ]
            ]
            )
    });

    test("Should preserve all the important parts that are unique", () => {
        let items = ['item_2', 'burn_sour', '3-item', 'item with 2 1 3', '34324-2341-12343452-23424']
        const special = ['_', '-', ',']
        const result = generateArrayWithNoCommonsWords(special, items, false)
        expect(result).toEqual([
            [
                "2"
            ],
            [
                "burn",
                "sour"
            ],
            [
                "3"
            ],
            [
                "with",
                "1"
            ],
            [
                "34324",
                "2341",
                "12343452",
                "23424"
            ]
        ])
    });


    test("Should identify divisions and remove just item", () => {
        let items = ['item 2', '3item2', 'item1']
        const special = ['_', '-', ',']
        const result = generateArrayWithNoCommonsWords(special, items, false)
        expect(result).toEqual([
            [
                "2"
            ],
            [
                "3"
            ],
            [
                "1",
            ]
        ])
    });

    test("Should find the middle which is unique", () => {
        let items = ['178qwe84-4548G12748-5457878','178qwe84-45487G1348-5457878','178qwe84-4548G14748-5457878','178qwe84-4548G15748-5457878']
        const special = ['_', '-', ',']
        const result = generateArrayWithNoCommonsWords(special, items, true)
        expect(result).toEqual([
            [
                "4548",
                "12748"
            ],
            [
                "45487",
                "1348"
            ],
            [
                "4548",
                "14748"
            ],
            [
                "4548",
                "15748"
            ]
        ])
    });
});