/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')

let tempNumber = ''
let numbers = []
let operator = ''
let tempDisplay = ''

const resetCalculator = () => {
  display.innerText = '0'
  tempNumber = ''
  numbers = []
  operator = ''
  tempDisplay = ''
}
const catchNumber = (event) => {
  if (numbers.length <= 1) {
    tempNumber += event.target.innerText
    if (numbers.length != 0) {
      tempDisplay = `${numbers[0]} ${operator} ${tempNumber}`
    } else {
      tempDisplay = `${tempNumber}`
    }
    display.innerText = tempDisplay
  } else {
    alert(
      'Sorry, we are accepting only 2 digits for now. please press (=) operator'
    )
  }
}

const catchOperator = (event) => {
  if (event.target.innerText === 'C') {
    resetCalculator()
  } else {
    if (tempNumber !== '' && numbers.length < 2) {
      numbers.push(parseInt(tempNumber))
      tempNumber = ''
      if (numbers.length === 1) {
        operator = event.target.innerText
        tempDisplay = `${numbers[0]} ${operator}`
      } else {
        tempDisplay = `${numbers[0]} ${operator} ${numbers[1]} `
        alert(
          'Sorry, we are accepting only 2 digits for now. please press (=) operator'
        )
      }
    } else if (numbers.length === 0) {
      alert('Sorry, you have to choose a number first.')
    } else if (numbers.length === 1) {
      operator = event.target.innerText
      tempDisplay = `${numbers[0]} ${operator}`
    } else {
      alert(
        'Sorry, we are accepting only 2 digits for now. please press (=) operator'
      )
    }
    display.innerText = tempDisplay
  }
}

const showCalculation = () => {
  if (tempNumber !== '') {
    numbers.push(parseInt(tempNumber))
    tempNumber = ''
  }
  if (numbers.length === 2) {
    if (operator !== '') {
      if (operator === '+') {
        display.innerText = `${numbers[0]} + ${numbers[1]} = ${
          numbers[0] + numbers[1]
        }`
      } else if (operator === '-') {
        display.innerText = `${numbers[0]} - ${numbers[1]} = ${
          numbers[0] - numbers[1]
        }`
      } else if (operator === '/') {
        display.innerText = `${numbers[0]} / ${numbers[1]} = ${
          numbers[0] / numbers[1]
        }`
      } else if (operator === '*') {
        display.innerText = `${numbers[0]} * ${numbers[1]} = ${
          numbers[0] * numbers[1]
        }`
      }
    } else {
      alert('Error: You should select an operator. Better luck again')
    }
  } else {
    alert('Error: There should be 2 numbers. Better luck again')
  }
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', catchNumber)
})
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', catchOperator)
})
equalsButton.addEventListener('click', showCalculation)

resetCalculator()
