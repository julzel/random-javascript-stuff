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
