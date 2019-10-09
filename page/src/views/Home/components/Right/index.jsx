import React, { Component } from 'react';

class index extends Component {
    render() {
        let {data,active}=this.props;
        return <div className="right">
                    {data.map((item,index)=><p className={active?'active':''} key={index}><span>{item.title}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{item.persons}</span></p>)}
               </div>
    }
}

export default index;