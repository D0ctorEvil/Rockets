export default class ModelDates{
    #Url = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
    #data = [];
    #products = [];
    sortDates = [];
    constructor(){
    }

    load(){
        return fetch(this.#Url)
            .then(r => r.json())
            .then(d => {
                this.#data = d;
                let idp = 0;
                let pname = "";
                let manufacture = "";
                let category = "";
                let ingridients = "";
                let amount = 0;
                let units = "";
                let price = "";
                let img = "";
                for (var key in this.#data.feed.entry) {
                     if(this.#data.feed.entry[key].title.$t.indexOf('A') != -1 )
                     idp = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('B') != -1 )
                    pname = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('C') != -1 )
                    manufacture = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('D') != -1 )
                    category = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('E') != -1 )
                    ingridients = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('F') != -1 )
                    amount = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('G') != -1 )
                    units = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('H') != -1 )
                    price = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('I') != -1 )
                    img = this.#data.feed.entry[key].content.$t;
                    this.#products[idp] = {idp : idp, pname : pname, manufacture : manufacture, category : category, ingridients : ingridients, amount : amount, units : units, price : price, img : img}
            }
            console.log(this.#products)
            return this.#products = this.#products.filter((el) =>  el != null);
        });
    }
    copy(d){
        return JSON.parse(JSON.stringify(d));
    }
    SortByDates(data){
        console.log(data.target.dataset.sort);
        if(data.target.dataset.sort=="1") {        
            this.sortDates = this.copy(this.#products).sort((a,b) => {
            return a.price-b.price;
        });
        console.log(this.#products)            
                
    
    }
        if(data.target.dataset.sort=="0"){         
            this.sortDates = this.copy(this.#products).sort((a,b) => {
            return b.price-a.price;
        });
        console.log(this.#products)
    }
    if(data.target.dataset.sort=="-1"){         
        this.sortDates = this.copy(this.#products);
    }
    console.log(this.sortDates);
        return this.sortDates;
    }
    filterByDates(dates){
        if(dates.target.dataset.filter==="All") return this.copy(this.#products);
        else{
        return this.copy(this.#products).filter(el =>el.category === dates.target.dataset.filter)
        }
    }
    searchByDates(data){
        if(data!==""){
            console.log(data)
         return this.copy(this.#products).filter(el =>el.pname.includes(data)||el.manufacture.includes(data))
        }
        else return [];
    }
    resetByDates(){
        return this.copy(this.#products);
    }
    getDateById(find_id){
        return this.copy(this.#products.find(({ idp }) => idp === find_id));
    }
}