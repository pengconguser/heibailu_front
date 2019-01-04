import React, { Component } from 'react';
import 'antd/dist/antd.css';
import ToDoHeader from'./layouts/header';
import ArticleList from './Article/articleList';
// import "whatwg-fetch";


class App extends Component {
  constructor(props){
  	 super(props)
  	 this.state={
  	 	articles :[],
  	 	page : 1,
  	 	total: 0
  	 }
  }

  componentDidMount(){
	fetch(process.local.api_url+"/article",{
	      method:'GET',
	      headers:{
	        'Content-Type':'application/json;charset=UTF-8'
	      },
	      mode:'cors',
	      cache:'default'
	    })
	     .then(res =>res.json())
	     .then((data) => {
		       this.setState({
		         articles:data.data,
		         page:data.Page,
		         total:data.total
		       })
	     });   
   }
 
  render() {
    return (
    	<div>
	    	<div>
		        <ToDoHeader></ToDoHeader>
	        </div>
	        <div>
	        	<ArticleList 
	        	articles={this.state.articles}
	        	page   ={this.state.page}
	        	total  ={this.state.total}
	        	></ArticleList>
	        </div>
        </div>
    );
  }
}

export default App;
