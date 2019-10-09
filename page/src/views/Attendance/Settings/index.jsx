import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class AttendanceSettings extends Component {
    render() {
        return (
            <div>
                考勤设置 
            </div>
        )
    }
}

export default isLogin(AttendanceSettings)