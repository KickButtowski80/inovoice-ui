import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';
import stores from './stores'
import registerServiceWorker from './registerServiceWorker';


<Provider contacts={stores.contacts}>
     
</Provider>
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
