import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const matchReader = new MatchReader('football.csv');
matchReader.read();

let manUnitedWins = 0;

for (const match of matchReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.Homewin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
