//----------Task 1-------------
class Hex {
    constructor(Number){
        this.Number=Number;
    }
    toString(){
       return Number(this.Number).toString(16);
    }
    plus(b){
        this.Number=Number(this.Number)+b.Number;
        return this;
    }
    minus(b){
        this.Number=Number(this.Number)-b.Number;
        return this;
    }
    toJSON(){
        return Number(this.Number).toString(16);
    }
    parse(str){
        return  parseInt(str,16);
    }
}
let FF = new Hex(255);
let a = new Hex(10);
let b = new Hex(5);
console.log(FF.toString(FF.Number));
console.log(a.plus(b).toJSON());
console.log(FF.parse('ff'));
//-----------Task 2-----------
class Word {
    #word;
    #value;
    dictionary = new Object();
    newWord(word, value){
        if(typeof word != "string" && typeof value != "string"){
            return false;
        }
        else{
        this.#word = word;
        this.#value = value;
        this.dictionary[this.#word] = this.#value;
        }
    }
    look(word){
        return this.dictionary[word] = this.#value
    }
}
let word = new Word()
word.newWord('Apple',"Aplle is fruit")
word.newWord('Banana',"Banana is fruit")
console.log(word.look('Banana'))
