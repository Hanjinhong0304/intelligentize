import React, { Component } from 'react'
import { Tabs, Icon} from 'antd';
import "../scss/index.moudle.css";
import Tablist from "@/components/Assistants/Tablist/index"    // 人员列表组件
import Tabfrom2 from "@/components/Assistants/tabfrom2"        // 人员表格组件
import Tabfrom3 from "@/components/Assistants/tabfrom3"        // 日期人员组件
import Tabheader from "@/components/Assistants/addheader"      // 人员头部组件
import Canvans from "@/components/Assistants/canvans"
import isLogin from "@/utils/isLogin"
const { TabPane } = Tabs;
class SummaryData extends Component {

    render() {
       
        return (
            <div className="summarydata">
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={<span><Icon type="apple" />考勤总统计</span>}key="1" >
                        <div className="one">
                            <div className="AttendanceDetails">
                                <div className="attdheader">
                                    <Tabheader />
                                </div>
                                <div className="attds">
                                    <div className="attd1">
                                        1
                                    </div>
                                    <div className="attd2">
                                        2
                                    </div>
                                </div>
                                <div className="AttendanceStatistics">
                                    <Canvans />
                                </div>
                            </div>
                            
                        </div>
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="android" />按人员统计</span>}key="2">

                        <Tablist />   
                        {/* 按人员总计列表组件 */}
                        <Tabfrom2 />
                        {/* 人员表格组件 */}
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="android" />按日期统计</span>}key="3">
                        <Tablist />
                        <Tabfrom3 />
                    </TabPane>
                </Tabs>
            </div>
        )
    }

}

export default isLogin(SummaryData)
