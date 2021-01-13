import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([1,4,-2,55,100,-33]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('Xaaby');
charsCollection.sort();
console.log(charsCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(-32);
linkedlist.add(0);
linkedlist.add(99);
linkedlist.add(54);
linkedlist.sort();
linkedlist.print();



