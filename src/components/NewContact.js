import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject(['store'])
class NewContact  extends Component{
 
   handleAddContact = (e) =>{
          e.preventDefault();
          const name =  e.target.elements.name.value.trim();
          const email =  e.target.elements.email.value.trim();

          this.props.handleAddContact(name, email);
          this.props.store.contacts.addContact(name, email);
          e.target.elements.name.value = '';
          e.target.elements.email.value = '';
      };
  
    render(){
        return(
            <div className="pure-u-12-24">
                <form className="pure-form" onSubmit={this.handleAddContact}>
                    <fieldset>
                        <h1 style={{letterSpacing : 5}}>New Contact</h1>
                        <input placeholder="example@example.com"  name="email"/>
                        <input  type="text" placeholder="your name"  name="name"/>
                        <br />
                        <button  className='pure-button pure-button-primary' >Add</button>                
                    </fieldset>                    
                </form> 
            </div>
        )

    }

   }
 

export default NewContact;