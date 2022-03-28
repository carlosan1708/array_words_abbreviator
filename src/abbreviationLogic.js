
const isValidArrayForAbbreviation = (arrayToValidate, sizeCriteria)=>{
    let oneDuplicate = arrayToValidate.some((val, i) => arrayToValidate.indexOf(val) !== i);
    if(!oneDuplicate){
        const allLessThanSize = arrayToValidate.every(item => item.length < sizeCriteria);
        if(allLessThanSize)
            return arrayToValidate
    }
}

const generateAbbreviationArray = (arrayWithNoCommonsWords, sizeCriteria) => {
    //Start by joining and determining if joined parts are less than sizeCriteria
    const joinedArrayOfItems = arrayWithNoCommonsWords.map(itemWords => itemWords.join(''))

    const allLessThanSize = joinedArrayOfItems.every(item => item.length < sizeCriteria);

    //First: Check if removing common pieces of the words was enough.
    if(allLessThanSize){
        return joinedArrayOfItems
    }

    //Second: Check taking pieces (substrings) of the beginning/end of the array.
    //Check if individual pieces are unique. Could be improved but for now taking first and last element.
    const uniqueElementsBegin = arrayWithNoCommonsWords.map(item => item[0])
    if(isValidArrayForAbbreviation(uniqueElementsBegin,sizeCriteria ))
        return uniqueElementsBegin


    const uniqueElementsLast = arrayWithNoCommonsWords.map(item => item[item.length-1])
    if(isValidArrayForAbbreviation(uniqueElementsLast,sizeCriteria ))
        return uniqueElementsLast


    //Third: Check if taking substring at the beginning of the joined words works.
    //check if cutting words make sense.
    const reducedArrayWords = joinedArrayOfItems.map(item =>{
        return item.substring(0, 7);
    })

    if(isValidArrayForAbbreviation(reducedArrayWords,sizeCriteria ))
        return reducedArrayWords

    //Forth: Check if start and end substring of the joined words is enough.
    //Take beginning and end of the joinedWord and create unique pieces.
    const specialConstructArrayWords = joinedArrayOfItems.map(item =>{
        return item.substring(0, 3) + item.substring(item[item.length - 3], item[item.length - 1]);
    })

    if(isValidArrayForAbbreviation(specialConstructArrayWords,sizeCriteria ))
        return specialConstructArrayWords

    //Fifth: More methods to be discovered, so creating numbers as keys for now.
    console.log("Last abbreviation resource trigger")
    return Array.from({length: joinedArrayOfItems.length}, (x, i) => i.toString());
}

module.exports = generateAbbreviationArray;