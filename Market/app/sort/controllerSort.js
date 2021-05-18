import ViewSort from './viewSort.js';

export default class ControllerSort{
    constructor(publisher){
        this.view = new ViewSort(this.handleSortDates);
        this.publisher = publisher;
    }
    handleSortDates =(data)=>{
        console.log(data);
       this.publisher.notify('SORT_BY_DATES', data);
    }
}