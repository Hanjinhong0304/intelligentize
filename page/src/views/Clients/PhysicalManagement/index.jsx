import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

class PhysicalManagement extends Component {
    render() {
        return (
            <div>
                体能老师管理 
            </div>
        )
    }
}

export default  isLogin(PhysicalManagement)