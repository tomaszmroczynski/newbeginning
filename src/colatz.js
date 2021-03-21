
const collatzSequence = (n) => {
    let nSequence =[n];
    while (n > 1) {
      if  (n % 2 === 0) {
        n = n/2;
        nSequence.push(n);
      } else {
        n = n*3 +1;
        nSequence.push(n);
      } };

    return nSequence
  }


 const valueWithLongestCollatzSequence = (range) => {
    let foundValue = 0;
    let longestSequence = [];
    for (i = 0; i < range ; i++ ){ 
        if (longestSequence.length < collatzSequence(i).length ) { 
            longestSequence = collatzSequence(i);
            foundValue = i; };
  } console.log(`Longest Collatz sequence in range from 1 to ${range} belongs to number ${foundValue} and its sequence has ${longestSequence.length} numbers in row `);
     return foundValue
    
  }
  valueWithLongestCollatzSequence(15)

