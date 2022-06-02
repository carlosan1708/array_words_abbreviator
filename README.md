# Array words abbreviator

Goal: Obtain an abbreviated version of the elements in the array without losing the content of the items in that array unless it's impossible to achieve it.

Logic: It takes the array elements and find the common pieces from the words to discard those as part of the abbreviation, 
then it takes that array and uses 5 types of strategies to create the abbreviations:

1)  Check if removing common pieces of the words was enough.
2)  Check taking pieces (substrings) of the beginning/end of the array.
3)  Check if taking substring at the beginning of the joined words works.
4)  Check if start and end substring of the joined words is enough.
5)  More methods to be discovered, so creating numbers as keys for now.


Example: 

Check 
* [index.js](src/index.js)

``` npm run start ```

Run test:

``` npm run test ```


All test are passing, check those for examples.

Structure: 

There are two main with all the necessary logic.
* [abbreviationLogic.js](src/abbreviationLogic.js)
* [removalSimilaritiesLogic.js](src/abbreviationLogic.test.js)

Set of files for testing that logic, using Jest
* [abbreviationLogic.test.js](src/removalSimilaritiesLogic.js)
* [removalSimilaritiesLogic.test.js](src/removalSimilaritiesLogic.test.js)