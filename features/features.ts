const today = new Date();

const data: {
  id: number,
  name: string,
  isFat: boolean
} = {
  id: 30,
  name: 'Nutty',
  isFat: false
}


//Funtions
const logNum: (i: number) => void = (i: number) => {
  console.log(i);
}

const addNum = (a: number, b: number): number => {
  return a + b;
}

const subtrNum = (a: number, b: number) => {
  a - b;
}

const divideNum = function (a: number, b: number) {
  return a / b;
}

const logger = (msg: string): void => {
  console.log(msg);
}

const loggerMsg = function (name: string) {
  console.log(name);
}

// Destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const loggerWeather = ({
  date,
  weather
}: {
  date: Date,
  weather: string
}) => {
  console.log(date);
  console.log(weather);
}

const profile = {
  user: 'Nutty',
  age: 24,
  coords: {
    lat: 32,
    long: 65
  },
  setAge: function (age: number) {
    this.age = age;
  }
}

const {
  user,
  coords: {
    lat,
    long
  }
}: {
  user: string,
  coords: {
    lat: number,
    long: number
  }
} = profile;

// Arrays
const carMakers:string[] = ['Chervy', 'BMW', 'AUDI', 'MERCEDES BENZ'];

carMakers.map((car:string):string => {
   return car;
})

const dates:(string | Date )[] = [];
dates.push('2021-03.27');
dates.push(new Date());

//Tuples

type Drink = [string, boolean, number]; // Called a Type Alias

const coldDrink1: Drink = ['Brown', true, 30];
const coldDrink2: Drink = ['Brown', true, 40];
const softDrink: Drink = ['Orange', false, 35];

// Interfaces
interface Reportable {
  summery(): string;
}

const oldM2 = {
  name: 'BMW m2 Comp',
  modelYear: 2016,
  broken: true,
  summery(): string {
    return `Name: ${this.name}`;
  }
}

const drink = {
  name: 'Coke',
  color: 'Brown',
  carbonated: true,
  summery(): string {
    return `The name of this drink is ${this.name} and it is ${this.color} in Color`;
  }
}

const printSummery = (item: Reportable): void => {
  console.log(item.summery());
}

/* printSummery(oldM2);
printSummery(drink); */

class Vehicle {
 public drive():void{
    console.log('Vrrrrrrrrruummmmm!!!');
  }

 protected honk():void {
    console.log('Beeep Beeep Beeep!!!')
  }
}

class Car extends Vehicle {
  public drive():void{
    console.log('Vrrrpapapapa!!!');
  }

  public startDrivingProcess(){
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
const m2 = new Car();
m2.startDrivingProcess();














