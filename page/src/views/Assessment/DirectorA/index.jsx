import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"
class DirectorA  extends Component {
    render() {
        return (
            <div>
               主管考核A级 
            </div>
        )
    }
}
export default isLogin(DirectorA)