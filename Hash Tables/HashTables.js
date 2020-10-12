function hash(key, arrayLen) {
  let total = 0;
  for(let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}


function hash(key, arrayLen) {
  let total = 0;
  let weird_prime = 31;
  for(let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * weird_prime + value) % arrayLen;
  }
  return total;
}