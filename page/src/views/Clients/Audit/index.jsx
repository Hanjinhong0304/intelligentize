import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class ClientAudit extends Component {
    render() {
        return (
            <div>
                客户审核 
            </div>
        )
    }
}

export default isLogin(ClientAudit)