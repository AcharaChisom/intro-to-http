function firstStep(reqBody) {
  return reqBody.split('&')
}

function secondStep(pairs) {
  return pairs.map(pair => pair.split('='))
}

function thirdStep(pairs) {
  return pairs.map(pair => pair.map(word => word.replace('+', ' ')))
}

function fourthStep(pairs) {
  return pairs.map(pair => pair.map(word => {
    let newWord = ''
    let i = 0
    while(i < word.length) {
      if(word[i] === '%') {
        newWord += decodeURIComponent(word.slice(i, i + 3))
        i += 3
      } else {
        newWord += word[i]
        i += 1
      }
    }
    return newWord
  }))
}

function fifthStep(input) {
  return input.reduce((acc, curr) => {
    acc[curr[0]] = curr[1]
    return acc
  }, {})
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
