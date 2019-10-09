import React, { Component } from 'react'
import {Form, Input, Button} from 'antd'
import ReactEcharts from "echarts-for-react";
import attendanceForm from "./scss/attendanceForm.module"
export default class Index extends Component {
    render() {
        let {option}=this.props
        return (
            <div>
                <div className={attendanceForm['form']}>
                    <Form>
                        <Form.Item label="日期：">
                            <Input />
                        </Form.Item>
                        <Form.Item label="部门：">

                            <Input />
                        </Form.Item>
                        <Form.Item label="员工：">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" >
                                查询
                                    </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className={attendanceForm['pic']}>
                    <ReactEcharts option={option} />
                </div>
            </div>
        )
    }
}
