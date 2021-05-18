//---------Task 1-----------
class PaginationHelper{
    #arr=[];
    constructor (str,length){
        let array=str.splice(0,length)
        this.#arr[0]=array;
        let i=0
        while(str.length>length){
            i++;
            let array=str.splice(0,length)
            this.#arr[i]=array;
        }
        this.#arr[i+1]=str;
    }
    pageCount (){
        return console.log(this.#arr.length);
    }
    itemCount (){
        return console.log(this.#arr.reduce(function(a, b){
            return a.length + b.length;
          }))
    }
    pageItemCount (index){
        return(console.log(this.#arr[index] ? this.#arr[index].length :-1))
    }
    pageIndex (index){
        let l= this.#arr.reduce(function(a, b){
            return a.length + b.length;
        })
        return console.log((index < 0 || index >= l) ? -1 : (Math.ceil((index+1)/this.#arr[0].length)-1));
    }
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'],4);
helper.pageCount();
helper.itemCount();
helper.pageItemCount(0);
helper.pageItemCount(1);
helper.pageItemCount(2);
helper.pageIndex(5);
helper.pageIndex(2);
helper.pageIndex(20);
helper.pageIndex(-10);
//---------Task 2-----------
class Fighter{
    name;
    health;
    damagePerAttack;
    constructor (name, health, damagePerAttack) {
        
    this.name = name;

    this.health =health;

    this.damagePerAttack = damagePerAttack;

}
}
function declareWinner (fighter1, fighter2, firstAttacker) {
    let flag=0;
    while(flag==0){
        if(firstAttacker == fighter1.name){ 
            fighter2.health-=fighter1.damagePerAttack
            fighter2.health<=0 ? flag=1:fighter1.health-=fighter2.damagePerAttack
        }
        else{
            fighter1.health-=fighter2.damagePerAttack
            fighter1.health<=0 ? flag=1:fighter2.health-=fighter1.damagePerAttack
        }
        if(fighter1.health<=0||fighter2.health<=0) flag=1;
        }
    return fighter1.health<=0 ? fighter2.name: fighter1.name;
}
console.log(declareWinner(new Fighter('Jo',10,2),new Fighter('Harald',5,4),'Harald'))