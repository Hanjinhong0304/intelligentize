import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

 class DirectorC  extends Component {
    render() {
        return (
            <div>
               主管考核C级 
            </div>
        )
    }
}

export default isLogin(DirectorC)