import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-12, 5, 9, 0, 300, 14]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);


