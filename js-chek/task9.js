function someFunc(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Мене звати Артур)))');
    }, x);
  });
}

someFunc(1000)
  .then(yes => {
    console.log('Привіт');
    console.log(yes);
  })
  .catch(no => {
    console.log('Goodbay');
  });