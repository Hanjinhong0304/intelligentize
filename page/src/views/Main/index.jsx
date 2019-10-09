import React from 'react';
import LayoutHeader from "@/components/Header/index.jsx"
import LayoutAside from '@/components/Aside/index.jsx'
import RouterView from "@/router/routerView"
import {
    Layout
} from 'antd'
import './scss/main.css';
import { getNavGroups } from "@/router/routers"
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
const { Content } = Layout;

const navGroups = getNavGroups();

class Main extends React.Component {
    render() {
        let { routes } = this.props;
        let { path: parentpath } = this.props.match;
        let path = this.props;

        return <ConfigProvider locale={zhCN}>
            <Layout className="wrap">
                <LayoutHeader navGroups={navGroups} path={path} />
                <Layout>
                    <LayoutAside navGroups={navGroups} />
                    <Content style={{
                        background: '#fff'
                    }}>
                        {/* 子路由出口 */}
                        <RouterView routes={routes} parentpath={parentpath} />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    }
}

export default Main;
