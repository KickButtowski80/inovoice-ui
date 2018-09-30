import { action,  computed, observable} from 'mobx';


class Contacts {
    @observable all = [
        {id: 1, name:'Izak T' , email: 'pazpaz22@yahoo.com'},
        {id: 2, name:'Igal T' , email: 'igaligal@gmail.com'},
        {id: 3, name:'April L' , email: 'AprilL@yahoo.com'},
    ];
    
    @action 
    addContact = (contact) => {
       this.all.push(contact);
    }
    @computed 
    get contactsCount(){
        return this.all.length;
    }

}
const contacts = new Contacts();
export default contacts;