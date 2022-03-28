
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

    //First: Check if removing commons was enough.
    if(allLessThanSize){
        return joinedArrayOfItems
    }

    //Second: Check taking pieces of the beginning of the array or at the end of the array will work.
    //Check if individual pieces are unique. Could be improved but for now taking first and last element.
    const uniqueElementsBegin = arrayWithNoCommonsWords.map(item => item[0])
    if(isValidArrayForAbbreviation(uniqueElementsBegin,sizeCriteria ))
        return uniqueElementsBegin


    const uniqueElementsLast = arrayWithNoCommonsWords.map(item => item[item.length-1])
    if(isValidArrayForAbbreviation(uniqueElementsLast,sizeCriteria ))
        return uniqueElementsLast


    //Third: Check if taking substring at the beginning is enough
    //check if cutting words make sense.
    const reducedArrayWords = joinedArrayOfItems.map(item =>{
        return item.substring(0, 7);
    })

    if(isValidArrayForAbbreviation(reducedArrayWords,sizeCriteria ))
        return reducedArrayWords

    //Forth: Check if start and end substring is enough
    //Take beginning and end of the joinedWord and create unique pieces.
    const specialConstructArrayWords = joinedArrayOfItems.map(item =>{
        return item.substring(0, 3) + item.substring(item[item.length - 3], item[item.length - 1]);
    })

    if(isValidArrayForAbbreviation(specialConstructArrayWords,sizeCriteria ))
        return specialConstructArrayWords

    //Fifth: More methods to be discovered, so creating numbers instead as keys for now.
    console.log("Last abbreviation resource trigger")
    return Array.from({length: joinedArrayOfItems.length}, (x, i) => i.toString());
}

module.exports = generateAbbreviationArray;