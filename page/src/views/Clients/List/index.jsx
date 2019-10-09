import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class ClientList extends Component {
    render() {
        return (
            <div>
                客户列表 
            </div>
        )
    }
}

export default isLogin(ClientList)