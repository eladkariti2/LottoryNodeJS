var LottoryDrawNumbers = require('../models/LottoryDrawNumbers');
const INTERVAL = require('./IntervalUtil');



/**
 * Filter combination that include more then 3 number in 10 number interval.
 * For example: [1, 4, 5, 7] in the range  [1 .. 10]
 * @param {*} lottoryDrawRules 
 * @param {*} lottoryDrawCombinations 
 */
function filterMoreThen3In10(combinationsMap, rules){
    let filteredCombination = new Map();
    let maxInterval = parseInt(rules.maxNumber/10) + 1;
    var mapIter = combinationsMap.keys();
    let nextIter = mapIter.next();
     //start filter combinations
    while (!nextIter.done) {
        let combinations = combinationsMap.get(nextIter.value);
        for(let index = 1; index <= maxInterval; index++ ){
            let intervalConfiguration = INTERVAL.interval10[index];
            let filtered = filterCombinationByRangeInterval(combinations, intervalConfiguration, INTERVAL.interval10.maxOfInstances);
            addCombinatinosToMap(filteredCombination, nextIter.value, filtered)
        }
        nextIter = mapIter.next();
    }
    return filteredCombination;
}

function addCombinatinosToMap(filteredCombination, key, combinations){
    if(!combinations || combinations.length == 0 ){
        return;
    }
    if(filteredCombination.get(key)){
        filteredCombination.get(key).push(combinations)
    }else{
        filteredCombination.set(key,combinations);
    }
}


function filterCombinationByRangeInterval(combinations, intervalConfiguration, maxOfInstances){
    let minInterval = intervalConfiguration.start;
    let maxInterval = intervalConfiguration.end;
    let filterCombinations = [];
    let i = 0;
    for(let lottoryDraw in combinations){
        let instances = 0;
        i++;
        if(!lottoryDraw)
             debugger;
        let drawNumbers = combinations[lottoryDraw].numbers;
        for( let index = 0; index < drawNumbers.length; index++){
            let number = drawNumbers[index];
            if(number >= minInterval && number <= maxInterval ){
                instances++;
            }
        }
        
        if( instances <= maxOfInstances){
            filterCombinations.push(drawNumbers);
        }
    }
    return filterCombinations;
}


module.exports = {
    filterMoreThen3In10
  }
  
