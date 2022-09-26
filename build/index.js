"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const matchReader = new MatchReader_1.MatchReader('football.csv');
matchReader.read();
let manUnitedWins = 0;
for (const match of matchReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.Homewin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
