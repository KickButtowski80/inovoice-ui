import { observable} from 'mobx';


class Contacts {
    @observable all = [
        {id: 1, name:'Izak T' , email: 'pazpaz22@yahoo.com'},
        {id: 2, name:'Igal T' , email: 'igaligal@gmail.com'},
        {id: 3, name:'April L' , email: 'AprilL@yahoo.com'},
    ];


}
const contacts = new Contacts();
export default contacts;