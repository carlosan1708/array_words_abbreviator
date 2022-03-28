# Array words abbreviator

Goal: Obtain an abbreviated version of the elements in the array without losing the content of the items in that array unless it's imposible to achieve it.

Logic: It takes the array elements and find the common pieces that will be discarted, then it takes that array and use 5 types of strategies
to create abbreviations:

1)  Check if removing commons was enough.
2)  Check taking pieces of the beginning of the array or at the end of the array will work.
3)  Check if taking substring at the beginning is enough
4)  Check if start and end substring is enough
5)  More methods to be discovered, so creating numbers instead as keys for now.


Example of the functions: 

```
let items = ['item 2', '3item2', 'item1']
const commonSeparationsForWords = ['_', '-', ',']
const arrayWithNoCommonsWords = generateArrayWithNoCommonsWords(special, items, true)
const result = generateAbbreviationArray(arrayWithNoCommonsWords, 8)
```

All test are passing, check those for examples.

Structure: 

There are two main with all the neccesary logic.
* [abbreviationLogic.js](src/abbreviationLogic.js)
* [removalSimilaritiesLogic.js](src/abbreviationLogic.test.js)

Set of files for testing that logic, using Jest
* [abbreviationLogic.test.js](src/removalSimilaritiesLogic.js)
* [removalSimilaritiesLogic.test.js](src/removalSimilaritiesLogic.test.js)