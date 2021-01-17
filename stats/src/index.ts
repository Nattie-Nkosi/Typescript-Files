import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');


const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const { HomeWin, AwayWin, Draw } = MatchResult;
let manUnitedWins = 0;

for(let match of matchReader.matches){
  if(match[1] === 'Man United' && match[5] === HomeWin){
    manUnitedWins++;
  }else if(match[2] === 'Man United' && match[5] === AwayWin){
    manUnitedWins++;
  }
}

console.log(`Man united won ${manUnitedWins} games`);