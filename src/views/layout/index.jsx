import React from 'react'
import { Row, Col } from 'antd';

class Layout extends React.Component{
  render(){
    return (
      <Row>
        <Col span={4}>
          left-menu
        </Col>
        <Col span={20}>
          {this.props.children}
        </Col>
      </Row>
    )
  }
}

export default Layout