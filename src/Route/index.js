import React ,{ Component } from 'react';
import {Switch,Route,Redirect,BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';

//业务组件
import ArticleShow from '../Article/show';
import index from '../layouts/index';
import login from '../User/login';


class RouterIndex extends Component{
	render(){
		return(
		<Router>
			<Switch>
				{
				// <Route path='/' exact render={()=>(//exact是用于精准匹配，这里是定义了路由重定向，意思是当我们进入"/"时会重定向到“/index”
				// 	<Redirect to='/index'/>
				// )}/>
				}

				<Route path='/' exact component={index}/>
				{//注意这里的:id是为url设置参数 我们可以在detail组件下通过this.props.match.params.id获得
				}
				<Route path='/article/:id' exact component={ArticleShow}/>
				<Route paht='/login' exact component={login}  />
			</Switch>
		</Router>
		);
	}
}

export default RouterIndex