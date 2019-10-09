import React, { Component } from 'react'
import integralStyle from "../../scss/index.module.css"
import {DatePicker,Table,Checkbox } from "antd"
const {  RangePicker } = DatePicker;

//积分统计

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '工号',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: '所属大区',
      dataIndex: 'address',
      width: 150,
    },
    {
      title: '部门',
      dataIndex: 'classify',
      width: 150,
    },
    {
      title: '职务',
      dataIndex: 'filter',
      width: 150,
    },
    {
      title: '总积分',
      dataIndex: 'shenhe',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      key: i,
      name: `吴迪 ${i}`,
      age: i+1,
      address: `华东大区. ${i}`,
      classify:`销售部`,
      filter:`职务员`,
      shenhe:numRandom(),
    });
  }
function numRandom(){
    return Math.floor(Math.random()*100)
}

export default class TabsStatistics extends Component {
    state={   
        timer:['本周','本月','上月','本季度','半年','全年'],
        allcheck:{
            title:"全部显示",
            check:false
        },
        checkBox:[
            {
                title:"积分种类一",
                check:false
            },
            {
                title:"积分种类二",
                check:false
            },
            {
                title:"积分种类三",
                check:false
            },
            {
                title:"积分种类四",
                check:false
            },
            {
                title:"积分种类五",
                check:false
            },
            {
                title:"积分种类六",
                check:false
            },
            {
                title:"积分种类七",
                check:false
            },
            {
                title:"积分种类八",
                check:false
            },
        ]
    }
    render() {
        let {timer,allcheck,checkBox} = this.state;
        return (
            <div className={integralStyle['integral-wrapper']}>
                <div className={integralStyle['integral-filter']}>
                    <button>导出</button>
                    {
                        timer.map((item,index)=><p key={index} onClick={()=>this.timerFn(index)}>{item}</p>)
                    }
                    <RangePicker
                        className={integralStyle['integral-date']}
                        showTime
                        format="YYYY/MM/DD"
                        onChange={(e)=>this.dateChange(e)}
                    />
                    <button className={integralStyle['integral-btn1']}>积分综合排名</button>
                    <button className={integralStyle['integral-btn']}>展开查询</button>
                </div>
                <div className={integralStyle['integral-data']}>
                    <div className={integralStyle['integral-check']}>
                        <p>详细显示项</p>
                        <div >
                            <Checkbox onChange={()=>this.allCheck()} checked={allcheck.check}>{allcheck.title}</Checkbox>
                            {
                                checkBox.map((item,index)=><Checkbox key={index} 
                                    onChange={()=>this.checked(index)}
                                    checked={item.check}>{item.title}</Checkbox>)
                            }
                        </div>
                    </div>
                    <div>
                        <Table 
                            className={integralStyle['integral-table']}
                            columns={columns} 
                            dataSource={data} 
                            pagination={{ pageSize: 10 }} 
                            scroll={{ y:350 }} />
                    </div>
                </div>
            </div>
        )
    }
    allCheck(){
        let {allcheck,checkBox} = this.state;
        allcheck.check = !allcheck.check;
        checkBox.forEach(item=>item.check=allcheck.check)
        this.setState({allcheck,checkBox})
    }
    checked(index){
        let {checkBox,allcheck} = this.state
        checkBox[index].check = !checkBox[index].check
        allcheck.check = checkBox.every(item=>item.check)
        this.setState({checkBox,allcheck},()=>{
            console.log(this.checkBox,'-----checkBox')
        })
    }
    waitCheck(){

    }
    dateChange(){

    }
    timerFn(index){
        console.log(index)
    }
}

