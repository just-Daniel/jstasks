//https://www.codewars.com/kata/569512b7707bc1b88200002f

const fibonacci = count =>{
    if (count <= 2) return 1;
  
    return fibonacci(count - 1) + fibonacci(count - 2);
  }
  
  console.log(fibonacci(7))


//==================================================

// const fibonacci = n => {
//     switch(n)
//     {
//       case 1 : return 1;
//       case 2 : return 1;
//       default : return fibonacci(n-1)+fibonacci(n-2);
//     }
//   };