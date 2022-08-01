

let firstRun = true
let numbers = []


const createArrayOfNumbers = (max) => {

    for (let i = 0; i < max; ++i) {
        numbers.push(i + 1);
    };

}

const get6RandomInt = (max) => {

    if (firstRun) {
        createArrayOfNumbers(max)
        firstRun = false;
    }



    let shuffledNumbers = numbers.sort(function () {
        return Math.random() - 0.5;
    });



    let numbersToSend = shuffledNumbers.slice(0, 6)

    return numbersToSend

};



export { get6RandomInt }
