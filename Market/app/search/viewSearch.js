export default class ViewSearch{
    btnSearch = document.querySelector('.btn-search');
    inputSearch = document.querySelector('.i-search');
    constructor(handleSearchDates){
        this.btnSearch.addEventListener('click', handleSearchDates);

    }
    getDates(){
        return  this.inputSearch.value;
    }
}