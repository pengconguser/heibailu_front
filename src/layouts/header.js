import React, { Component } from 'react';
import { Menu, Icon,Avatar } from 'antd';
import IconFont from "./IconFont.js";
import {browserHistory} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MenuItem = {
     height:"64px"
}

const Logo={
    "marginRight": "20px"
}

const userItem={
    float:"right",
    "marginRight": "20px"
}

class header extends Component{
   state = {
    current: 'mail',
   }

   constructor(props){
      super(props);
      this.state={
          current: 'mail',
          categoryList: [],
      }
   }
 
  handleClick = (e) => {
    switch(e.key){
       case "login" :
          // this.browserHistory.push("/login");
          console.log(this.props.history);
          break;
       default:
          console.log("没有跳转信息");
          break;
    }
  }

  render(){
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style ={MenuItem}
      >
        <Menu.Item 
          key="mail"
          style ={Logo}
        >
          <Icon type="ant-design" />黑白路
        </Menu.Item>


        <Menu.Item key="12" >
          <IconFont type="icon-react" />react随笔
        </Menu.Item>
        <Menu.Item key="1">
          <IconFont type="icon-laravel" />laravel踩坑日记
        </Menu.Item>
        <Menu.Item key="app3">
          <IconFont type="icon-php" />php
        </Menu.Item>
        <Menu.Item key="13">
          <IconFont type="icon-java" />java
        </Menu.Item>
        <Menu.Item key="5">
          <IconFont type="icon-mysql" />mysql
        </Menu.Item>
        <Menu.Item key="4">
          <IconFont type="icon-redis" />redis
        </Menu.Item>
        <Menu.Item key="6">
          <IconFont type="icon-linux" />linux
        </Menu.Item>

        {
        this.props.login?
        <SubMenu style={userItem} title={<span className="submenu-title-wrapper"><Avatar icon="user" /></span>}>
          <MenuItemGroup title={<span className="submenu-title-wrapper"><Icon type="user" />个人中心</span>}>
            <Menu.Item key="setting:1"><Icon type="setting"></Icon>设置</Menu.Item>
            <Menu.Item key="setting:2"><Icon type="edit"></Icon>修改个人资料</Menu.Item>
          </MenuItemGroup>
          <Menu.Item key="setting:3"><Icon type="book" />五子棋小游戏</Menu.Item>
          <Menu.Item key="setting:4"><Icon type="logout"></Icon>退出登录</Menu.Item>
        </SubMenu>
        :
        <SubMenu style={userItem} title={<span className="submenu-title-wrapper"><Icon type="build" />登录/注册</span>}>
          <Menu.Item key="setting:5"><Icon type="book" />注册</Menu.Item>
          <Menu.Item key="login"><Icon type="login"></Icon>登录</Menu.Item>
        </SubMenu>
        }

      </Menu>
    );
  }


}

export default header;