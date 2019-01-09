import React, { Component } from 'react';
import {Layout,Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
// import IconFont from "./IconFont.js"

const {Footer} = Layout;

const FootText={
	"textAlign": "center"
}

class footer extends Component{
	render(){
		return (
		<QueueAnim delay={500}>
	      <Footer key="keyBord">
	      		<div style={FootText}>
		        	©2018 Created by Ant stack <Icon type="heart" />
		        	<a style={{
		        	"textAlign":"right",
		        	"marginLeft":"1%"
		        	}}
		        >联系我们</a>
		        </div>

	      </Footer>
	    </QueueAnim>
		);
	}
}

export default footer;