export default class modelCart{
    #cart = [];

    loadFromLS(){
        this.#cart = JSON.parse(localStorage.getItem('order') || "[]");
        return this.#cart;
    }

    get Cart(){
        return JSON.parse(JSON.stringify(this.#cart));
    }

    addCart(data){
        console.log(data)
        if(!this.#cart.find(({ idp }) => idp === data.idp)){
           this.#cart.push(data);
        }

        this.writeToLS();

        return this.#cart;
    }
    
    removeById(id){
        this.#cart = this.#cart.filter(date => date.idp != id);
        this.writeToLS();
        return this.#cart;
    }

    writeToLS(){
        console.log(this.#cart)
        localStorage.setItem('order', JSON.stringify(this.#cart));
    }
}