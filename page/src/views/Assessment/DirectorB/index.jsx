import React, { Component } from 'react'
import isLogin from "@/utils/isLogin"

class DirectorB  extends Component {
    render() {
        return (
            <div>
               主管考核B级 
            </div>
        )
    }
}

export default isLogin(DirectorB)