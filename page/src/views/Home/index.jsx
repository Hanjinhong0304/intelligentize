import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';// 引入 ECharts 主模块
import  'echarts/lib/chart/line';// 引入柱状图、环状图
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';// 引入提示框和标题组件
import "./scss/style"; //引入私有样式
import 'antd/dist/antd.css'; //引入antd样式
import { getUserInfo } from "@/utils/userInfo";
import isLogin from "@/utils/isLogin";
import {  Calendar, Table } from 'antd';
import {checkWorkData,dailyData,clienteleData} from "./libs/data";
import echartsPie from "./mock/echartsPie";
import echartsLine from "./mock/echartsLine";
import Right from "./components/Right/";
import EchartsHead from "./components/Header/index";
import { columns, home } from "@/mock/home/" //首页计划模拟数据
 class Home extends Component {
    state={
        //岗位
        identityName: "",
        //用户名
        userName: "",
        //echarts数据
        checkWorkValue:[[{value:1, name:'出勤率0%'},{value:99, name:''}],[{value:40, name:'出勤率40%'},{value:60, name:''}]],
        datilValue:[[{value:100, name:'已交100%'}],[{value:50, name:'已交50%'},{value:50, name:''}]],
        datilColor:[['green'],['green','#eee']],
        NumValue:[[300],[200]],
        lineValue:[[0, 2, 1, 5, 1, 1, 3 , 8],[4, 7, 2, 6, 8, 5, 3 , 6]],
        lineData:["10-01", "10-02", "10-03", "10-04", "10-05", "10-06","10-07"],
        ind:0,
        inds:0,
        checkWorkText:"考勤分析",
        dailyText:"日报",
        clienteleText:"客户",
        NumberText:"活动数据",
        //表格类型
        calendarTable: [
            {
                title: "今日计划",
                id: 1
            },
            {
                title: "本周计划",
                id: 2
            },
            {
                title: "综合统计",
                id: 3
            }
        ],
        index:0
    }
    render() {
        let {identityName,userName,calendarTable,checkWorkText,dailyText,clienteleText,NumberText,index}=this.state;
        return <div className="home">
                    <div className="home_box">
                        <div className="personalDetails">
                            <dl>
                                <dt>
                                    <img src={require('@/public/img/girl.jpg')} alt=""/>
                                </dt>
                                <dd>
                                    <p className="names">Hi,{userName}</p>
                                    <p className="post">岗位：<span>{identityName}</span></p>
                                    <p className="integral">总积分：<span>2000</span></p>
                                    <p className="ranking">积分排名：<span>100 / 2500</span></p>
                                </dd>
                            </dl>
                        </div>
                        <div className="conts">
                        {
                            // 判断 职位为老师显示 日历，计划，否则不显示
                            identityName === "老师" && <div className="calendar" >
                                <div className="calendar_box">
                                    <Calendar fullscreen={false} />
                                </div>
                                <div className="calendar_table">
                                    <div className="calendar_table_box">
                                        <div className="calendar_table_top">
                                            {
                                                calendarTable.map(item =>
                                                    <div
                                                        className={item.id === index ?"active" : "calendar_table_top_box"}
                                                        key={item.id}
                                                        onClick={this.tableCk.bind(this, item.id)}
                                                    >{item.title}</div>)
                                            }
                                        </div>
                                        <div className="calendar_table_bottom">
                                            <Table
                                                columns={columns} dataSource={home.homeData[(index-1)===-1?0:(index-1)].list}
                                                size="small"
                                                pagination={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                            <div className="echartsBox">
                                <div className="checkWork">
                                    <EchartsHead title={checkWorkText}  open={true} getIndex={this.getPieIndex.bind(this,checkWorkText)}/>
                                    <div className="checkWork_left"  ref="checkWork" style={{ width: "50%", height: "90%" }}></div>
                                    <Right data={checkWorkData} active={true}/>
                                </div>
                                <div className="daily">
                                    <EchartsHead title={dailyText} open={false} getIndex={this.getPieIndex.bind(this,dailyText)}/>
                                    <div className="daily_left" ref="daily" style={{ width: "50%", height: "90%" }}></div>
                                    <Right data={dailyData}/>
                                </div>
                                <div className="clientele">
                                    <EchartsHead title={clienteleText} open={false} getIndex={this.getPieIndex.bind(this,clienteleText)}/>
                                    <div className="clientele_left"style={{ width: "50%", height: "90%" }}>
                                        <p className="nums">{this.state.NumValue[this.state.inds]}</p>
                                    </div>
                                    <Right data={clienteleData}/>
                                </div>
                                <div className="Number">
                                    <EchartsHead title={NumberText} open={true} getIndex={this.getPieIndex.bind(this,NumberText)}/>
                                    <div className="Number_cont" ref="activeNumber" style={{ width: "100%", height: "100%",top:-30 }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
    componentDidMount() {
        let {ind}=this.state;
        this.getEchartsPie(ind);
        this.getEchartsDate(ind);
        this.getEchartsLine(ind);
        //获取用户 职位  名称
        let { identityName, userName } = getUserInfo();
        this.setState({
            identityName,
            userName
        })
    }
    tableCk(id) {
        //改变切换类
        this.setState({
            index: id
        },()=>{
            let {index}=this.state;
            console.log( home.homeData[index - 1].list)
        })
       
    }
    getEchartsPie(index){
        let {checkWorkValue}=this.state;
        echartsPie(echarts,this.refs.checkWork,'出勤率0%','pie',checkWorkValue[index],['skyblue','#eee'])
    }
    getEchartsLine(index){
        let {lineData,lineValue}=this.state;
        echartsLine(echarts,this.refs.activeNumber,lineData,'line',lineValue[index],'orange')
    }
    getEchartsDate(index){
        let {datilValue,datilColor}=this.state;
        echartsPie(echarts,this.refs.daily,'已交100%','pie',datilValue[index],datilColor[index])
    }
    getPieIndex(title,index){
        // console.log(title,index);
        switch(title){
            case '考勤分析':
                this.getEchartsPie(index);
            break; 
            case '日报':
                this.getEchartsDate(index);
            break;
            case '客户（包含下属客户）':
                this.setState({inds:index})
            break;
            case '活动数据':
                this.getEchartsLine(index);
            break;
            default:
                break;
        }
        this.setState({ind:index});
    } 

}

export default isLogin(Home)
