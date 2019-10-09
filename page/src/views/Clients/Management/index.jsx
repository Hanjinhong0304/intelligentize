import React, { Component } from 'react'
import { Button, Table } from 'antd';
import visitStyle from "./scss/visit.module"
import isLogin from "@/utils/isLogin"

 class VisitManagement extends Component {
    state = {
        size: 'large',
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
            },
            {
                key: '2',
                name: 'John Brown',
                number: 32,
                department: 'New York No. 1 Lake Park',
                position: ['nice', 'developer'],
                class: "",
                kindergarten: "",
            },
            {
                key: '3',
                name: 'John Brown',
                number: 32,
                department: 'New York No. 1 Lake Park',
                position: ['nice', 'developer'],
                class: "",
                kindergarten: "",
            }
        ]
    };
    render() {
        let { size, columns, data } = this.state;
        return (
            <div className={visitStyle["visit"]}>
                {/* 拜访管理  */}
                <div className={visitStyle["btn"]}>
                    <Button type="primary" size={size} className={visitStyle["first_button"]}>
                        新增拜访客户
                    </Button>
                    <Button type="primary" size={size} className={visitStyle["last_button"]}>
                        取消拜访客户
                    </Button>
                </div>
                <div className={visitStyle["table"]}>
                    <section>
                        <Table columns={columns} dataSource={data} size="small" />
                    </section>
                </div>
            </div>
        )
    }
}

export default isLogin(VisitManagement)
