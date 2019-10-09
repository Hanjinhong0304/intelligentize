import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from "antd"
import loginStyle from "./scss/login.module.css"
import { getUserInfo } from "@/utils/userInfo"
import {observer,inject} from "mobx-react";
@inject("user")
@observer
class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        let {password,username} = this.state;
        return (
            <div className={loginStyle['login-box']}>
                <Form layout="vertical" className={loginStyle['login']} >
                    <Form.Item className={loginStyle['item']}>
                        <p className="text">用户名：</p>
                        <div className={loginStyle['login-ipt']}>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="输入用户名"
                                value={username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                            />
                        </div>  
                        
                    </Form.Item>
                    <Form.Item >
                        <p className="text">密码</p>
                        <div className={loginStyle['login-ipt']}>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="输入密码"
                                value={password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => this.handleSubmit()}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    // 点击登录按钮
    async handleSubmit() {
        let { password, username } = this.state;
        let { history: { replace } } = this.props;
        if (password === "" && username === "") {
            message.error("请输入用户名/密码")
            return;
        }
       
      await this.props.user.userInfo_action({userName:username,userPwd:password})
       let userInfo = getUserInfo();
      if(userInfo){
        message.success("登录成功")
        replace("/main/home")
      }
  
    }
}

export default Login;
