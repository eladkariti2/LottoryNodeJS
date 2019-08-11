var express = require('express');
var router = express.Router();
var lottoryGenerator = require('../helpers/LottoryNumberGenerator');
var LottoryDrawRules = require('../models/LottoryDrawRules');
var LottoryDrawCombinations = require('../models/LottoryDrawCombinations');
var LottoryUtil = require('../utils/LottoryUtil');

/* GET home page. */
router.get('/', function(req, res, next) {
  //create Polan mini lottory combinations  
  let rules = new LottoryDrawRules(1, 42, 5);
  var miniPollandLottoryCombination = new LottoryDrawCombinations(1, "Polan Mini Lottory", rules, "Poland")
  miniPollandLottoryCombination = lottoryGenerator.generateAllCombinationsFor5NumbersNoStrong(rules, miniPollandLottoryCombination);
  console.log("number of combinations: " + miniPollandLottoryCombination.updateNumberOfCombination() );
  let filteredCombination = LottoryUtil.filterMoreThen3In10(miniPollandLottoryCombination.combinationsMap, rules);  
   miniPollandLottoryCombination.combinationsMap = filteredCombination;
  console.log("number of filterd combinations: " + miniPollandLottoryCombination.updateNumberOfCombination() );
  res.status(200).json(Object.assign(miniPollandLottoryCombination, { _combinationsMap: [...miniPollandLottoryCombination.combinationsMap ]}));
});

module.exports = router;
