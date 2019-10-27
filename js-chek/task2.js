const user = {  
  firstName: 'John', // string  
  lastName: 'Doe', // string  
  rate: 0.86, // number in range 0..1  
  address: { // not empty object or null    
    line1: '15 Macon St', // string    
    line2: '', // string    
    city: 'Gotham' // string  
  },  
  phoneNumbers: [ // array containing at least 1 element    
    {      
      type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP      
      number: '(555) 555-1234' // string in specific format    
    },
    {
       type: 'LINE',      
       number: '(555) 555-5678'
    }
  ]
};

function checking(validation) {
  if (typeof(validation.firstName) === 'string' && typeof(validation.lastName) === 'string') 
  {
    if (validation.rate > 0 && validation.rate < 1) {
      if (typeof(validation.address.line1) === 'string' 
      && typeof(validation.address.line2) === 'string' 
      && typeof(validation.address.city) === 'string' ) {
        if (Array.isArray(validation.phoneNumbers)) {
          for (i = 0; i < validation.phoneNumbers.length; i += 1) {
            if (validation.phoneNumbers[i].type !== 'MOBILE' 
            && validation.phoneNumbers[i].type !== 'LINE' 
            && validation.phoneNumbers[i].type !== 'VOIP') {
              return false;
            } else if (validation.phoneNumbers[i].number.substr(0,10) !== '(555) 555-') return false;
          } 
          return true; 
        } 
      } 
    } 
  } 
}

console.log(checking(user));
