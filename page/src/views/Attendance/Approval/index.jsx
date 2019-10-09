import React, { Component } from 'react'
import approvalStyle from "./scss/approval.module.css";
import { Table, Tabs, ConfigProvider } from 'antd';
import AttendanceCom from "@/components/Attendance/nav"
import { approvalcolumns } from "@/utils/attendanceFn"
import isLogin from "@/utils/isLogin";
import zhCN from 'antd/es/locale/zh_CN';
const { TabPane } = Tabs;
class AttendanceApproval extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            {
                title: '待审批',
                closable: true,
                key: "0",
            },
            {
                title: '已审批',
                closable: true,
                key: "1",
            },
            {
                title: '全部申请',
                closable: true,
                key: "2",
            }
        ]
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <div>
                    <div className={approvalStyle['top']}>
                        <Tabs
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                            animated
                        >
                            {this.state.panes.map((pane) => (
                                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                    <div className={approvalStyle['sel']}>
                                        <span>批量审批</span>
                                        <span className={approvalStyle['spanone']}>审批日期:</span>
                                        <AttendanceCom></AttendanceCom>
                                    </div>
                                    <div className={approvalStyle['table']}>
                                        <Table columns={approvalcolumns} bordered></Table>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </ConfigProvider>

        )
    }
}

export default isLogin(AttendanceApproval)