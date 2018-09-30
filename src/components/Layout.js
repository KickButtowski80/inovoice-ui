import React  from 'react';
import Contact from './Contact';
import data from './data';
import './Layout.css';
import './NewContact'
import NewContact from '../components/NewContact';
import {inject} from 'mobx-react';
import {action} from 'mobx';

@inject(['store'])
class Layout extends React.Component { 
        constructor(props) {
            super(props)
        }   
        state ={
            contacts: this.props.store.contacts.all ,
        }    
        
     
        addContact = (name, email) =>{                
           const list = this.state.contacts;    
           const newId =  list[list.lenght-1] + 1
           this.setState({ 
               contacts: this.state.contacts.concat([{id: newId , 
                                                name:  name ,
                                                 email: email}
                                                ])})   
     
        }  
        render() { 
            let { contactsobj } =this.props.store.contacts;
            return(
                <div id="Layout">
                <h1>Number of people in Contacts are {this.props.store.contacts.contactsCount}</h1>
                    <div className="pure-g">                     
                        <NewContact  handleAddContact= {this.addContact} />
                    </div>
                    <div className="pure-g">
                            {this.state.contacts.map(info => 
                            <Contact name={info.name} email={info.email} key={info.id}/>
                            )}
                    </div>
                </div>           
            )
        }
    } 


export default Layout;

