// string rotation

let s1 = 'waterbottle';
let s2 = 'erbottlewat';

function stringRotation(s1, s2){
  debugger;
  let doubled = s2 + s2;
  return doubled.includes(s1);
}

let test = stringRotation(s1, s2);
console.log(test);
