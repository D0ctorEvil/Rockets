export default class viewCart{
    constructor(handleRemoveFromCart){
        this.dom = document.querySelector('.cart');
        //this.dom.addEventListener('click', handleRemoveFromCart);
    }
    
    render(cart){
       this.dom.innerHTML = cart.map(el => this.renderCart(el)).join('');
    }

    renderCart(){
       /* return `<div class="col">
        <div class="card product">
        <img src="${ img }" alt="${ pname }">

          <div class="card-body">
            <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${pname}</font></font></p>
            <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${price} $</font></font></p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary btn_add_to_cart" data-id="${ idp }"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">In Cart</font></font></button>
                <button type="button" class="btn btn-sm btn-outline-secondary"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">About products</font></font></button>
              </div>
            </div>
          </div>
        </div>
      </div>`;*/
    }


}