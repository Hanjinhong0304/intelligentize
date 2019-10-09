import React, { Component } from 'react'
import integralStyle from "../../scss/index.module.css"
import ReportUp from "../upload/index"
import {Button} from "antd"
// 积分上报
export default class TabsReport extends Component {
    render() {
        return (
            <div className={integralStyle['integral-report']} >
                <div className={integralStyle['integral-updata-title']} >
                    积分上报
                </div>
                <div className={integralStyle['integral-updata-ipt']}>
                    <div className={integralStyle['updata-title']}>
                        <div className={integralStyle['updata-cont']}>
                            <p>上报说明:<span>*</span></p>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div className={integralStyle['updata-photo']}>
                        <div className={integralStyle['updata-cont']}>
                            <p>添加照片:<span>*</span></p>
                            <ReportUp className={integralStyle['input']}></ReportUp>
                        </div>
                    </div>
                    <div className={integralStyle['updata-class']}>
                        <div className={integralStyle['updata-cont']}>
                            <p>积分分类:<span>*</span></p>
                            <select>
                                <option>结果正常</option>
                                <option>结果不正常</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={integralStyle['integral-upload-btn']}>
                    <div className={integralStyle['integral-btn-cont']}>
                        <Button style={{background:'#09f',color:'#fff'}}>确定</Button>
                        <Button style={{background:'#ccc',color:'#fff'}}>取消</Button>
                    </div>
                </div>
            </div>
        )
    }
}

