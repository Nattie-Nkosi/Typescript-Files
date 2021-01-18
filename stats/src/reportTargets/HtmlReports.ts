import fs from 'fs';
import { OutputTarget } from '../Summery';

export class HtmlReports implements OutputTarget {
  constructor(public path: string) {}
  print(report: string): void{
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(this.path, html);
  }
}