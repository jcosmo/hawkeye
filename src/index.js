import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import RootStore from './stores/RootStore';
import App from './components/App';
import './style/index.css';

ReactDOM.render(
    <Router>
      <Provider rootStore={new RootStore()}>
        <App/>
      </Provider>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
