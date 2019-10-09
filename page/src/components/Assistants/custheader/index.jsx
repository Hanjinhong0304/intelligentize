import React, { Component } from 'react'
import { Button, Select } from 'antd';
const { Option } = Select;
export default class Index extends Component {
    state = {
        list: [
            {
                data: "今日新增"
            }, {
                data: "本周新增"
            }, {
                data: "本月新增"
            }, {
                data: "丢失客户"
            }, {
                data: "已删除客户"
            }
        ],
        list1: [
            {
                data: "是"
            }, {
                data: "否"
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
                                    <span>客户类型: </span>
                                    <Select defaultValue="今日" style={{ width: 200 }} onChange={() => { }}>
                                        {
                                            list && list.map((item, index) => {
                                                return <Option key={index} value={item.data}>{item.data}</Option >
                                            })
                                        }
                                    </Select>
                                </div>
                                <div>
                                    <span>营销区域: </span>
                                    <Select defaultValue="" style={{ width: 200 }} onChange={() => { }}>
                                        <Option value="商城">商城</Option>
                                        <Option value="影城">影城</Option>
                                    </Select>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <span>是否标注: </span>
                                    <Select defaultValue="" style={{ width: 200 }} onChange={() => { }}>
                                        {
                                            list1 && list1.map((item, index) => {
                                                return <Option key={index} value={item.data}>{item.data}</Option >
                                            })
                                        }
                                    </Select>
                                </div>
                                <div>
                                    <span>时间选择: </span>
                                    <Select defaultValue="2016-10-01~2016-10-02" style={{ width: 200 }} onChange={() => { }}>
                                        <Option value="2016-10-01">2016-10-01</Option>
                                        <Option value="2016-10-02">2016-10-02</Option>
                                    </Select>
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
    handleChange() {

    }
    handleopen() {

    }
}

