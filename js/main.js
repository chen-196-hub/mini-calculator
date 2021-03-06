'use strict'

{

  function calculation (number1,cal,number2){
    switch (cal){
      case "+":
        return number1 + number2
        break;
      case "-":
        return number1 - number2
        break;
      case "*":
        return number1 * number2
        break;
      case "/":
        return number1 / number2
        break;
    }
  }




  const numbers = [];
  let frameNumbers=[];
  const buttomClick = document.getElementsByClassName('buttom');
  const frame = document.getElementById('frame');
  const cButtom = document.getElementsByClassName('calculation_buttom');
  // const oper = document.getElementById('operation')


  let x = 0;
  let equal = 0;
  let y = 1;



  for (let count = 0 ;count <cButtom.length ; count++){
    const cNumber = cButtom[count];
    cButtom[count].addEventListener('click',()=>{
      console.log(cNumber.textContent);
      if(cNumber.textContent ==="=" && numbers[1] !== undefined){
        const getframe = frame.textContent;
        numbers.push(parseInt(getframe));
        // console.log(numbers);
        // console.log(calculation(numbers[0],numbers[1],numbers[2]));
        let answer = calculation(numbers[0],numbers[1],numbers[2]);
        if (numbers[1] === "/"){
          console.log(answer.toFixed(5));
          frame.textContent = answer.toFixed(5);
        }else{
          console.log(answer);
          frame.textContent = answer;
        }
        numbers.length =0;
        // x++;
        equal++;
        console.log(equal);
      }else if(cNumber.textContent ==="+" && numbers[1] !== undefined ){
        if (y < 1){
          x= 1;
        }else{
          const getframe = frame.textContent;
          numbers.push(parseInt(getframe));
          // console.log(numbers);
          let answer = calculation(numbers[0],numbers[1],numbers[2]);
          console.log(answer);
          numbers.length = 0 ;
          numbers.push(answer);
          numbers.push("+");
          frame.textContent = answer;
          x++;
          y--;
        };
      }else if (cNumber.textContent ==="-" && numbers[1] !== undefined){
        if (y < 1){
          x= 1;
        }else{
          const getframe = frame.textContent;
          numbers.push(parseInt(getframe));
          // console.log(numbers);
          let answer = calculation(numbers[0],numbers[1],numbers[2]);
          console.log(answer);
          numbers.length = 0;
          numbers.push(answer);
          numbers.push("-");
          frame.textContent = answer;
          x++;
          y--;
        }
      }else if(cNumber.textContent ==="*" && numbers[1] !== undefined){
        if (y < 1){
          x= 1;
        }else{
          const getframe = frame.textContent;
          numbers.push(parseInt(getframe));
          // console.log(numbers);
          let answer = calculation(numbers[0],numbers[1],numbers[2]);
          console.log(answer);
          numbers.length = 0;
          numbers.push(answer);
          numbers.push("*");
          frame.textContent = answer;
          x++;
          y--;
        }
      }else if (cNumber.textContent ==="/" && numbers[1] !== undefined){
        if (y < 1 ){
          x= 1;
        }else{
          const getframe = frame.textContent;
          numbers.push(parseInt(getframe));
          // console.log(numbers);
          let answer = calculation(numbers[0],numbers[1],numbers[2]);
          console.log(answer);
          numbers.length = 0;
          numbers.push(answer);
          numbers.push("/");
          frame.textContent = answer;
          x++;
          y--;
        }
      }
      else if (cNumber.textContent === "+"){
        const getframe = frame.textContent;
        numbers.push(parseInt(getframe));
        console.log(numbers);
        numbers.push("+");
        x++;
        y--;
      }else if (cNumber.textContent === "-"){
        const getframe = frame.textContent;
        numbers.push(parseInt(getframe));
        console.log(numbers);
        numbers.push("-");
        x++;
        y--;
      }else if (cNumber.textContent === "*"){
        const getframe = frame.textContent;
        numbers.push(parseInt(getframe));
        console.log(numbers);
        numbers.push("*");
        x++;
        y--;
      }else if (cNumber.textContent === "/"){
        const getframe = frame.textContent;
        numbers.push(parseInt(getframe));
        console.log(numbers);
        numbers.push("/");
        x++;
        y--;
      }else if (cNumber.textContent === "C"){
        numbers.length = 0 ;
        frameNumbers.length = 0 ; 
        x = 0 ;
        equal = 0 ;
        frame.textContent = 0;
      };
      console.log(numbers);
      console.log(`x = ${x}`);
      console.log(`y = ${y}`);

    });
  };




  console.log(buttomClick);
  for (let i = 0 ; i < buttomClick.length ; i++){
    const number = buttomClick[i]
    buttomClick[i].addEventListener('click',()=>{
      if (x %2 ===1 ){
        frameNumbers.length = 0
        console.log(frameNumbers)
        x ++;
        console.log(x)
      }
      if(equal >= 1) {
        frameNumbers.length = 0
        equal = 0;
        console.log(`${frameNumbers} & eq:${equal}`)
      }
      frameNumbers.push(number.textContent);
      frame.textContent = frameNumbers.reduce((prev, item) => {
        return prev + item;
      });
        if(frameNumbers[0]==="0") {
          frameNumbers.shift();
        }
      console.log(frameNumbers);
      y =1;
    });   
  }
}