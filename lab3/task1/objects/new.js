let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

function Calculator() {
    this.read=function() {
        this.a=+prompt("val for a", 0);
        this.b=+prompt("val for b:", 0);
    };
    this.sum=function() {
        return this.a+this.b;
    };
    this.mul=function() {
        return this.a*this.b;
    };
}
let calculator=new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

function Accumulator(startingValue) {
    this.value=startingValue;
    this.read=function() {
        this.value+=+prompt("val to add", 0);
    };
}
let accumulator=new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);