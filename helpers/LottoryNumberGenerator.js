var LottoryDrawNumbers = require('../models/LottoryDrawNumbers');


function generateAllCombinationsFor5NumbersNoStrong(lottoryDrawRules, lottoryDrawCombinations){
    let amountOfCombination = 0;
    console.dir(lottoryDrawRules, { depth: 3} );

    let ballMinNumber = lottoryDrawRules.minNumber, ballMaxNumber = lottoryDrawRules.maxNumber,
     amountOfBalls = lottoryDrawRules.numberInstanceAmount;
    for ( let fisrtNumberIndex = ballMinNumber; 
        fisrtNumberIndex <= ballMaxNumber; fisrtNumberIndex++){
         for ( let secondNumberIndex = fisrtNumberIndex + 1; 
            secondNumberIndex <= ballMaxNumber; secondNumberIndex++){
            for ( let thirdNumberIndex = secondNumberIndex + 1; 
                thirdNumberIndex <= ballMaxNumber; thirdNumberIndex++){
                 for ( let forthNumberIndex = thirdNumberIndex + 1; 
                    forthNumberIndex <= ballMaxNumber; forthNumberIndex++){
                        for ( let fifthNumberIndex = forthNumberIndex + 1; 
                            fifthNumberIndex <= ballMaxNumber; fifthNumberIndex++){
                                let lottoryDrawNumbers = new LottoryDrawNumbers(++amountOfCombination);
                                lottoryDrawNumbers.addNumber(fisrtNumberIndex);
                                lottoryDrawNumbers.addNumber(secondNumberIndex);
                                lottoryDrawNumbers.addNumber(thirdNumberIndex);
                                lottoryDrawNumbers.addNumber(forthNumberIndex);
                                lottoryDrawNumbers.addNumber(fifthNumberIndex);

                                lottoryDrawCombinations.addCombination(fisrtNumberIndex,lottoryDrawNumbers);

                         }         
                 }  
            }
         }

    }
    return lottoryDrawCombinations;
}


/**
 *  This function generate all the combination for a Lottery. The response is a hashMap of combination where
 * the hashMap key indicate the Lottory strong number and the values are all the balls combinations. in case that Lottory
 * doesn't have a strong map then the key will be with value -1.
 * @param {ballMaxNumber, ballMinNumber, amountOfBalls, strongMaxNumber, strongMinNumber, amountOfStrong} LottoryDrawRules that define the Lottory game.
 */
function generateAllCombinations(lottoryDrawRules, lottoryDrawCombinations){
    let amountOfCombination = 0;

    let ballMinNumber = lottoryDrawRules.ballMinNumber, ballMaxNumber = lottoryDrawRules.ballMaxNumber,
     amountOfBalls = lottoryDrawRules.amountOfBalls;

    //go through all the numbers
    for ( let fisrtNumberIndex = ballMinNumber; 
        fisrtNumberIndex < ballMaxNumber; fisrtNumberIndex++){
        //start generate LottoryDrawNumbers with the amountOfBalls 
        for(let amountNumberIndex; amountNumberIndex < amountOfBalls; amountNumberIndex++ ){
            //
            for(let runningIndex = fisrtNumberIndex + 1; runningIndex < ballMaxNumber; runningIndex++){
                let lottoryDrawNumbers = new LottoryDrawNumbers(++amountOfCombination);
                lottoryDrawNumbers = generateBallsCombination(runningIndex, ballMaxNumber, 
                    amountOfBalls, lottoryDrawNumbers);

            }
        }

    }
}


function generateBallsCombination( ballMinNumber, ballMaxNumber, amountOfBalls, lottoryDrawNumbers ){
    if( 0 == amountOfBalls ){
        return lottoryDrawNumbers;
    }
    if(ballMinNumber > ballMaxNumber){
        return lottoryDrawNumbers;
    }
    lottoryDrawNumbers.addNumber(ballMinNumber)
    ballMinNumber++;
    amountOfBalls--;
    return generateBallsCombination( ballMinNumber, ballMaxNumber, amountOfBalls, lottoryDrawNumbers );
}


module.exports = {
    generateAllCombinationsFor5NumbersNoStrong
  }
  
