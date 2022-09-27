import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.matchReaderWithCsvFile('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
