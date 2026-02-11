function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user1 = makeUser();

alert( user1.ref().name ); // John

let calculator={
    read() {
        let a=+prompt("val for a", 0);
        let b=+prompt("val for b", 0);
    },
    sum() {
        return this.a+this.b;
    },
    mul() {
        return this.a*this.b;
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ledder={
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    shpwStep() {
        alert(this.step);
        return this;
    }
}
ledder.up().up().down().shpwStep().down().shpwStep();