// Iteration 1: Names and Input
const hacker1="Solen" ;
console.log(`The driver's name is ${hacker1}`)

const hacker2="Tzu-Yun";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops


let result = ``
for (let i=0; i < hacker1.length; i++ ) {
  let letter=hacker1[i].toUpperCase();
  result = `${result} ${letter}`;
}

console.log(result)

let result2= ``;
for (let j=hacker2.length - 1; j >= 0; j--) {
  let letter2 = hacker2[j];
  result2 = `${result2}${letter2}`;
}

console.log(result2)

if (hacker1[0] < hacker2[0] ) {
  console.log(`The driver's name goes first.`)
}

else if (hacker1[0] > hacker2[0] ) {
  console.log(`Yo, the navigator goes first, definitely.`)
}

else {
  console.log (`What?! You both have the same name?`)
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim porta libero, ac iaculis massa sodales non. Nam ac eros congue, rutrum felis non, mollis neque. Aliquam interdum, lacus vitae vehicula blandit, diam odio tempus ligula, ut sodales sem quam vitae mauris. Nulla non dictum quam. Vivamus ligula ipsum, ullamcorper ut odio non, rutrum volutpat mauris. Vestibulum sit amet tellus tempus, venenatis dui at, mattis ipsum. Sed fermentum molestie neque.

Suspendisse auctor ex erat, eget tincidunt libero ornare ut. Mauris quis urna at arcu maximus ornare. Praesent fermentum, justo nec vestibulum pretium, ligula nisi suscipit turpis, id malesuada sem est at ante. Praesent at consectetur enim, id maximus metus. Cras feugiat non magna eget blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ut ante at nisi tempus ullamcorper sit amet eget diam. Donec sollicitudin, libero nec elementum eleifend, sapien mi viverra est, et condimentum magna elit quis metus.

Integer hendrerit fermentum magna nec ornare. Cras ut elit vel mauris egestas pharetra eget at arcu. Nunc rhoncus tempor interdum. Donec in posuere orci. Praesent quis sagittis justo. Donec tincidunt massa vel laoreet congue. Praesent velit elit, elementum vitae blandit eget, lobortis ac augue. Donec vitae elementum tortor, vel venenatis magna. Etiam mattis arcu quam, a posuere elit tristique sit amet. Mauris volutpat nisi at nibh varius, eget finibus augue aliquam. Quisque ut enim et ligula convallis gravida ut eu erat. Aliquam at odio ac neque hendrerit malesuada. Nulla elementum eros sem, eget porttitor nunc facilisis eget. Pellentesque malesuada euismod lorem non rhoncus.`

function countWords(str) {
  return str.split(` `)
    .filter(function(n) {
      return n != ``})
    .length
    }

console.log(`Total number of words: ${countWords(longText)}.`)


let countEt=0;

for (let l = 0 ; l<longText.length; l++ ) {
  const twoChars = longText[l] + longText [l+1]

  if (twoChars === "et") {
    countEt++;
  }
}

console.log(`The latin word "et" appears ${countEt} times.`)

// Bonus 2 (doesn't work)

function palindromeTest(str) {

    let newPhrase=str.split('');
  for (let m = 0 ; m < newPhrase.length / 2; m++) {  
    if (newPhrase[m] != newPhrase[newPhrase.length - m]) {
      return false
    }
  
    else {
      return true
    }
  }
  }
  
  let phraseToCheck = "Racecar";
  
  console.log(palindromeTest(phraseToCheck))
  