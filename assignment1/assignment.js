// ===================================================
// A.1
function num() {
    let x = "123"
    console.log(Number(x) + 7);
}
num();

// ===================================================
// A.2
function test() {
    let x = 0; 
    if (x === 0 || x === false || x === null || x === undefined) {
        console.log("invalid");
    }
}
test();

// ===================================================
// A.3
function odd() {
    for(let i = 0 ; i <=10 ; i++ ){
        if(i%2==0){
            continue;
        }
        console.log(i);
    }
}
odd();

// ===================================================
// A.4
function enven() {
    let num = [1,2,3,4,5,6,7,8,9,10]
    let evennum = num.filter(num => num % 2 == 0)
    console.log(evennum);
}
even();

// ===================================================
// A.5
function spe() {
    let a = [1,2,3]
    let b = [4,5,6]
    let c = [...a, ...b]
    console.log(c);
}
spe();

// ===================================================
// A.6
function cal() {
    let day = 2
    switch (day){
        case 1: console.log("Sunday"); break
        case 2: console.log("Monday"); break
        case 3: console.log("Tuesday"); break
        case 4: console.log("Wednsday"); break
        case 5: console.log("Thursday"); break
        case 6: console.log("Friday"); break
        case 7: console.log("Saturday"); break
    }
}
cal();

// ===================================================
// A.7
function len() {
    let arr = ["a", "ab", "abc"]
    console.log(arr.map(x => x.length))
}
len();

// ===================================================
// A.8
function gg(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return "Divisible by both"
    } else {
        return "Not divisible by both"
    }
}
console.log(gg(15))

// ===================================================
// A.9
const sqr = x => x * x
console.log(sqr(5))

// ===================================================
// A.10
function form({name, age}) {
    return name + " is " + age + " years old"
}
console.log(form({name: "John", age: 25}))

// ===================================================
// A.11
function sum(a, b, c, d, e) {
    return a + b + b + c + d + e
}
console.log(sum(1, 2, 3, 4, 5))

// ===================================================
// A.12
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success")
            reject("Failed")   
        }, 3000)
    })
}

myPromise()
    .then(data => console.log(data))
    .catch(err => console.log(err))

// ===================================================
// A.13
function big(arr) {
    return Math.max(...arr)
}
console.log(big([1, 3, 7, 2, 4]))

// ===================================================
// A.14
const obj = {
     name: "John",
     age: 30 
    };
function Keys() {
   return Object.keys(obj);
}

console.log(Keys()); 

// ===================================================
// A.15
function split() {
  const str = "The quick brown fox"
  return str.split(" ")
}

console.log(split()) 


// ===================================================
// BONUS
var createCounter = function(init) {
    let value = init 
    return {
        increment() {
            value = value + 1
            return value
        },
        decrement() {
            value = value - 1 
            return value 
        },
        reset() {
            value = init
            return value
        }
    }
};

// Example usage:
/*
const counter = createCounter(5)
counter.increment(); // 6
counter.reset();     // 5
counter.decrement(); // 4
*/

// ===================================================
// B.1 
/*
foreach : works only with arrays and used to do a function to every single element in the array
for of : works with anything iterable to iterate over elements and give you the value
*/

// ===================================================
// B.2 
/*
hoisting is to lift declared variable to the top of the scope but not the assigned value so it prints undefined 
like 

console.log(msg)
var msg = "spa7o"

and in let and const they are hoisted too and gives error because of the TDZ - you can't use a variable before the line you wrote it in 
*/

// ===================================================
// B.3 
/*
== COMPARE THE VALUE ONLY
=== COMPARE THE VALUE AND THE TYPE
*/

// ===================================================
// B.4 
/*
try and catch : are used in case an error happened in normal or async functions to control what happens when an error occurs
to prevent server crash
*/

// ===================================================
// B.5 
/*
type conversion :you change the type of data manually 
like : Number("7")

coercion : when you put a number and a string, JS converts the number into string to print the output 
like : let num = 7
       let str = "7"
       console.log(num + str) = "77"
*/