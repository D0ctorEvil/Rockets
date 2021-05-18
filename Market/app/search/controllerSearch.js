import ViewSearch from './viewSearch.js';

export default class ControllerSearch{
    constructor(Publisher){
        this.view = new ViewSearch(this.handleSearchDates);
        this.publisher = Publisher;
    }
    handleSearchDates =()=>{
       this.publisher.notify('SEARCH_BY_DATES', this.view.getDates());
    }
}