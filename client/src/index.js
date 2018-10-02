import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const element = <h1>Hello, world</h1>;
ReactDOM.render((<App />), document.getElementById('root'));
registerServiceWorker();

