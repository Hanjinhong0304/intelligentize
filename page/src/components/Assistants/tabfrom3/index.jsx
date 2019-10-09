import React, { Component } from 'react'
import {Checkbox,Table} from 'antd';
const columns1 = [
    {
        title: '日期',
        dataIndex: 'data',
        render: text => <a>{text}</a>,
    },
    {
        title: '星期',
        dataIndex: 'week',
    },
    {
        title:"应考勤人数",
        dataIndex:'people1'
    },{
        title:"考勤正常人数",
        dataIndex:"people2"
    },{
        title:"考勤异常人数",
        dataIndex:"people3"
    },{
        title:"正常打卡人数",
        dataIndex:"people4"
    }
  ];
  const data = [
    {
        key:"1",
        data:"2016-10-01",
        week:"六",
        people1:68,
        people2:68,
        people3:68,
        people4:68,
    },
    {
        key:"2",
        data:"2016-10-02",
        week:"日",
        people1:18,
        people2:18,
        people3:18,
        people4:18
    },
    {
        key:"3",
        data:"2016-10-03",
        week:"一",
        people1:28,
        people2:28,
        people3:28,
        people4:28
    },
    {
        key:"4",
        data:"2016-10-04",
        week:"二",
        people1:38,
        people2:38,
        people3:38,
        people4:38
    },
    {
        key:"5",
        data:"2016-10-05",
        week:"三",
        people1:48,
        people2:48,
        people3:48,
        people4:48
    },
    {
        key:"6",
        data:"2016-10-06",
        week:"四",
        people1:58,
        people2:58,
        people3:58,
        people4:58
    },
    {
        key:"7",
        data:"2016-10-07",
        week:"五",
        people1:68,
        people2:68,
        people3:68,
        people4:68
    },
    {
        key:"8",
        data:"2016-10-08",
        week:"六",
        people1:78,
        people2:78,
        people3:78,
        people4:78
    },
    {
        key:"9",
        data:"2016-10-09",
        week:"日",
        people1:88,
        people2:88,
        people3:88,
        people4:88
    },
    {
        key:"10",
        data:"2016-10-10",
        week:"一",
        people1:98,
        people2:98,
        people3:98
    }
  ];
  

export default class Index extends Component {
    state={
        header:[
            {
                name:"全部显示"
            },{
                name:"正常打卡天数"
            },{
                name:"迟到人数"
            },{
                name:"早退人数"
            },{
                name:"旷工人数"
            },{
                name:"脱岗人数"
            },{
                name:"请假人数"
            },{
                name:"加班人数"
            },{
                name:"外出人数"
            },{
                name:"出差人数"
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
