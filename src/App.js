import React, { Component } from 'react';
import ToDoHeader from'./layouts/header';//头部
import ToDoFooter from './layouts/footer';//
import ArticleList from './Article/articleList';
import RouterIndex from'./Route/index';//引入路由管理js


class App extends Component {
 
  render() {
    return (
    	<div>
	    	<div>
		        <ToDoHeader></ToDoHeader>
	      </div>
	        	<RouterIndex />
        <div>

        </div>
            <ToDoFooter />
        </div>
    );
  }
}

export default App;
