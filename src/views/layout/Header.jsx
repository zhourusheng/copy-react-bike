import React from 'react'
// import { connect } from 'react-redux'
import { Row, Col } from "antd"
import './Header.scss'
import Util from '../../utils/utils'

class Header extends React.Component {
  state = {

  }

  componentDidMount() {
    this.setState({
      userName: 'admin'
    })
    this.getCurrentTime()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  getCurrentTime = () => {
    this.timer = setInterval(() => {
      const sysTime = Util.formatDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
  }

  render() {
    const { userName, sysTime, dayPictureUrl, weather } = this.state
    const { menuName } = this.props
    return (
      <div className="header">
        <Row className="header-top">
          <Col>
            <span>欢迎, {userName}</span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            {menuName || '首页'}
          </Col>
          <Col span={20} className="weather">
            <span className="date">{sysTime}</span>
            <span className="weather-img">
              <img src={dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">
              {weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header