export default class ViewReset{
    btnReset = document.querySelector('.btn-reset');
    constructor(handleResetDates){
        this.btnReset.addEventListener('click', handleResetDates);
    }
}