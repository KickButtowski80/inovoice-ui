import {decorate , observable} from 'mobx';


class Contacts {
    all = [
        {id: 1, name:'Izak T' , email: 'pazpaz22@yahoo.com'},
        {id: 2, name:'Igal T' , email: 'igaligal@gmail.com'},
        {id: 3, name:'April L' , email: 'AprilL@yahoo.com'},
    ];


}

    
decorate(Contacts, {
    all: observable 
  }); 


  var store = new Contacts();
export default store;