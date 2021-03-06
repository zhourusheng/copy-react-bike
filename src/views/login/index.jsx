import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import './index.scss'

class LoginForm extends React.Component {
  handleSubmit = e =>{
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(!err) {
        console.log('Received values of form: ', values)
        this.props.history.push('/home')
      }
    })
  }

  checkUserName = (rule, value, callback) => {
    if (!value) {
      callback('请输入用户名')
    } else {
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ validator: this.checkUserName }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
    )
  }
}

LoginForm = Form.create({ name: 'normal_login' })(LoginForm)

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <LoginForm {...this.props} />
      </div>
    )
  }
}

export default withRouter(Login)
