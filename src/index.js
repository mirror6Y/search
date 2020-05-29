import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Index from './component/index'
// import ReactEcharts from './service/data';



ReactDOM.render(
  <Index />,
// < ReactEcharts />,
  document.getElementById('root')
);




serviceWorker.unregister();
