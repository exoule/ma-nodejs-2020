const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];

if (vegetables[0] == 'cucumber' || vegetables[1] == 'cucumber' || vegetables[2] == 'cucumber') {
  console.log(`vegetables`);
  } else if (fruits[0] == 'cucumber' || fruits[1] == 'cucumber' || fruits[2] == 'cucumber') {
      console.log(`fruits`);
    } else {
      console.log(`not ok`);
    }

switch (true) {
  case (vegetables.includes('cucumber') && fruits.includes('cucumber')):
    console.log(`vegetables & fruits`);
    break;

  case vegetables.includes('cucumber'):
    console.log(`vegetables`);
    break;

  case fruits.includes('cucumber'):
    console.log(`fruits`);  
    break;

  default:
    console.log(`not ok`);
    break;
}
