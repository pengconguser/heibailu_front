import React, { Component ,Fragment} from 'react';
import { List, Icon,Layout,Input,Card} from 'antd';
import ToDoHeader from'../layouts/header';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

const container={
	 "marginRight": "20%",
	 "marginLeft": "20%",
	 "marginTop": "10px",
	 "marginBottom":"10px"
}

const titleText={
	 "textAlign":"center",
}

const titleAction={
	"textAlign":"center"
}


class show extends Component{ 
	constructor(props){
		super(props);
		this.state={
			"article":null
		}
	}

	componentDidMount(){
	  fetch(process.local.api_url+"/article/"+this.props.match.params.id,{
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
		         article:data.data,
		       })
	     });   
	}

	render(){
		let article=this.state.article;
		return (
			article!=null?
			<Fragment>
			  <QueueAnim delay={300}>
			    <Card
			      title={
			      	  <div>
			      	  	 <div style={titleText}>
			      	  		{article.title}
			      	  	 </div>
			      	  	 <div style={titleAction}>
			    		   <Icon type="dashboard" />{article.created_at}
			    		 </div>
			      	  </div>
			      }
			      extra={
			      	<div>
			      	  <Icon type="setting" /> 
			      	</div>
			      }
			      style={container}
			      key={article.id}
			    >
			    <div dangerouslySetInnerHTML={{__html: article.content}} />
			    </Card>
			  </QueueAnim>
			</Fragment>
			:null
		);
	}
}

// show.propTypes={

// }

export default show;
