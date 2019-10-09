import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"
import Tabslist from "../components/tabs"
import integralStyle from "../scss/index.module.css"

// 积分上报
 class IntegralReport extends Component {
    render() {
        return (
            <div className={integralStyle['integral-wrapper']}>
                <Tabslist></Tabslist>
            </div>
        )
    }
}
export default isLogin(IntegralReport)
