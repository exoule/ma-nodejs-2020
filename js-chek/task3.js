

let text = ' Hello World! '; 
let target = "o";

let pos = -1 ;
while ((pos = text.indexOf(target, pos +1)) != -1) {
  console.log(pos);
}

text = text.split('l').join('');
console.log(text);