import React, { Component ,Fragment} from 'react';
import { List, Icon,Layout,Input,Card} from 'antd';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const { Content } = Layout;

const Search =Input.Search;

const container={
	 "margin-right": "20%",
	 "margin-left": "20%"
}

class articleList extends Component{
	constructor(props){
		super(props);
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
			          	<a><Icon type="copy" />category</a>, 
			          	<a><Icon type="usergroup-add" />user</a>,
			          	<div><Icon type="dashboard" />15小时前</div>
			          	]} key={article.id}>
			              <Card title={article.title}>Card content</Card>
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