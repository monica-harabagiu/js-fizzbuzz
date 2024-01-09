// stampare i numeri da 1 a 100
// per i multipli di 3 -> Fizz al posto del numero
// per i multipli di 5 -> Buzz al posto del numero
// per i multipli sia di 3 che di 5 -> FizzBuzz al posto del numero

for (let i = 1; i <= 100; i++) {

    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("Fizz")
    } else if ((i % 3) === 0) {
        console.log("Buzz")
    } else if ((i % 5) === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }

}