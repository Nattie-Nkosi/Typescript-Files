import { MatchReader } from './MatchReader';
import { Summery } from './Summery';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summery = Summery.winsAnalysisWithHtmlReport('Arsenal');

summery.buildAndPrintReport(matchReader.matches)