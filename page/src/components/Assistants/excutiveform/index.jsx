import React, { Component } from 'react'
import {Checkbox,Table} from 'antd';
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
        title: '部门',
        dataIndex: 'address',
    },
    {
        title:"职务",
        dataIndex:'job'
    },{
        title:"手机",
        dataIndex:"tel"
    },{
        title:"客户数",
        dataIndex:"day"
    },{
        title:"销售额数",
        dataIndex:"days"
    },{
        title:"开拓量(个)",
        dataIndex:"badday"
    },{
        title:"拜访天数",
        dataIndex:"week"
    }
  ];
  const data = [
    {
        key: '1',
        name: '何智博',
        number: 32,
        address: '销售部',
        job:"业务员",
        tel:15839597124,
        day:1500,
        days:200,
        badday:75,
        week:300
    },
    {
        key: '2',
        name: '申丹丹',
        number: 42,
        address: '销售部',
        job:"业务员",
        tel:18631051944,
        day:1032,
        days:209,
        badday:12,
        week:125
    },
    {
        key: '3',
        name: '赵张宝',
        number: 32,
        address: '销售部',
        job:"业务员",
        tel:18434926674,
        day:1397,
        days:987,
        badday:17,
        week:280
    },
    {
        key: '4',
        name: '李伟泽',
        number: 90,
        address: '销售部',
        job:"业务员",
        tel:16601285670,
        day:2200,
        days:272,
        badday:19,
        week:270
    },
    {
        key: '5',
        name: '韩金洪',
        number: 99,
        address: '销售部',
        job:"业务员",
        tel:13994518994,
        day:987,
        days:203,
        badday:10,
        week:147
      },
      {
        key: '6',
        name: '易航',
        number: 79,
        address: '老师部',
        job:"项目经理",
        tel:"保密",
        day:1258,
        days:325,
        badday:69,
        week:700
    },
  ];
  

export default class Index extends Component {
    state={
        header:[
            {
                name:"全部显示"
            },{
                name:"打卡天数"
            },{
                name:"带薪假天数"
            },{
                name:"扣薪假天数"
            },{
                name:"请假总天数"
            },{
                name:"考勤异常"
            },{
                name:"工作时长"
            },{
                name:"出差天数"
            },{
                name:"外出时长"
            },{
                name:"加班时长"
            },{
                name:"加班次数"
            }
        ]
    }
    render() {
        let {header}=this.state;
        return (
            <div className="tabfrom">
                <div className="fromheader">
                    {
                        header && header.map((item,index)=>{
                            return <Checkbox key={index} onChange={()=>{}}>{item.name}</Checkbox>
                        })
                    }
                </div>
                <div className="frommain">
                    <Table columns={columns1} dataSource={data} />
                </div>
            </div>
        )
    }
}
