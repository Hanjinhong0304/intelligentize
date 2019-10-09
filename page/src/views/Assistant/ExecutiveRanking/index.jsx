import React, { Component } from 'react'
import "../scss/excutive.moudle.css"
import Excutive from "@/components/Assistants/excutiveform/index"   //主管竞争力排名表格组件
import isLogin from "@/utils/isLogin"
 class ExecutiveRanking extends Component {
    state={
        imglist:[
            {
                img:require("../img/1.png")
            },{
                img:require("../img/2.png")
            },{
                img:require("../img/3.png")
            },{
                img:require("../img/4.png")
            },{
                img:require("../img/5.png")
            }
        ]
    }
    render() {
        let {imglist}=this.state
        return (
            <div className="competitive">
                <div className="competitivetop">
                    <h4>最闪耀主管</h4>
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
                    <Excutive />
                </div>
                
            </div>
        )
    }
}

export default isLogin(ExecutiveRanking)