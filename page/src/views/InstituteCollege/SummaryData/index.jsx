import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class SummaryData extends Component {
    render() {
        return (
            <div>
                考勤数据汇总 
            </div>
        )
    }
}
export default isLogin(SummaryData)