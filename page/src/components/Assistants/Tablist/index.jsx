import React, { Component } from 'react'
import { Button, Select, Checkbox } from 'antd';
const { Option } = Select;
export default class Index extends Component {
    state = {
        list: [
            {
                data: "今日"
            }, {
                data: "昨日"
            }, {
                data: "本周"
            }, {
                data: "本月"
            }, {
                data: "最近7日"
            }, {
                data: "最近30日"
            }
        ],
        list1: [
            {
                data: "何智博"
            }, {
                data: "申丹丹"
            }, {
                data: "赵张宝"
            }, {
                data: "李伟泽"
            }, {
                data: "韩金洪"
            }
        ],
        isopen: true,
        opentitle: "展开查询"
    }
    render() {
        let { list, isopen, opentitle, list1 } = this.state;
        return (
            <div className="tablist">
                <div className="tabheader">
                    <Button>导出</Button>
                    <ul>
                        {
                            list && list.map((item, index) => {
                                return <li key={index}>{item.data}</li>
                            })
                        }
                    </ul>
                    <Button >{opentitle}</Button>
                </div>
                {
                    isopen ? <div className="tabselect">
                        <div className="tableft">
                            <div>
                                <div>
                                    <span>部门: </span>
                                    <Select defaultValue="今日" style={{ width: 200 }} onChange={() => { }}>
                                        {
                                            list && list.map((item, index) => {
                                                return <Option key={index} value={item.data}>{item.data}</Option >
                                            })
                                        }
                                    </Select>
                                </div>
                                <div>
                                    <span>职务: </span>
                                    <Select defaultValue="教师" style={{ width: 200 }} onChange={() => { }}>
                                        <Option value="教师">教师</Option>
                                        <Option value="管理员">管理员</Option>
                                    </Select>
                                </div>
                                <div>
                                    <Checkbox onChange={() => { }}>包括已停用该职工</Checkbox>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>员工: </span>
                                    <Select defaultValue="何智博" style={{ width: 200 }} onChange={() => { }}>
                                        {
                                            list1 && list1.map((item, index) => {
                                                return <Option key={index} value={item.data}>{item.data}</Option >
                                            })
                                        }
                                    </Select>
                                </div>
                                <div>
                                    <span>考勤组: </span>
                                    <Select defaultValue="一组" style={{ width: 200 }} onChange={() => { }}>
                                        <Option value="教师">一组</Option>
                                        <Option value="管理员">二组</Option>
                                    </Select>
                                </div>
                                <div>
                                    <Checkbox onChange={() => { }}>含待审核(外出,加班)</Checkbox>
                                </div>
                            </div>
                        </div>
                        <div className="tabright">
                            <Button type="primary">查询</Button>
                            <Button>清除</Button>
                        </div>
                    </div> : null
                }

            </div>
        )
    }

    handleopen() {

    }
}
