export default class ViewSort{
    btnDateSortDef = document.querySelector('.Sort_btn_def');
    btnDateSortUp = document.querySelector('.Sort_btn_up');
    btnDateSortDown = document.querySelector('.Sort_btn_down');

    constructor(handleSortDates){
        this.btnDateSortDef.addEventListener('click', handleSortDates);
        this.btnDateSortUp.addEventListener('click', handleSortDates);
        this.btnDateSortDown.addEventListener('click', handleSortDates);
    }
}