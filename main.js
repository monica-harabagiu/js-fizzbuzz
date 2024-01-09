// stampare i numeri da 1 a 100
// per i multipli di 3 -> Fizz al posto del numero
// per i multipli di 5 -> Buzz al posto del numero
// per i multipli sia di 3 che di 5 -> FizzBuzz al posto del numero

const squares = document.getElementById("container")

for (let i = 1; i <= 100; i++) {

    if ((i % 3) === 0 && (i % 5) === 0) {
        const littleSquare = `<div class="fizz-buzz">FizzBuzz</div>`
        squares.innerHTML += littleSquare
        console.log("FizzBuzz")
    } else if ((i % 3) === 0) {
        const littleSquare = `<div class="fizz">Fizz</div>`
        squares.innerHTML += littleSquare
        console.log("Fizz")
    } else if ((i % 5) === 0) {
        const littleSquare = `<div class="buzz">Buzz</div>`
        squares.innerHTML += littleSquare
        console.log("Buzz")
    } else {
        const littleSquare = `<div class="number">${i}</div>`
        squares.innerHTML += littleSquare
        console.log(i)
    }

}