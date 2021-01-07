"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1]; // first element is equal to the second element eg [10,-1] -> [-1, 10]
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, -1, 5, 3]);
sorter.sort();
console.log(sorter.collection);
