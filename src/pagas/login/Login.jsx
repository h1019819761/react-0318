import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import messages from './image/logo.png'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './Login.less'
export default class App extends Component {
    handleSubmit = e => {
      e.preventDefault();
      alert('登录成功！')
    };
  render() {
   
    return (
      <div className='login'>
        <div className="login-header">
          <img src={messages} alt="11" />
          <h1>后台管理项目</h1>
        </div>
        <div className="login-content">
          <h1>注册</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
             
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
            </Form.Item>
            <Form.Item>
              
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                提交登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}