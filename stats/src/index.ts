import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summery } from './Summery';
import { HtmlReports } from './reportTargets/HtmlReports';

const csvFileReader = new CsvFileReader('football.csv');


const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summery = new Summery(
  new WinsAnalysis('Arsenal'),
  new HtmlReports('report.html')
);

summery.buildAndPrintReport(matchReader.matches)