
 function calculateSimpleInterest(principal, time, rate)
 {
 let simpleInterest = (principal * time * rate) / 100; 
   return simpleInterest;
  }
  
  let principal = 40000;
  let time = 2 ;
  let rate = 2;
  
  let interest = calculateSimpleInterest(principal, time, rate);
  console.log('Simple Interest: ${interest}');
  