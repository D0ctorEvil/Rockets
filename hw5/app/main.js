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
//-----------Task 3----------------

function clerk(arr){
    const arrL = arr.length;
    let flag = true;
    let twentyFife = 0;
    let fifty = 0;
    let sto = 0;
    let i = 0;
    while(i < arrL){
        
        
        switch (arr[i]) {
            case 25:
                twentyFife++;
                break;
            case 50:
                twentyFife >= 1 ? (fifty++ , twentyFife--) : flag = false;
                break;
            case 100:
                fifty >= 1 && twentyFife >= 1 ? (sto++ , fifty-- , twentyFife--) : twentyFife >= 3 ? (sto++ , twentyFife -= 3) : flag = false; 
                break;
        } 
        i++;
    }
    return flag;
}
button2.onclick = function(){
    arr=[25,50,50];
    clerk(arr) ? alert("Все клиенты были обслужены!  :)") : alert("Не все клиенты были обслужены!  :(");
}