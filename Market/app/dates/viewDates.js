export default class ViewDates{
    btnsAddToCart = '.btn_add_to_cart';
    constructor(handleClickAddToCart){
        this.dom = document.querySelector('.dates');
        this.handleClickAddToCart = handleClickAddToCart;
    }
    render(d){
        this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');
        this.addListeners();
    }

    renderCard({idp,pname,img,price}){
        return `<div class="col">
        <div class="card product">
        <img src="${ img }" alt="${ pname }">

          <div class="card-body">
            <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${pname}</font></font></p>
            <p class="card-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${price} $</font></font></p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button"  class="btn btn-sm btn-outline-secondary btn_add_to_cart" data-id="${ idp }">In Cart</button>
 
              </div>
            </div>
          </div>
        </div>
      </div>`;
    }
    addListeners(){
        
            [...document.querySelectorAll(this.btnsAddToCart)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToCart));
            console.log("this.handleClickAddToCart")
       //document.querySelector('.btn_add_to_cart').addEventListener('click', this.handleClickAddToCart);
    }
}
