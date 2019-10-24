import React from 'react'
import { Menu, Icon, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeMenu } from '../../redux/action'

import MenuConfig from '../../config/menuConfig'

import './navLeft.scss'

const { SubMenu } = Menu

class NavLeft extends React.Component{
  state = {
    currentKey: ''
  }

  componentDidMount() {

  }

  handleHomeClick = () => {

  }

  handleMenuItemClick = () => {

  }

  renderMenu = (list) => {
    return list.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
    })
  }

  render(){
    return (
      <div className="nav-left">
        <NavLink to="/home" onClick={this.handleHomeClick}>
          <div className="logo">
            <img src="../../../logo.svg" alt=""/>
            <h1>React MS</h1>
          </div>
        </NavLink>
        <Menu
          theme="dark"
          mode="inline"
          onClick={this.handleMenuItemClick}
        >
          {this.renderMenu(MenuConfig)}
        </Menu>
      </div>
    )
  }
}

export default NavLeft