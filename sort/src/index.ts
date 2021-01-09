import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([-12, 5, 9, 0, 300, 14]);
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(numbersCollection);
const sorterString = new Sorter(charactersCollection);
sorter.sort();
console.log(numbersCollection.data);
sorterString.sort();
console.log(charactersCollection.data);



