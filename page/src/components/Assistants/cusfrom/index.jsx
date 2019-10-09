import React, { Component } from 'react'
import {Table} from 'antd';
const columns1 = [
    {
        title: '客户编码',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '客户名称',
        dataIndex: 'number',
    },
    
    {
        title:"客户类型",
        dataIndex:'job'
    },{
        title:"营销区域",
        dataIndex:"tel"
    },{
        title:"详细地址",
        dataIndex:"day"
    },{
        title:"客户经理",
        dataIndex:"days"
    },{
        title:"创建时间",
        dataIndex:"badday"
    }
  ];
  const data = [
    {
        key: '1',
        name: 'ZAB000001',
        number: "小太阳幼儿园",
        job:"类型一",
        tel:"华北大区",
        day:"小太阳幼儿园的地址",
        days:"李翔",
        badday:"2016-10-01",
    },
    {
        key: '2',
        name: 'ZAB000002',
        number: "村雨幼儿园",
        job:"类型二",
        tel:"华南大区",
        day:"村雨幼儿园的地址",
        days:"何智博",
        badday:"2016-10-02",
    },
    {
        key: '3',
        name: 'ZAB000003',
        number: "金贝贝幼儿园",
        job:"类型三",
        tel:"华东大区",
        day:"金贝贝幼儿园的地址",
        days:"张傲",
        badday:"2016-10-03",
    },
    {
        key: '4',
        name: 'ZAB000004',
        number: "未来之星幼儿园",
        job:"类型一",
        tel:"华北大区",
        day:"未来之星幼儿园的地址",
        days:"李翔",
        badday:"2016-10-04",
    },
    {
        key: '5',
        name: 'ZAB000005',
        number: "小太阳幼儿园",
        job:"类型一",
        tel:"华北大区",
        day:"小太阳幼儿园的地址",
        days:"何智博",
        badday:"2016-10-05",
    },
    {
        key: '6',
        name: 'ZAB000006',
        number: "小天使幼儿园",
        job:"类型三",
        tel:"华西大区",
        day:"小天使幼儿园的地址",
        days:"何智博",
        badday:"2016-10-06",
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
