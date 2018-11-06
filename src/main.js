
import React from 'react'
import {render} from 'react-dom';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import 'antd/dist/antd.css'
import './scss/index.css'
if(process.env.NODE_ENV==='development'){
    console.log("开发模式： "+process.env.NODE_ENV);
}else{
    console.log("生产模式： "+process.env.NODE_ENV);
}

let root =document.getElementById('root');
//默认/的路由必须加exact，否则路由跳转不了
render(
<Provider store={store}>
<Router>
<App/> 
</Router>
</Provider>,root);
// console.log(111)
{/* <Provider store= {store}> <Router> <App/> </Router> */}


