export default class ViewFilter{
    btnDateFilter = document.querySelector('.btn_date_filter');
    inputDateStart = document.querySelector('.inp_date_start');
    inputDateFinish = document.querySelector('.inp_date_finish');
    constructor(handleFilterDates){
       const filters = document.querySelectorAll('a[data-filter]');
        for (let filter of filters) {
            filter.addEventListener('click', handleFilterDates);
        }
    }
}