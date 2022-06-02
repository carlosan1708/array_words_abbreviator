const replaceSpecialWithSpace=(special, items)=>{
    let newModifiedArray = [...items]
    special.forEach(specialCharacter => {
        newModifiedArray = [...newModifiedArray.map(element => element.split(specialCharacter).join(' '))]
    })
    return newModifiedArray
}

const getAllCommon = (arrayOfItemsIntoWords)=>{
    return new Set(arrayOfItemsIntoWords.reduce((a, b) => a.filter(c => b.includes(c))));
}

 const getLeastOneDuplicate = (arrayOfItemsIntoWords)=>{
     const allItemsCombinations = arrayOfItemsIntoWords.flatMap(
         (v, i) => arrayOfItemsIntoWords.slice(i+1).map( w => [v ,w ])
     );

    let listOfCommons = new Set()
     allItemsCombinations.forEach(itemTuple =>{
         listOfCommons = [...listOfCommons, ...new Set(itemTuple.reduce((a,b) => a.filter(value => b.includes(value))))]
     })
    //Start by creation
    return new Set(listOfCommons);
}

const removeCommonItems = (commonWordsSet, arrayOfItemsIntoWords) => {
      let itemsWithUniqueElements = []
      arrayOfItemsIntoWords.forEach(itemOfWords => {
          //First level Ex: ['item' ,'1']
          let arrayWithNoCommonWords = itemOfWords.filter(x => !commonWordsSet.has(x))
          //Special case to avoid been empty.
          if(arrayWithNoCommonWords.length < 1){
              //Try only numbers and check
              arrayWithNoCommonWords = itemOfWords.filter(Number);
              if(arrayWithNoCommonWords.length < 1){
                  //Only way is to break rule to preserve it from been valid,
                  //other method could take care of handling of this case.
                  arrayWithNoCommonWords = itemOfWords
              }
          }

          itemsWithUniqueElements = [...itemsWithUniqueElements, arrayWithNoCommonWords];
      })
      return itemsWithUniqueElements;
  }

const separatedItemsByType = (itemsSeparatedBySpace)=>{
    const reg = /([0-9.]+)(?![0-9.])|([a-z]+)(?![a-z])/gi
    const itemsSeparatedByTypeAndSpace = itemsSeparatedBySpace.map(item => {
            if(item.split(' ').length > 1){
                //separate numbers and strings
                item = item.split(' ').flatMap(elementSplit=> elementSplit.match(reg))
            }else{
                item = item.match(reg)
            }
            return item;
    })
    return itemsSeparatedByTypeAndSpace
}
/**
   * Create an array that removes all commons words,
   * if allCommon is true , then it will only remove the words common in all the different items
   * if it's false, then it will remove common words in at least 2 words, yet it's more expensive to calculate.
   *
   * Important, if there is a case when array could result empty it will return the numeric numbers of that array to prevent errors.
   * If there are no numerics , then it will simply return the words by using the special characters.
   * @param specialCharacterList
   * @param itemList
   * @param allCommon
   * @returns {*[]}
   */
 const generateArrayWithNoCommonsWords = (specialCharacterList, itemList, allCommon = true)=>{
    if(!Array.isArray(specialCharacterList) || specialCharacterList.length < 2 ){
        console.log("Please send an array, example: ['_', ','] ")
    }
    if(!Array.isArray(itemList) || itemList.length < 2){
        console.log("Please send an array, example: ['item 1', 'item 2'] ")
    }
    const itemsSeparatedBySpace = replaceSpecialWithSpace(specialCharacterList, itemList)
    const itemsSeparatedByTypeAndSpace = separatedItemsByType(itemsSeparatedBySpace)

     let commonWords
     if(allCommon)
         commonWords = getAllCommon(itemsSeparatedByTypeAndSpace)
     else
         commonWords = getLeastOneDuplicate(itemsSeparatedByTypeAndSpace)

    //To a
    return removeCommonItems(commonWords, itemsSeparatedByTypeAndSpace)
}

module.exports = generateArrayWithNoCommonsWords;