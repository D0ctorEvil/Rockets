import ViewFilter from './viewFilter.js';

export default class ControllerFilter{
    constructor(Publisher){
        this.view = new ViewFilter(this.handleFilterDates);
        this.publisher = Publisher;


    }
    handleFilterDates = (data) => {
        console.log(data);
         this.publisher.notify('FILTER_BY_DATES', data);
    }
}