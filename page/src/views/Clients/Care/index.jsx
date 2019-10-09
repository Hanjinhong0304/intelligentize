import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class ClientCare extends Component {
    render() {
        return (
            <div>
                客户维护 
            </div>
        )
    }
}

export default isLogin(ClientCare)
