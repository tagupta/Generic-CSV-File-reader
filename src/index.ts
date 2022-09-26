import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.Homewin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
