import ModelDates from './modelDates.js';
import ViewDates from './viewDates.js';
export default class ControllerDates{
    constructor(Publisher){
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToCart);
        this.load();
        this.publisher = Publisher;
        this.publisher.subscribe('SORT_BY_DATES', this.handleSortByDates);
        this.publisher.subscribe('FILTER_BY_DATES', this.handleFilterByDates);
        this.publisher.subscribe('SEARCH_BY_DATES', this.handleSearchByDates);
        this.publisher.subscribe('RESET_BY_DATES', this.handleResetByDates);
    }

    load(){
        this.model.load().then(d => {
                this.view.render(d);
            });
    }
    handleSortByDates=flag=> {
        const SortDates = this.model.SortByDates(flag);
        this.view.render(SortDates);
    }
    handleFilterByDates = data => {
        const filteredDates = this.model.filterByDates(data);
        this.view.render(filteredDates);
    }
    handleSearchByDates= dates =>{
        const searchDates = this.model.searchByDates(dates);
        this.view.render(searchDates);
    }
    handleResetByDates= () =>{
        const resetDates = this.model.resetByDates();
        this.view.render(resetDates);
    }
    handleClickAddToCart = data => {
        console.log(data)
        const date = this.getDateByEvent(data);
        this.publisher.notify('ADD_TO_CART', date);
    }
    getDateByEvent(data){
        console.log(data)
        const id = data.target.dataset.id;
        return this.model.getDateById(id);
    }
}

