import React ,{Component}from "react";
import integralStyle from "../scss/index.module"
import ImgLoad from "./loadimg" // 图片懒加载
export default class List extends Component{
    render(){
        const {title,children} = this.props.item;
        return <div className={integralStyle['list']}>
            <h3>{title}</h3>
            <div className={integralStyle['list-cont']}>
                {
                    children.map((item,index)=>{
                        return <dl key={index}>
                                    <dt>
                                        <ImgLoad img={item.img}/>
                                    </dt>
                                    <dd>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </dd>
                                </dl>
                    })
                }
                
            </div>
        </div>
    }
   
}