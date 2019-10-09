import React from "react"
export default class LoadImg extends React.Component{
    state={
        src:require("@/public/img/loading.jpg")
    }
    render(){
        let {src} = this.state;
        return <img src={src} alt=""/>
    }
    componentDidMount(){
        let {img} = this.props;
        this.timer = setTimeout(()=>{
            this.setState({src:img});
        },2500)
    }
}