const data = '21345A67098'; 
let a="";
for (let i = 0; i <= data.length; i++){
  
  if (data[i] % 2 === 0 &&  data[i]!= 0) {
    a +=data[i];
    
  }
}
console.log(a);