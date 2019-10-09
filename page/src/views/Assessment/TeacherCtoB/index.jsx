import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class TeacherEvaluationCtoB  extends Component {
    render() {
        return (
            <div>
                教师考核C-B级 
            </div>
        )
    }
}

export default isLogin(TeacherEvaluationCtoB)
