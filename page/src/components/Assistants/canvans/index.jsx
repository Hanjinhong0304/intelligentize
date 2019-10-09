import React, { Component } from 'react'
import AssistantsStyle from "../scss/components.module.css"
import echarts from "echarts"
// 丢失客户数
export default class Index extends Component {
    state={
        datas:[
            [0,20,10,50,14,40,70,39,67,100,36,39,11],
           
        ],
        val:0,
        
    }
    render() {
        
        return (
            <div className={AssistantsStyle["content_box"]}>
               <h1 style={{width:"100%",height:"40px",borderLeft:"4px solid blue",fontSize:"20px",color:"blue"}}>考勤正常率统计</h1>
                <div  className={AssistantsStyle["content_box_cont"]}>
                    <div id="myEcharts" ref="myEcharts" style={{width: '1200px',height:"500px"}}></div>
                </div>
            </div>
        )
    }
   
    changeEcharts(newState){
        let {datas,val} = newState ? newState : this.state;
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.refs['myEcharts']);
        // 指定图表的配置项和数据
        let option = {
            xAxis: {
                type: 'category',
                data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07',"10-08","10-09","10-10","10-11","10-12","10-13"]
            },
            title:{
                left: 'center',
                text: '考勤正常率统计',
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: datas[val],
                type: 'line',
                smooth: true,
                color:'orange',
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    componentDidMount() {
        this.changeEcharts();
    }
}
