import React, { Component } from 'react'
import {Select,Button} from "antd";
const { Option } = Select;
export default class Index extends Component {
    state={
        options1:[
            {name:"本周"},
            {name:"本月"},
            {name:"上周"},
            {name:"上月"}
        ],
        options2:[
            {name:"培训机构"},
            {name:"教育机构"},
            {name:"娱乐机构"},
            {name:"非法机构"}
        ],
        options3:[
            {name:"财务部"},
            {name:"人资部"},
            {name:"技术部"},
            {name:"后勤部"}
        ],
        options4:[
            {name:"何智博"},
            {name:"申丹丹"},
            {name:"赵张宝"},
            {name:"李伟泽"},
            {name:"韩金红"}
        ]
    }
    render() {
        let{options1,options2,options3,options4}=this.state
        return (
            <div className="attdheader">
                <div>
                    <span>时间:</span>
                    <Select defaultValue="" style={{ width: 150 }} onChange={()=>{}}>
                        {
                            options1 && options1.map((item,index)=>{
                                return <Option key={index}>{item.name}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <span>机构:</span>
                    <Select defaultValue="" style={{ width: 150 }} onChange={()=>{}}>
                        {
                            options2 && options2.map((item,index)=>{
                                return <Option key={index}>{item.name}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <span>部门:</span>
                    <Select defaultValue="" style={{ width: 150 }} onChange={()=>{}}>
                        {
                            options3 && options3.map((item,index)=>{
                                return <Option key={index}>{item.name}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <span>员工:</span>
                    <Select defaultValue="" style={{ width: 150 }} onChange={()=>{}}>
                        {
                            options4 && options4.map((item,index)=>{
                                return <Option key={index}>{item.name}</Option>
                            })
                        }
                    </Select>
                    <p className="formatsubmitbtn">
                        <Button type="primary">查询</Button>
                        <Button type="primary">清除</Button>
                    </p>
                </div>
            </div>
        )
    }
}
