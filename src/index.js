import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import env from './env';


//读取env配置进入全局变量中
process.local=env;

ReactDOM.render(
	<BrowserRouter>
	   <Route path="/" component={App}></Route>
	</BrowserRouter>
	, document.getElementById('root')
);

registerServiceWorker();
