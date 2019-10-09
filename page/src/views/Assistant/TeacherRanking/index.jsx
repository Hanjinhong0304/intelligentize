import React, { Component } from 'react'
import Excutivefrom from "@/components/Assistants/excutivefrom"   //教师学习排名组件
import isLogin from "@/utils/isLogin"
class TeacherRanking extends Component {
    state={
        imglist:[
            {
                img:require("../img/3.png")
            },{
                img:require("../img/4.png")
            }
        ]
    }
    render() {
        let {imglist}=this.state
        return (
            <div className="competitive">
                <div className="competitivetop">
                    <h4>积极奋进达人</h4>
                    <div className="competitiveimg">
                        {
                            imglist && imglist.map((item,index)=>{
                                return <img key={index} src={item.img} alt=""/>
                            })
                        }
                    </div>
                </div>

                <div className="competitivetable">
                    <h4>主管竞争力排名</h4>
                    <Excutivefrom />
                    {/* 教师学习排名组件 */}
                </div>
                
            </div>
        )
    }
}

export default isLogin(TeacherRanking)