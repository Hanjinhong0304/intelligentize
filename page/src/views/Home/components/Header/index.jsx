import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

class index extends Component {
    state={
        month:[
            {
                title:"本月"
            },
            {
                title:"上月"
            }
        ],
        date:[
            {
                title:"今日"
            },
            {
                title:"明日"
            }
        ],
        ind:0
    }
    render() {
        let {title,open}=this.props;
        let {ind}=this.state;
        return (
            <div className="echartsHead">
                <div className="title">
                    <span>|</span><span>{title}</span>
                </div>
                {
                    open?<div className="month">
                            {this.state.month.map((item,index)=>
                                <span key={index} 
                                    className={index===ind?'current':''} 
                                    onClick={()=>{
                                        this.props.getIndex(index);
                                        this.setState({ind:index});
                                    }}>
                                    {item.title}
                                </span>)}
                        </div>:<div className="date">
                                    <Select defaultValue={0} 
                                    style={{ width: 80}} 
                                    onChange={(e)=>{
                                        // console.log(e);
                                        this.props.getIndex(e);
                                    }}>
                                        {
                                            this.state.date.map((item,index)=><Option key={index} value={index}>{item.title}</Option>)
                                        }
                                    </Select>
                                </div>
                }
            </div>
        );
    }
}

export default index;