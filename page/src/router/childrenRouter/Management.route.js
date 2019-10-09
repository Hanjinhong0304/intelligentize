//员工管理
import {Archives,Distribution,Course,Agency,Birthday,Salary,Dimission} from "@/views/"
const routes=[
   
    {
        path:"/management/archives",
        component:Archives,
        meta:{
            title:"档案管理"
        }
    },
    {
        path:"/management/distribution",
        component:Distribution,
        meta:{
            title:"分配管理"
        }
    },
    {
        path:"/management/course",
        component:Course,
        meta:{
            title:"课程管理"
        }
    },
    {
        path:"/management/agency",
        component:Agency,
        meta:{
            title:"代理费管理"
        }
    },
    {
        path:"/management/birthday",
        component:Birthday,
        meta:{
            title:"生日提醒"
        }
    },
    {
        path:"/management/salary",
        component:Salary,
        meta:{
            title:"薪酬管理"
        }
    },
    {
        path:"/management/dimission",
        component:Dimission,
        meta:{
            title:"离职管理"
        }
    },
    {
        path:"/management",
        redirect:"/management/archives"
    },
];


export default routes;