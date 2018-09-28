import React  from 'react';
import Contact from './Contact';
import data from './data';
import './Layout.css';
import './NewContact'
import NewContact from '../components/NewContact';
import {observer} from 'mobx-react';

class Layout extends React.Component { 
        constructor(props) {
            super(props)
        }   
        state ={
            contacts: data ,
        }    
    
        addContact = (name, email) =>{      
          
           const list = this.state.contacts;    
           const newId =  1 
           this.setState({ 
               contacts: this.state.contacts.concat([{id: newId , 
                                                name:  name ,
                                                 email: email}
                                                ])})   
     
        }  
        render() { 
            console.log(this.props.toString())
            return(
                <div id="Layout">
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


export default observer(Layout);

