import ViewReset from './viewReset.js';

export default class ControllerReset{
    constructor(Publisher){
        this.view = new ViewReset(this.handleResetDates);
        this.publisher = Publisher;
    }
    handleResetDates =(dates)=>{
       this.publisher.notify('RESET_BY_DATES', dates);
    }
}