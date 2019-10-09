import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class CustomerData extends Component {
    render() {
        return (
            <div>
                客户数据分析 
            </div>
        )
    }
}
export default isLogin(CustomerData)
