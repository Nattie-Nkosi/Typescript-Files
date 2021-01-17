import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string){}

  /* A logic to Open A CSV File and Parce all the data inside it */
  read():void{
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    }).split('\n')
      .map((row:string):string[] => {
      return row.split(',');
    });
    
  }
}