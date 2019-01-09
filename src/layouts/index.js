import React, { Component } from 'react';

import ToDoHeader from'./header';
import ArticleList from '../Article/articleList';

class Index extends Component {
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
	        	<ArticleList 
	        	articles={this.state.articles}
	        	page   ={this.state.page}
	        	total  ={this.state.total}
	        	/>
        </div>
    );
  }
}

export default Index;
