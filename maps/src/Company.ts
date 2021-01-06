import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
      lat: number,
      lng: number
    }

    color:string

    constructor(){
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhraseNoun();
      this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
      }
    }

    markerContent():string {
      return `
        <div>
          <h1>${this.companyName}</h1>
          <h2>${this.catchPhrase}</h2>
        </div>
      `;
    }
}

