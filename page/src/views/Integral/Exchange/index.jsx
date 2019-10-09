import React, { Component } from 'react'
import integralStyle from "../scss/index.module.css"
import isLogin from "@/utils/isLogin"
import Tabslist from "../components/tabs"
// 积分兑换 

 class IntegralExchange extends Component {
    
    render() {
        return (
            <div className={integralStyle['integral-wrapper']}>
                <Tabslist></Tabslist>
            </div>
        )
    }
   
}
export default isLogin(IntegralExchange)
