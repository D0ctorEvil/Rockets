let inputH = document.querySelector('#height')
let inputW = document.querySelector('#width')
let inputL = document.querySelector('#lenght')
let button1 = document.querySelector('#r1')

button1.onclick = function()
{
let H =inputH.value
let W =inputW.value
let L =inputL.value
    if (H>1000||H==0||H<0) {
        alert("Неверное значение высоты")
    }
    else{
        if (W>1000||W==0||W<0) {
            alert("Неверное значение ширины")
        }
        else{
            if (L>1000||L==0||L<0) {
                alert("Неверное значение длины")
            }
            else{
                let Sp=H*(2*W+2*L)
                console.log(Sp)
                let R=Sp/16
                R = Math.ceil(R,0)
                console.log(R)
                document.getElementById('result1').innerHTML = R;
            }
        }
    }

}
let inputA1 = document.querySelector('#A1')
let inputA2 = document.querySelector('#A2')
let inputA3 = document.querySelector('#A3')
let inputB1 = document.querySelector('#B1')
let inputB2 = document.querySelector('#B2')
let inputB3 = document.querySelector('#B3')
let button2 = document.querySelector('#r2')

button2.onclick = function(){
    let A1 = inputA1.value
    let A2 = inputA2.value
    let A3 = inputA3.value
    let B1 = inputB1.value
    let B2 = inputB2.value
    let B3 = inputB3.value
    if (A1>100||A1==0||A1<0) {
        alert("Неверное значение стоимости первого вида золотого песка")
    }
    else{
        if (A2>100||A2==0||A2<0) {
            alert("Неверное значение стоимости второго вида золотого песка")
        }
        else{
            if (A3>100||A3==0||A3<0) {
                alert("Неверное значение стоимости третьго вида золотого песка")
            }
            else{
                if (B1>100||B1==0||B1<0) {
                    alert("Неверное значение веса первого мешка")
                }
                else{
                    if (B2>100||B2==0||B2<0) {
                        alert("Неверное значение веса второго мешка")
                    }
                    else{
                        if (B3>100||B3==0||B3<0) {
                            alert("Неверное значение веса третьего мешка")
                        }
                        else{
                            let price =new Array
                            let weight =new Array
                            let cost =new Array
                            price.push(A1,A2,A3)
                            weight.push(B1,B2,B3)
                            function compareNumbers(a, b) {
                                return a - b;
                              }
                            price.sort(compareNumbers)
                            weight.sort(compareNumbers)
                            for (let index = 0; index < 3; index++) {
                                let C=price[index]*weight[index]
                                cost.push(C)
                            }
                            let all =cost[0]+cost[1]+cost[2]
                            document.getElementById('result2').innerHTML = all;
                            }
                        }
                    }
                
            }
        }
    }
}
let inputB = document.querySelector('#bilet')
let button3 = document.querySelector('#r3')

button3.onclick = function(){
    bilet =inputB.value
    console.log(bilet)
    let b = bilet.toString().split('')
    let realb = b.map(Number)
    console.log(realb)
    if (realb.length>6||realb.length==0||realb.length<6) {
        alert("Неверное значение билетика")
    }
    else{
    let b = bilet.toString().split('')
    let realb = b.map(Number)
    console.log(realb)
    let First = realb[0]+realb[1]+realb[2]
    let Second =  realb[3]+realb[4]+realb[5]
    console.log(First)
    console.log(Second)
    if(First==Second)
    {
        alert("Билетик счастливый")
    }
    else alert("Билетик несчастливый")
    }
}