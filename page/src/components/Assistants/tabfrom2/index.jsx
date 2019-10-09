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
        title:"工作日天数",
        dataIndex:"day"
    },{
        title:"工作考勤正常天数",
        dataIndex:"days"
    },{
        title:"工作考勤异常天数",
        dataIndex:"badday"
    },{
        title:"打卡天数",
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
        day:30,
        days:30,
        badday:0,
        week:30
    },
    {
        key: '2',
        name: '申丹丹',
        number: 42,
        address: '销售部',
        job:"业务员",
        tel:18631051944,
        day:29,
        days:29,
        badday:0,
        week:29
    },
    {
        key: '3',
        name: '赵张宝',
        number: 32,
        address: '销售部',
        job:"业务员",
        tel:18434926674,
        day:28,
        days:28,
        badday:0,
        week:28
    },
    {
        key: '4',
        name: '李伟泽',
        number: 90,
        address: '销售部',
        job:"业务员",
        tel:16601285670,
        day:27,
        days:27,
        badday:0,
        week:27
    },
    {
        key: '5',
        name: '韩金洪',
        number: 99,
        address: '销售部',
        job:"业务员",
        tel:13994518994,
        day:26,
        days:26,
        badday:0,
        week:26
      },
      {
        key: '6',
        name: '易航',
        number: 79,
        address: '老师部',
        job:"项目经理",
        tel:"保密",
        day:30,
        days:30,
        badday:0,
        week:30
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
