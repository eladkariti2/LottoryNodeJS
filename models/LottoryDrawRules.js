module.exports = class LottoryDrawRules{
    constructor(minNumber, maxNumber, numberInstanceAmount, hasStrongNumers = false,
         minStrongNumber = -1, maxStrongNumber = -1, strongNumberInstanceAmount = 0 ){
             if(!minNumber || !maxNumber || !numberInstanceAmount){
                    throw "LottoryDrawRules not configured well, please check your input. the issue is with " +
                    "the regular numbers input"
                }
            if(hasStrongNumers && ( !minStrongNumber
                || !maxStrongNumber || !strongNumberInstanceAmount )){
                    throw "LottoryDrawRules not configured well, please check your input. the issue is with " +
                    "the Strong numbers input"

                }
            this.maxNumber = maxNumber;
            this.minNumber = minNumber;
            this.numberInstanceAmount = numberInstanceAmount;
            this.minStrongNumber = minStrongNumber;
            this.maxStrongNumber = maxStrongNumber;
            this.strongNumberInstanceAmount = strongNumberInstanceAmount;
            this.hasStrongNumers = hasStrongNumers;
    }

    get maxNumber(){
        return this._maxNumber;
    }

    get minNumber(){
        return this._minNumber;
    }

    get numberInstanceAmount(){
        return this._numberInstanceAmount;
    }

    get hasStrongNumber(){
        return this._hasStrongNumers;
    }

    get minStrongNumber(){
        return this._minStrongNumber;
    }

    get maxStrongNumber(){
        return this._maxStrongNumber;
    }

    get strongNumberInstanceAmount(){
        return this._strongNumberInstanceAmount;
    }
 
    set maxNumber(maxNumber){
        return this._maxNumber = maxNumber;
    }

    set minNumber(minNumber){
        return this._minNumber = minNumber;
    }

    set numberInstanceAmount(numberInstanceAmount){
        return this._numberInstanceAmount = numberInstanceAmount;
    }

    set hasStrongNumber(hasStrongNumers){
        return this._hasStrongNumers = hasStrongNumers;
    }

    set minStrongNumber(minStrongNumber){
        return this._minStrongNumber = minStrongNumber;
    }

    set maxStrongNumber(maxStrongNumber){
        return this._maxStrongNumber = maxStrongNumber;
    }

    set strongNumberInstanceAmount(strongNumberInstanceAmount){
        return this._strongNumberInstanceAmount = strongNumberInstanceAmount;
    }

}