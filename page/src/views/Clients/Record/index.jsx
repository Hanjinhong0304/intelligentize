import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class VisitRecord extends Component {
    render() {
        return (
            <div>
                拜访记录
            </div>
        )
    }
}
export default isLogin(VisitRecord)
