module.exports = class LottoryDrawNumbers{
    constructor(id){
        this.numbers = [];
        this.strognNumbers = [];
        this.id = id;
    }

    get numbers(){
        return this._numbers;
    }

    get id(){
        return this._id;
    }
    
    get strognNumbers(){
        return this._strognNumbers;
    }

    set numbers(numbers){
        return this._numbers = numbers;
    }

    set id(id){
        return this._id = id;
    }
    
    set strognNumbers(strognNumbers){
        return this._strognNumbers = strognNumbers;
    }

    addNumber(number){        
        if(this.numbers.includes(number)){
            throw "number already exist!"
        }
        this.numbers.push(number);
    }

    addStrongNumber(number){
        if(this.strognNumbers.includes(number)){
            throw "number already exist!"
        }
        this.strognNumbers.push(number);
    }

}