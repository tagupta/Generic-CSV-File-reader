import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { MatchData } from './MatchData';
import { HtmlReport } from './ReportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(data: MatchData[]): void {
    const result = this.analyzer.run(data);
    this.outputTarget.print(result);
  }
}
