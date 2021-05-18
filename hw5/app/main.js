//-----------Task 1----------------
const Quipu_decoder = (arr)=>{
    str=arr.join('').split('~');
    return +str.map((el)=>el=el.length).join('');
}
const Quipu_Calculator=(result)=>{
Array=result.split('');
id = Array.findIndex(currentValue => (currentValue == "+"||currentValue == "-"||currentValue == "/"||currentValue == "*"));
symbol = Array.splice(id,1);
arr=Array.splice(id);
First_number=Quipu_decoder(Array);
Second_number=Quipu_decoder(arr);
let answer=0
switch(symbol[0]){
    case '+': {
        answer = First_number+Second_number;
        break;
    }
    case '-': {
        answer = First_number-Second_number;
        break;
    }
    case '*': {
        answer = First_number*Second_number;
        break;
    }
    case '/': {
        answer = First_number/Second_number;
    }
}
answer=answer.toString().split('');
let str=[];
answer=answer.map((el,i)=>{for(let i=0;i<el;i++) str.push('@'); i+1!= answer.length ?str.push('~'):str.push('')});
return str.join('');
}
button1.onclick =function(){
    result="@~@@~~~@@@*@@~~";
    alert(Quipu_Calculator(result));
}
//-----------Task 2----------------
const tovar = 8
let maxA = []
function findMaxProd (num){
    maxA = [num,num]
    let arr = [num,0]
    let iter = num
    while (iter != 1) {
            arr.splice(1)
            arr[0]--
            iter = arr[0]
            arr[1] = num - arr[0];
            findMax(arr)
            if(arr[1] > 2){
            checkArr(arr,1)
            }else{
                if(arr[1] == 2){
                    arr.splice(1)
                    arr.push(1)
                    arr.push(1)}
              findMax(arr)
                }
    return maxA.join(' ')
}}
function checkArr(arr,i){
    let temp = arr[i]
    while (arr[i] !=1 ) {
            arr.splice(i+1)
            arr[i]--
            arr[i+1] = temp - arr[i]
             findMax(arr)
            if(arr[i+1] > 2){
            checkArr(arr,i+1)
            }else{
                if(arr[i+1] == 2){
                    arr.splice(i+1)
                    arr.push(1)
                    arr.push(1)}}
          findMax(arr)}}
function findMax(arr){
    let m = 1
    arr.forEach(element => {
        m *= element        
    });
    if(m > maxA[0]){
        maxA[0] = m
        maxA.splice(1)
        maxA.push(arr.join(','))
    }
    if(m == maxA[0]){
        console.log(arr)
        maxA.push(arr.join(','))
    }
}
button2.onclick= function (){alert("Максимальный продукт: " +findMaxProd(tovar))}
//-----------Task 3----------------
function clerk(arr){
    const arrL = arr.length;
    let flag = true;
    let twentyFife = 0;
    let fifty = 0;
    let hundred = 0;
    let i = 0;
   for(i =0;i<arrL;i++){      
        switch (arr[i]) {
            case 25:
                twentyFife++;
                break;
            case 50:
                twentyFife >= 1 ? (fifty++ , twentyFife--) : flag = false;
                break;
            case 100:
                fifty >= 1 && twentyFife >= 1 ? (hundred++ , fifty-- , twentyFife--) : 
                twentyFife >= 3 ? (hundred++ , twentyFife -= 3) : flag = false; 
                break;
        } 
        i++;
    }
    return flag;
}
button3.onclick = function(){
    arr=[25,25,50,100];
    clerk(arr) ? alert("Yes") : alert("No");
}