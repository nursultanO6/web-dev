let i = 3;

while (i) {
  alert( i-- );
}
let j = 0;
while (++j < 5) alert( j );
while (j++ < 5 ) alert( j );
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
for(let z=0; z<10; z++){
    if(z%2==0){
        alert( z );
    }else{
        alert("No");
    }
}
let y = 0;
while (y < 3) {
  alert( `number ${y}!` );
  y++;
}
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}