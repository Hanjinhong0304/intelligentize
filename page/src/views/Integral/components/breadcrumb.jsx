import React, { Component } from 'react'
import integralStyle from "../scss/index.module.css"
import {navLink} from "react-router-dom"
export default class Breadcrumb extends Component {
    state={
        spanList:[
            {
                title:"综合统计"
            },
            {
                title:"考勤数据统计"
            },
            {
                title:"客户数据统计"
            },
            {
                title:"积分上报"
            },
            {
                title:"积分审核"
            }
        ]
    }
    render() {
        let {spanList} = this.state;
        return (
            <div className={integralStyle['integral-header']}>
                {
                    spanList.map((item,index)=><p key={index}>{item.title}&times;</p>)
                }
            </div>
        )
    }
}
