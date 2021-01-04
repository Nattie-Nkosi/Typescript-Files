var today = new Date();
var data = {
    id: 30,
    name: 'Nutty',
    isFat: false
};
//Funtions
var logNum = function (i) {
    console.log(i);
};
var addNum = function (a, b) {
    return a + b;
};
var subtrNum = function (a, b) {
    a - b;
};
var divideNum = function (a, b) {
    return a / b;
};
var logger = function (msg) {
    console.log(msg);
};
var loggerMsg = function (name) {
    console.log(name);
};
// Destructuring
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var loggerWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
var profile = {
    user: 'Nutty',
    age: 24,
    coords: {
        lat: 32,
        long: 65
    },
    setAge: function (age) {
        this.age = age;
    }
};
var user = profile.user, _a = profile.coords, lat = _a.lat, long = _a.long;
// Arrays
var carMakers = ['Chervy', 'BMW', 'AUDI', 'MERCEDES BENZ'];
carMakers.map(function (car) {
    return car;
});
var dates = [];
dates.push('2021-03.27');
dates.push(new Date());
var coldDrink1 = ['Brown', true, 30];
var coldDrink2 = ['Brown', true, 40];
var softDrink = ['Orange', false, 35];
;
var oldM2 = {
    name: 'BMW m2 Comp',
    modelYear: 2016,
    broken: true,
    summery: function () {
        return "Name: " + this.name;
    }
};
var printVehicle = function (_a) {
    var name = _a.name, modelYear = _a.modelYear, broken = _a.broken, summery = _a.summery;
    console.log(summery());
};
printVehicle(oldM2);
