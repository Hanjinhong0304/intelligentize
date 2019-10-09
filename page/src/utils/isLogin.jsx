import React from "react";

const isLogin=(Com)=>{
    return class extends React.Component{
        state={
            isLogin:false
        }
        render(){
            let {isLogin}=this.state;
            return  isLogin? <Com {...this.props}/> :<></>
        }
        componentDidMount(){
            let {history:{push}}=this.props;
            let user =window.sessionStorage.getItem("authorization")
            if(user){
                this.setState({isLogin:true})
            }else{
                push("/login")
            }
        }
    }
}
export default isLogin;