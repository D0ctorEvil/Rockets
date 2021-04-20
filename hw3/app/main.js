//-------------TASK 1-----------------
let re = /\D+/g;
const your_order = (result) => {
let M3=result;
if (M3.length== 0) {
return "";
} else {
    M3=M3.replace(/\s+/g,' ').trim();
    let arr= M3.split(" ");
    function CompareWord(a,b){
        return a.replace(re,"").trim()- b.replace(re,"").trim();
    }
    return arr.sort(CompareWord).join(' ');
}
}
button1.onclick =function(){
result="is2 Thi1s T4est 3a";
alert(your_order(result));
}
//-------------TASK 2-----------------
const Tic_Tac_Toe_Checker= (field) => {
let win_combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
arr=field.flat(1);
let winner = win_combinations.map((ele)=> (arr[ele[0]]==1&&arr[ele[1]]==1&&arr[ele[2]]==1) ? 1 : 
(arr[ele[0]]==2&&arr[ele[1]]==2&&arr[ele[2]]==2) ? 2 : 0);
return winner.some((el) =>el==1)== true ? 1 : 
winner.some((el) =>el==2) == true ? 2 : 
arr.some((el)=>el==0)==true ? -1:0;
}
button2.onclick =function(){ 
let field =[[2,1,2],[0,1,2],[1,1,1]];
alert(Tic_Tac_Toe_Checker(field) == 1 ? "'X' won":
Tic_Tac_Toe_Checker(field) == 2 ? "'Y' won":
Tic_Tac_Toe_Checker(field) == 0 ? "it's a cat's game" : "the board is not yet finished");
}
//-------------TASK 3-----------------
const Find_Chair = (rooms, chairs) => {
if(chairs == 0) { 
return "Game On";
} else{
    let count_chairs = rooms.map( el => el[1]);
    let freeChairs = rooms.map( el => el[0]).map((str, i) => count_chairs[i] - str.length < 0 ? 0 : count_chairs[i] - str.length);
    let sumE = 0;
    let id = freeChairs.map((el)=>(sumE += el) >= chairs ? 1 : 0).findIndex( currentValue => currentValue == 1 );
    sumE=0;
    let arr_taken_chairs = freeChairs.map((el)=>(sumE += el)<=chairs ? el:el-sumE+chairs);   
    return id == -1 ? "Not enough!":arr_taken_chairs.slice(0,id+1);
}
}

button3.onclick =function(){
const rooms = [['XXX', 3],['XXXXX',6],['XXXXXX', 7],['XXXXXX', 9]];
const ChairsNeed = 4;
alert(Find_Chair(rooms,ChairsNeed));
}