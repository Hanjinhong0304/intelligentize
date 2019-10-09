import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class TeacherRanking extends Component {
    render() {
        return (
            <div>
                教师学习排名 
            </div>
        )
    }
}
export default isLogin(TeacherRanking)
