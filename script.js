// console.log('Hello World')
// console.log(5 + 5)

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    } else {
        console.log('something went wrong')}
}

console.log(getComputerChoice())