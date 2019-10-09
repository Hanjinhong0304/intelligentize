import React, { Component } from 'react'
import componentStyle from "./scss/reviewComponent.module"
import { Tabs } from 'antd';

const { TabPane } = Tabs;
 class ReviewComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.title=props.title;
    };
    render() {
        return (
            <div>
               <div className={componentStyle["reviewComponent"]}>
                        <Tabs defaultActiveKey="1" onChange={()=>{}}>
                            <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </div> 
                
            </div>
        )
    }
}

export default ReviewComponent;