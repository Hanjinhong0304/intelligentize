import React from 'react';
import { Layout, Menu, Icon , message} from 'antd';
import { withRouter, NavLink } from 'react-router-dom'
import { getAsideGroups } from '@/router/routers'
import AsideStyle from "./scss/index.module";
const { Sider } = Layout;

function AsideView(props) {
    let { navGroups, location: { pathname }, history: { push } } = props;
    let path = pathname.split('/')[2];
    path = path ? path : "/home";
    if (path === "/home") {
        return null;
    }
    let curkey = Object.keys(navGroups).find(key => key === path);
    if (curkey === undefined) {
        message.error('暂无权限')
        push('/login')
        return null;
    }
    if (navGroups[curkey].isAside === false) {
        return null;
    }
    
    const asideData = getAsideGroups(path);
    return <Sider style={{ background: "#C5CFEA" }}>
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" style={{ background: "#C5CFEA" }}>
            {
                asideData.map((item, key) =>
                    <Menu.Item key={key} >
                        <Icon type="desktop" className={AsideStyle["color"]} />
                        <span > <NavLink key={key} to={props.match.path + item.path} className={AsideStyle["color"]}>{item.meta.title}</NavLink></span>
                    </Menu.Item>

                )
            }
        </Menu>
    </Sider>
}

export default withRouter(AsideView);