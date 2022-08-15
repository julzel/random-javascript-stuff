const getPrimes = input => {
  // Create an array where each element starts as true
  let analytic = 0
  let analytic2 = 0
  const numsArr = Array.from({ length: input + 1 }, () => {
	  analytic++
    return true
  });

  // Loop through numsArr starting from numsArr[2]
  // keep running the loop until i is greater than the input's square root
  for (let i = 2; i <= Math.floor(Math.sqrt(input)); i++) {
	  analytic2++
    // Check if numsArr[i] === true
    if (numsArr[i]) {
      /* 
      convert all elements in the numsArr 
      whose indexes are multiples of i 
      to false
      */
      for (let j = i + i; j <= input; j += i) {
        numsArr[j] = false;
        analytic++
      }
    }
  }

  /*
  Using Array.prototype.reduce() method:
    loop through each element in numsArr[]
      if element === true, 
      add the index of that element to result[]
      return result
  */
  const primeNumbers = numsArr.reduce(
    (result, element, index) => {
	    analytic++
//     element ? (result.push(index), result) : result
				if (element) {
        	return (result.push(index), result)
        } 
        return result
    }, []
  );
  
   console.log({analytic, analytic2})

  // Return primeNumbers[]
  return primeNumbers;
}

const getFirtsNPrimes = size => {
  const nSize = size || 25
  const nNaturals= [0, 1]
  const nPrimes = []
  let analytic = 0
  let analytic2 = 0

  for (let i = 2; i < nSize; i++) {
    let divisorFound
    for(let j = 1; j < nNaturals.length && !divisorFound; j++) {
	    analytic++
      if (j > 1 && i % j === 0) {
        divisorFound = true
      }
    }
    if (!divisorFound) {
      nPrimes.push(i)
    }
    nNaturals.push(i)
    analytic2++
  }
  
  console.log({analytic, analytic2})
  return nPrimes
}

const n100Primes = getFirtsNPrimes(100)
console.log(n100Primes)

console.log(getPrimes(100));
