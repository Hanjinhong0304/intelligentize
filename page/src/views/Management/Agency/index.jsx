import React, { Component } from 'react'
import { Input,Button} from 'antd';
import managementStyle from "../scss/index.module"
import isLogin from "@/utils/isLogin"
import ManagementTable from "@/components/Table/"
import ManagementButton from "@/components/Button/"

 class Index extends Component {
  state = {
    columns: [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
      },
      {
        title: '职位',
        key: 'position',
        dataIndex: 'position'
      },
      {
        title: '负责班级',
        key: 'class',
        dataIndex: 'class'
      },
      {
        title: '幼儿园',
        key: 'kindergarten',
        dataIndex: 'kindergarten'
      },
      {
        title: '总课时(小时)',
        key: 'totalHours',
        dataIndex: 'totalHours'
      },
      {
        title: '课时费(元)',
        key: 'subsidy',
        dataIndex: 'subsidy'
      },
      {
        title: '总课时费(元)',
        key: 'totalHoursSubsidy',
        dataIndex: 'totalHoursSubsidy'
      }
    ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        number: 32,
        department: 'New York No. 1 Lake Park',
        position: ['nice', 'developer'],
        class: "",
        kindergarten: "",
        totalHours: "",
        subsidy: "",
        totalHoursSubsidy: ""
      }
    ]
  }
    
    render() {
        let {columns,data} = this.state;
        return (
            <div className={managementStyle["ArchivesManagement"]}>
                <header>代理费</header>
                <section className={managementStyle["search"]}>
                    <Input placeholder="输入姓名或手机号查询"/>
                    <Button>查询</Button>
                </section>
                <ManagementButton/>
                <ManagementTable columns={columns} dataSource={data}/>
            </div>
        )
    }
}
export default isLogin(Index)