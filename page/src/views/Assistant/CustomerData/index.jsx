import React, { Component } from 'react'
import { Tabs } from 'antd';
// 图表
import Countproject from "@/components/Assistants/countproject/index" //当前客户总数
import Addesproject from "@/components/Assistants/addesproject/index" //新增客户数
import Lostproject from "@/components/Assistants/lostproject/index" //丢失客户数
import Personvurvey from "@/components/Assistants/personsurvey/index" //客户满意度
// 客户详细统计
import Tabheader from "@/components/Assistants/custheader/index"   //客户详细统计头部组件
import Tabfrom from "@/components/Assistants/cusfrom/index"        //客户详细统计列表组件

import isLogin from "@/utils/isLogin"
import "../scss/index.moudle.css"

const { TabPane } = Tabs;

 class CustomerDataAnalysis extends Component {
    render() {
        return (
            <div className="Customer">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="客户总统计" key="1">
                        <div className="allproject">

                            {/* 当前客户总统计 */}
                            <Countproject />    

                            {/* 新增客户总统计 */}
                            <Addesproject />

                            {/* 丢失客户数 */}
                            <Lostproject />
                            
                            {/* 客户满意度 */}
                            <Personvurvey />
                        </div>
                    </TabPane>
                    <TabPane tab="客户详细统计" key="2">
                        <Tabheader />   
                        {/* 客户详细信息统计 */}
                        <Tabfrom />
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
   
}

export default isLogin(CustomerDataAnalysis)
