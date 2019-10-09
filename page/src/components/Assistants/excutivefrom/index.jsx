import React, { Component } from 'react'
import {Table} from 'antd';
const columns1 = [
    {
        title: '姓名',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '工号',
        dataIndex: 'number',
    },
    {
        title:"所属大区",
        dataIndex:"hometown"
    },
    {
        title: '部门',
        dataIndex: 'address',
    },
    {
        title:"等级",
        dataIndex:'job'
    },{
        title:"学习时长",
        dataIndex:"time"
    },{
        title:"晋级情况",
        dataIndex:"thing"
    }
  ];
  const data = [
    {
        key: '1',
        name: '何智博',
        number: 32,
        hometown:"华南大区",
        address: '销售部',
        job:"业务员",
        time:235,
        thing:"2个月由B升"
    },
    {
        key: '2',
        name: '申丹丹',
        number: 42,
        hometown:"华南大区",
        address: '销售部',
        job:"业务员",
        time:235,
        thing:"2个月由B升"
    },
    {
        key: '3',
        name: '赵张宝',
        number: 32,
        hometown:"华南大区",
        address: '销售部',
        job:"业务员",
        time:235,
        thing:"2个月由B升"
    },
    {
        key: '4',
        name: '李伟泽',
        number: 90,
        hometown:"华南大区",
        address: '销售部',
        job:"业务员",
        time:235,
        thing:"2个月由B升"
    },
    {
        key: '5',
        name: '韩金洪',
        number: 99,
        hometown:"华南大区",
        address: '销售部',
        job:"业务员",
        time:235,
        thing:"2个月由B升"
      },
      {
        key: '6',
        name: '易航',
        number: 79,
        hometown:"华南大区",
        address: '老师部',
        job:"项目经理",
        time:235,
        thing:"2个月由B升"
    },
  ];
  

export default class Index extends Component {
    
    render() {
       
        return (
            <div className="tabfrom">
              
                <div className="frommain">
                    <Table columns={columns1} dataSource={data} />
                </div>
            </div>
        )
    }
}
