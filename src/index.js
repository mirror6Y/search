import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Search from './service/search'
import Index from './component/index'

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);


serviceWorker.unregister();
