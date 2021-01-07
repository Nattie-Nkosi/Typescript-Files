class Sorter {
  constructor(public collection: number[] | string){}

  sort():void {
    const { length } = this.collection;
    for(let i = 0; i < length; i++){
      for(let j = 0; j < length - i - 1; j++){
        if(this.collection instanceof Array){
          if(this.collection[j] > this.collection[j + 1]){
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1]; // first element is equal to the second element eg [10,-1] -> [-1, 10]
            this.collection[j + 1] = leftHand;
          }
        }
        
      }
    }
  }

}

const sorter = new Sorter([10, -1, 5, 3])
sorter.sort();
console.log(sorter.collection);