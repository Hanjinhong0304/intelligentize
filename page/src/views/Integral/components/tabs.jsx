import React, { Component } from 'react'
import integralStyle from "../scss/index.module.css"

import Tabaudit from "./tabs/tabs.audit.jsx" //积分审核 
import Tabexchange from "./tabs/tabs.exchange.jsx" //积分兑换
import Tabreport from "./tabs/tabs.report.jsx" //积分上报
import Tabstatistics from "./tabs/tabs.statistics.jsx" //积分统计

import {Tabs, Icon } from "antd"
const { TabPane } = Tabs;

export default class tabsList extends Component {
    render() {
        return (
            <div className={integralStyle['integral-wrapper']}>
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={<span><Icon type="apple" />积分审核</span>}key="1" >
                        <Tabaudit/>
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="android" />积分统计</span>}key="2">
                        <Tabstatistics/>
                        
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="android" />积分兑换</span>}key="3">
                        <Tabexchange/>
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="android" />积分上报</span>}key="4">
                        <Tabreport/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
