import * as childrenRouter from "./childrenRouter/";
import { Home, Login, Main } from "@/views/";
import { getUserInfo } from "@/utils/userInfo"
import isLogin from "@/utils/isLogin";
const navGroups = {
    home: {
        title: "首页",
        isAside: false,
        path: "/main/home"
    },
    level: {
        title: "级别考核",
        path: "/main/level"
    },
    checkWork: {
        title: "员工考勤",
        path: "/main/checkWork"
    },
    customer: {
        title: "客户管理",
        path: "/main/customer"
    },
    college: {
        title: "亚太学院",
        path: "/main/college"
    },
    integral: {
        title: "积分管理",
        path: "/main/integral"
    },
    assistant: {
        title: "管理助手",
        path: "/main/assistant"
    },
    management: {
        title: "员工管理",
        path: "/main/management"
    }

}
export const getNavGroups = () => {
    //根据用户权限 来筛选导航
    let { limitView } = getUserInfo();
    let obj = {};
    let res = Object.keys(navGroups).map(key => {
        let res = limitView.filter(item => item.routerId === key && item.routeIsVisible)
        if (res.length) {
            return navGroups[key]
        } else {
            return null
        }
    }).filter(item => item)
    // eslint-disable-next-line no-unused-vars
    for (let key in navGroups) {
        res.map(item => {
            if (item.path.includes(key)) {
                obj[key] = item
            }
            return obj
        })
    }
    return obj;
}

export const getAsideGroups = (path) => {
    return childrenRouter[path].filter(item => !item.redirect)
}
const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/main",
        component: isLogin(Main),
        children: [
            {
                path: "/home",
                component: Home,
            },
            ...childrenRouter.level,
            ...childrenRouter.assistant,
            ...childrenRouter.checkWork,
            ...childrenRouter.customer,
            ...childrenRouter.college,
            ...childrenRouter.integral,
            ...childrenRouter.management,
            {
                path: "/",
                redirect: "/home"
            },
        ]
    },
    {
        path: "/login",
        component: Login
    }
]

export default routes;