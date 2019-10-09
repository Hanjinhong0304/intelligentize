import React, { Component } from 'react'
import { Input,Button} from 'antd';
import managementStyle from "../scss/index.module"
import isLogin from "@/utils/isLogin"
import ManagementTable from "@/components/Table/"
import ManagementButton from "@/components/Button/"

 class Index extends Component {
    state={
        columns:[
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
              },
              {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags'
              },
              {
                title: 'Action',
                key: 'action',
                dataIndex: 'action'
              }
        ],
        data:[
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
              }
        ]
    }
    
    render() {
        let {columns,data} = this.state;
        return (
            <div className={managementStyle["ArchivesManagement"]}>
                <header>离职管理</header>
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