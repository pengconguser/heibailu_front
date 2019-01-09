import React, { Component ,Fragment} from 'react';
import { List, Icon,Layout,Input,Card} from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

const { Content } = Layout;

const Search =Input.Search;

const container={
	 "marginRight": "20%",
	 "marginLeft": "20%"
}

class articleList extends Component{
	constructor(props){
		super(props);
	}

	getDescriptionContent(article){
		 if(article.description==null){
		 	let result=article.content.replace(/<\/?.+?>/g,"");
			let replaceContent=result.replace(/ /g,"");
			replaceContent=replaceContent.replace("&nbsp","");
		 	article.description=replaceContent.substring(0,100);
		 }

		 return article.description;
	}

    render(){
      let articles=this.props.articles;
      let page   =this.props.page;
      let total  =this.props.total;
      console.log(articles);
      return (
      	articles.length>0?
      	<Fragment>
      	  	<Content style={container}>
		    <h3 style={{ marginBottom: 16 }} ><Icon type="highlight"></Icon>文章列表</h3>
		    <List
		      header={
				  <Search
			      	 placeholder="input search text"
			     	 enterButton="搜索"
			     	 size="large"
			    	 onSearch={value => console.log(value)}
				    />
		      }

		      itemLayout="vertical"
		      bordered
		      dataSource={articles}
			  renderItem={
		 		  article => (
			 		<QueueAnim delay={300} className="queue-simple">
			          <List.Item actions={[
			          	<a ><Icon type="copy" />{article.category.name}</a>,
			          	<a ><Icon type="usergroup-add" />{article.user.name}</a>,
			          	<div>
				          	<Icon type="dashboard" />{article.created_at}
			          	</div>
			          	]} key={article.id}>
			              <Card title={article.title}>{this.getDescriptionContent(article)}</Card>
			          </List.Item>
			      	</QueueAnim>
			      )
		  	}
		    >
		    </List>
		  </Content>
		
		</Fragment>
		:null	
      );
    }
}

articleList.propTypes={
	 articles:PropTypes.array.isRequired,
	 page   :PropTypes.number,
	 total  :PropTypes.number
}

export default articleList;