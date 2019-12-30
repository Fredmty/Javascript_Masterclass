function isAnagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < arr1.length; i++) {
      let letter = arr1[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);
    
    for (let i = 0; i < arr2.length; i++) {
      let letter = arr2[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  //console.log(isAnagram('anagrams', 'nagaramm'));



  function isAnagram2(array1, array2) {
    if(array1.length !== array2.length) {
      return false; 
    }
    let elemento = array2.split("");
    for(i = 0; i < array1.length; i++) {
      
        if(array1[i] == array2[i]) {
          elemento.splice(elemento.indexOf(i),1)
        }
      
    }
    return true;
  } 
  console.log(isAnagram2("kaka","akak"))

  