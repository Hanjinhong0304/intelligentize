import React, { Component } from 'react'
import integralStyle from "../../scss/index.module.css"
import {DatePicker,Table } from "antd"
const {  RangePicker } = DatePicker;
//积分审核

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
      title: '审核项三',
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
      shenhe:`待审核`,
    });
  }
export default class TabsAudit extends Component {
    state={      
        tab:[
                {
                    title:"上报项一"
                },
                {
                    title:"上报项二"
                },
                {
                    title:"上报项三"
                },
                {
                    title:"上报项四"
                },
                {
                    title:"上报项五"
                },
            ]
    }
    render() {
        let {tab} = this.state;
        return (
            <div className={integralStyle['integral-wrapper']}>
                <div className={integralStyle['integral-tab']}>
                    {
                        tab.map((item,index)=><p key={index}>{item.title}</p>)
                    }
                </div>
                <div className={integralStyle['integral-filter']}>
                    <button>导出</button>
                    <p onClick={()=>this.waitCheck()}>待审核</p>
                    <p onClick={()=>this.finishCheck()}>审核完成</p>
                    <RangePicker
                        className={integralStyle['integral-date']}
                        showTime
                        format="YYYY/MM/DD"
                        onChange={(e)=>this.dateChange(e)}
                    />
                    <button className={integralStyle['integral-btn']}>展开查询</button>
                </div>
                <div className={integralStyle['integral-data']}>
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
    waitCheck(){    
        console.log("待审核")
    }
    finishCheck(){
        console.log("审核完成")
    }
    dateChange(e){
        console.log(e)
        
    }
}

