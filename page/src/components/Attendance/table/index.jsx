import React, { Component } from 'react'
import attendanceTab from "./scss/attendanceTab.module";
import AttendanceCom from "@/components/Attendance/nav";
import { Checkbox, Table ,Button} from "antd"
export default class Index extends Component {
    state = {

    }
    render() {
        let { columns, header, dataSource, paginationProps } = this.props;
        return (
            <div>
                <div className={attendanceTab['selone']}>
                    <span>导出</span>
                    <Checkbox>导出表格包含打卡位置</Checkbox>
                    <AttendanceCom></AttendanceCom>
                    <Button>展开查询</Button>
                </div>
                <div className={attendanceTab['tab']}>
                    {
                        header && <div className={attendanceTab['header']}>
                            <span>详细显示项：</span>
                            {
                                header && header.map((item, index) => {
                                    return <Checkbox key={index}>{item.name}</Checkbox>
                                })
                            }
                        </div>
                    }
                    <div className={attendanceTab['table']}>
                        <Table columns={columns} bordered dataSource={dataSource} pagination={paginationProps}></Table>
                    </div>
                </div>
            </div>
        )
    }
}
