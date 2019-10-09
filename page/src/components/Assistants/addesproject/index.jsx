import React, { Component } from 'react'
import AssistantsStyle from "../scss/components.module.css"
import echarts from "echarts"
// 丢失客户数
export default class Index extends Component {
    state={
        datas:[
            [0,2,1,5,1,1,3],
            [2,4,1,5,8,6,3],
            [6,2,5,8,2,9,6]
        ],
        val:0,
        sel:[
            {
                title:"最近一周"
            },
            {
                title:"最近一月"
            },
            {
                title:"最近三月"
            }
        ]
    }
    render() {
        let {sel} = this.state;
        return (
            <div className={AssistantsStyle["content_box"]}>
                <div  className={AssistantsStyle["content_box_header"]}>
                    <p>新增客户总统计</p>
                    <div>
                        <select ref="selectDom" defaultValue='0' 
                            onChange={()=>this.selectChange(this.refs['selectDom'].options[this.refs['selectDom'].options.selectedIndex].value)}>
                            {
                                sel.map((item,index)=><option key={index} value={index}>{item.title}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div  className={AssistantsStyle["content_box_cont"]}>
                    <div id="myEcharts" ref="myEcharts" style={{width: '560px',height:"300px"}}></div>
                </div>
            </div>
        )
    }
    selectChange(value){
        this.setState({val:value},()=>{
            this.changeEcharts(this.state)
        })  
    }
    changeEcharts(newState){
        let {datas,val} = newState ? newState : this.state;
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.refs['myEcharts']);
        // 指定图表的配置项和数据
        let option = {
            xAxis: {
                type: 'category',
                data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: datas[val],
                type: 'line',
                color:'orange'
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    componentDidMount() {
        this.changeEcharts();
    }
}
