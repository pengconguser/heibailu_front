import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import env from './env';


//读取env配置进入全局变量中
process.local=env;

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
