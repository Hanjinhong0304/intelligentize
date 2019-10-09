import React, { Component } from 'react'
import statisticsStyle from "./scss/statistics.module.css"
import { Tabs } from "antd"
import isLogin from "@/utils/isLogin"
import AttendanceTab from "@/components/Attendance/table"
import AttendanceForm from "@/components/Attendance/form"
import { getData, header, columns, columnsPerson } from "@/utils/attendanceFn"
import { Attendance } from "@/mock/Attendance/"
const { TabPane } = Tabs;
class AttendanceStatistics extends Component {
    state = {
        option: {
            xAxis: {
                type: 'category',
                data: getData(),
                axisLabel: {
                    interval: 0,
                    rotate: 40
                },
            },
            yAxis: {
                type: 'value',
                max: 100,
                axisLabel: {
                    formatter: `{value}%`
                }
            },
            series: [{
                data: [0, 42, 1, 4, 90, 30, 10, 50, 78, 89, 69, 70, 78, 78, 56],
                type: 'line',
                smooth: true
            }],
            title: {
                text: "考勤正常率统计",
                x: "center",
                y: 10
            }
        },
        paginationProps: {
            showQuickJumper: true,
            showTotal: () => `共${Attendance.list.length}条`,
            pageSize: 4,
        }
    }
    render() {
        let { option, paginationProps } = this.state
        return (
            <div>
                <div className={statisticsStyle['title']}>
                    考勤统计
                </div>
                <div className={statisticsStyle['sel']}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="考勤统计" key="1">
                            <AttendanceForm option={option} />
                        </TabPane>
                        <TabPane tab="按人员统计" key="2">
                            <AttendanceTab columns={columnsPerson} header={header}
                                dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                        <TabPane tab="按日期统计" key="3">
                            <AttendanceTab columns={columns} header={header} dataSource={Attendance.list} paginationProps={paginationProps}></AttendanceTab>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default isLogin(AttendanceStatistics)
