import React, { Component } from 'react'
import detailStyle from "./scss/detail.module.css"
import {Tabs} from "antd"
import isLogin from "@/utils/isLogin"
import { Attendance } from "@/mock/Attendance/"
import AttendanceTab from "@/components/Attendance/table"
import { columns, detailcolumns } from "@/utils/attendanceFn"
const { TabPane } = Tabs;
class AttendanceDetail extends Component {
    state = {
        paginationProps: {
            showQuickJumper: true,
            showTotal: () => `共${Attendance.list.length}条`,
            pageSize: 4,
        }
    }
    render() {
        let { paginationProps } = this.state
        return (
            <div>
                <div className={detailStyle['title']}>
                    考勤明细
                </div>
                <div className={detailStyle['sel']}>
                <Tabs defaultActiveKey="1">
                        <TabPane tab="考勤明细统计" key="1">
                            <AttendanceTab columns={columns} 
                                dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                        <TabPane tab="打卡清单" key="2">
                            <AttendanceTab columns={detailcolumns}  dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                        <TabPane tab="请假清单" key="3">
                            <AttendanceTab columns={columns}  dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                        <TabPane tab="出差清单" key="4">
                            <AttendanceTab columns={columns}  dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                        <TabPane tab="外出清单" key="5">
                            <AttendanceTab columns={columns}  dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                        <TabPane tab="加班清单" key="6">
                            <AttendanceTab columns={columns}  dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default isLogin(AttendanceDetail)