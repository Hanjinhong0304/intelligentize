import React, { Component } from 'react'
import {Input, Button} from "antd"
import managementStyle from "../scss/index.module.css"
 class ManagementInput extends Component {
    render() {
        return (
            <div className={managementStyle['Management-input']}>
                <Input placeholder="请输入姓名或手机号查询"/>
                <Button>查询</Button>
            </div>
        )
    }
}
export default ManagementInput;