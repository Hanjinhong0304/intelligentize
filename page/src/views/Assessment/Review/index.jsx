import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"
import reviewStyle from "./scss/review.module"
import ReviewComponent from "@/components/Assessment/Review/"


class AssessmentReview extends Component {
    state={
        panes : [
            {
                title: '综合统计',
                id:0
            },
            {
                title: '考核评审',
                id:1
            }
        ],
        indTitle:"综合统计",
        ind:0
    }
    render() {
        let {panes,indTitle,ind}=this.state;
        return (
            <div className={reviewStyle["review_box"]}>
                <div className={reviewStyle["top"]}>
                    {
                        panes.map(item=>
                            <div 
                                key={item.id} 
                                className={ind===item.id?reviewStyle["active"]:""}
                                onClick={()=>{this.setState({ind:item.id})}}
                            >
                                {item.title}
                            </div>
                        )
                    }
                </div>
                {
                    ind===0 ?  <ReviewComponent title={indTitle}/> :<div>111</div>
                }
            </div>
        )
    }
}

export default isLogin(AssessmentReview)