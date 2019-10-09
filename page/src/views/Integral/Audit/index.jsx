import React, { Component } from 'react'
import integralStyle from "../scss/index.module.css"
import isLogin from "@/utils/isLogin"
import Tabslist from "../components/tabs"

//积分审核

 class IntegralAudit extends Component {
    render() {
        return (
            <div className={integralStyle['integral-wrapper']}>
                <Tabslist></Tabslist>
            </div>
        )
    }
    
}
export default isLogin(IntegralAudit)
