import React, { Component } from 'react'
import AssistantsStyle from "../scss/components.module.css"
import echarts from "echarts"
// 客户满意度
export default class Index extends Component {
    state={
        datas:[
            [5,10,15,20,40,45,50],
            [20,10,40,50,80,30,15],
            [70,50,20,90,40,15,30]
        ],
        val:0,
        sel:[
            {
                title:"客服环节"
            },
            {
                title:"销售环节"
            },
            {
                title:"市场环节"
            }
        ]
    }
    render() {
        let {sel} = this.state;
        return (
            <div className={AssistantsStyle["content_box"]}>
                <div className={AssistantsStyle["content_box_header"]}>
                    <p>客户满意度</p>
                    <div>
                        <select ref="selectDom" defaultValue='0'
                            onChange={()=>this.selectChange(this.refs['selectDom'].options[this.refs['selectDom'].options.selectedIndex].value)}>
                        {
                            sel.map((item,index)=><option key={index} value={index}>{item.title}</option>)
                        }
                        </select>
                    </div>
                </div>
                <div className={AssistantsStyle["content_box_cont"]}>
                    <div id="myEcharts" ref="myEcharts" style={{ width: '560px', height: "300px" }}></div>
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
                type: "category",
                data: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
            },
            yAxis: {
                type: "value"
            },
            series: [
                {
                    data: datas[val],   
                    type: "bar",
                    barWidth: "70%",
                    itemStyle: {
                        normal: {
                            //每根柱子颜色设置
                            color: function (params) {
                                let colorList = ["#c1494a","#c1494a","#c1494a","#c1494a","#4c8fd6","#4c8fd6","#4c8fd6",];
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    componentDidMount() {
        this.changeEcharts();
    }
}
