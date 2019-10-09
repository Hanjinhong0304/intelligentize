import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import layoutHeader from './scss/main.module.css'
const { Header } = Layout;

function HeaderView(props) {
    let { navGroups } = props;
    return <Header className={layoutHeader["ant-layout-header"]}  style={{ background:"rgb(43,82,149)" }}>
        <div className={layoutHeader["header-left"]}>
            <img src={require('@/public/img/logo.png')} alt="logo" />
        </div>
        <div className={layoutHeader["header-center"]}>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: "64px",background:"rgb(43,82,149)" }}
            >
                {
                    Object.keys(navGroups).map((item, key) => {
                        return <Menu.Item key={key}>
                            <NavLink to={navGroups[item].path}>{navGroups[item].title}</NavLink>
                        </Menu.Item>
                    })
                }
            </Menu>
        </div>

    </Header>
}

export default HeaderView ;