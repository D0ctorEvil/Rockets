let inputM1 = document.querySelector('#mas1')
let button1 = document.querySelector('#button1')


button1.onclick =function()
{
let M1 = inputM1.value;
    let arr = M1.toString().split('|');
    let row_kol = arr.length;
    for (let index = 0; index < row_kol; index++) {
        let temp = arr[index];
        arr[index] = temp.toString().split(','); 
    }
    for (let index = 0; index < row_kol; index++) {
        let colums = arr[index].length;
        for (let index2 = 0; index2 < colums; index2++) {
            let temp = +arr[index][index2];
            arr[index][index2] = temp;
        }
    }
    let buf =arr
    console.log(arr)
    document.getElementById('result1').innerHTML = MinSum(buf);
}
function MinSum(arr)
{
    function compareNumbers(a, b) {
        return a - b;
      }
    for (let index = 0; index < arr.length; index++) {
    arr[index].sort(compareNumbers)
    console.log(arr[index])
    }
    let Minsum = 0
    for (let index = 0; index < arr.length; index++) {
        let temp =arr[index][0];
        console.log(arr[index][0])
        console.log("Prohod")
        Minsum=Minsum + temp
    }
    return Minsum
}
let inputM2 = document.querySelector('#mas2')
let button2 = document.querySelector('#button2')


button2.onclick =function()
{
    
let M2 = inputM2.value;
          arr = M2.toString().split(',')
          let columns = arr.length
    for (let index = 0; index < columns; index++) {
            let temp = +arr[index];
            arr[index] = temp;
        }
        console.log(arr)
        document.getElementById('result2').innerHTML = twoOldestAges(arr);
    console.log(arr)
}
function twoOldestAges(arr)
{
    function compareNumbers(a, b) {
        return b-a;
      }
    arr.sort(compareNumbers)
    console.log(arr)
    let array=[0,0]
    for (let index = 0; index < 2; index++) {
        array[index] =arr[index]
        console.log(arr[index][0])
        console.log("Prohod")
    }
    let temp = array[0]
    array[0]=array[1]
    array[1]=temp
    return array
}

let inputM3 = document.querySelector('#mas3')
let button3 = document.querySelector('#button3')


button3.onclick =function()
{

    M3=inputM3.value
    if (M3.length== 0) {
        alert("Empty")
    } else {
        M3=M3.replace(/\s+/g,' ').trim()
        let arr= M3.split(" ")
        console.log(arr)
        document.getElementById('result3').innerHTML = shortWord(arr);
    }
    
}
function shortWord(arr) {
    function compareWord(a, b) {
        return a-b;
      }
    arr.sort(compareWord)
    return arr[0].length
}