import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class TeacherEvaluationBtoA  extends Component {
    render() {
        return (
            <div>
                教师考核B-A级 
            </div>
        )
    }
}
export default isLogin(TeacherEvaluationBtoA)