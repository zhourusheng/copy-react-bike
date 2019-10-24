import React from 'react'
import { Row, Col } from 'antd';
import NavLeft from './NavLeft'
import Header from './Header'

import '../../style/common.scss'

class Layout extends React.Component{
  render(){
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row className="content">
            {this.props.children}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Layout