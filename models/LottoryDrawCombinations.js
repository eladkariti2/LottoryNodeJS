module.exports  = class LottoryDrawCombinations{
    constructor(id, name, lottoryRules, country){
        this.name = name;
        this.lottoryRules = lottoryRules;
        this.id = id;
        this.country = country;
        this.combinationsMap = new Map(); 
    }

    get country(){
        return this._country;
    }

    get id(){
        return this._id;
    }
    
    get name(){
        return this._name;
    }

    get lottoryRules(){
        return this._lottoryRules;
    }

    get combinationsMap(){
        return this._combinationsMap;
    }

    updateNumberOfCombination(){
        let numberOfCombinations = 0;
        var mapIter = this.combinationsMap.keys();
        let nextIter = mapIter.next();
        while (!nextIter.done) {
            let combinations = this.combinationsMap.get(nextIter.value);
            if(combinations){
                numberOfCombinations += combinations.length;
            }
            nextIter = mapIter.next();
        }
        this._numberOfCombinations = numberOfCombinations;
        return numberOfCombinations;
    }


    get country(){
        return this._country;
    }

    set id(id){
        return this._id = id;
    }
    
    set name(name){
        return this._name = name;
    }

    set lottoryRules(lottoryRules){
        return this._lottoryRules = lottoryRules;
    }

    set combinationsMap(combinationsMap){
        return this._combinationsMap = combinationsMap;
    }

    set country(country){
        return this._country = country;
    }


    addCombination(key, combination){    
        //verify combination with rules
        if(this.combinationsMap.get(key)){
            this.combinationsMap.get(key).push(combination)
        }else{
            let newCombinations = [ combination ];
            this.combinationsMap.set(key,newCombinations);
        }
    }
}