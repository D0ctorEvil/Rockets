import modelCart from "./modelCart.js";
import viewCart from "./viewCart.js";

export default class controllerCart{
    constructor(publisher){
        this.model = new modelCart();
        this.view = new viewCart(this.handleRemoveFromCart);

        this.load();

        publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
    }

    load(){
        const cart = this.model.loadFromLS();
        this.view.render(cart);
    }

    handleAddToCart = data => {
        console.log(data)
        const newCart = this.model.addCart(data);
        this.view.render(newCart);
    }

    handleRemoveFromCart = ev => {
        const id = ev.target.dataset.id;
        if(id){
            console.count('click');
            const newCart = this.model.removeById(id);
            this.view.render(newCart);
        }
    }

}