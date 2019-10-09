import React, { Component } from 'react'
import integralStyle from "../../scss/index.module.css"
import ListItem from "../list"
import {Icon} from "antd"
import {exchange} from "@/mock/Integral/Exchange.js"
// 积分兑换 

export default class TabsExchange extends Component {
    state={
        scoreFilter:[
            {
                num:'0-1000分'
            },
            {
                num:'1000-2000分'
            },
            {
                num:'2000-3000分'
            },
            {
                num:'3000-5000分'
            },
            {
                num:'5000-10000分'
            },
            {
                num:'10000分以上'
            }
        ],
    }
    render() {
        let {scoreFilter} = this.state;
        return (
            <div className={integralStyle['integral-wrapper']}>
                <div className={integralStyle['integral-score-filter']}>
                    <h3 ><Icon type="gift" style={{ color: '#fff',marginRight:'20px' }} />按分值浏览</h3>
                    <p >
                        {
                            scoreFilter.map((item,index)=><span key={index} onClick={()=>this.scoreFilterFn(index)}>{item.num}</span>)
                        }
                    </p>
                </div>
                <div className={integralStyle['integral-all-content']}>
                    {
                        exchange.listData.map((item,index)=><ListItem key={index} item={item}/>)
                    }
                    
                </div>
            </div>
        )
    }
    scoreFilterFn(index){
        console.log(index);
    }
}

