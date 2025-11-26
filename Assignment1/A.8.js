function gg(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return "Divisible by both"
    } else {
        return "Not divisible by both"
    }
}

console.log(gg(15))   
   