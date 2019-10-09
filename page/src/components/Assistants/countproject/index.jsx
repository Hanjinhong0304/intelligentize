import React, { Component } from 'react'
import AssistantsStyle from "../scss/components.module.css"
// 当前客户总数
export default class Index extends Component {
    render() {
        return (
            <div className={AssistantsStyle["content_box"]}>
                <div  className={AssistantsStyle["content_box_header"]}>
                    <p>考勤分析</p>
                    <div>
                        <span>今日数据</span>
                    </div>
                </div>
                <div  className={AssistantsStyle["content_box_cont"]}>
                    <h2>98<span>个</span></h2>
                    <p>注:包括我和我的下属所有客户</p>
                </div>
            </div>
        )
    }
}
