//----------------Task 1-----------------
const count_ip = (result) => {
count = result[1][0]*256*256*256+result[1][1]*256*256+result[1][2]*256+result[1][3]-result[0][0]*256*256*256+result[0][1]*256*256+result[0][2]*256+result[0][3];
if(count<0) {
    return "Неверно введеные значения ip адрессов"
} 
console.log(count)
return count;
}    
button1.onclick =function(){
let result=[[0,0,0,0],[255,255,255,255]];
alert(count_ip(result));
}
//----------------Task 2-----------------
let requestURL = 'app/morse_code.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        button2.onclick =function(){
    let code = request.response
    let result='.... . -.--   .--- ..- -.. .';
    alert(decoder(result,code));
    }
}
const decoder = (result,code) => {
    arr= result.split('   ');
    array=arr.map((el,i)=>el.split(' '))
    const elem = Object.values(code)
    const keys = Object.keys(code)
    decode = array.map((el)=>el.map((elee)=>elem.map((ele,i)=>ele===elee ? keys[i]:1)))
    decode_arr=(decode.map((el)=>el.flat(1)))
    decode_arr=(decode_arr.map((el)=>el.join('').replace(/\d+/g,"")))
    return decode_arr.join(' ')
 }    
