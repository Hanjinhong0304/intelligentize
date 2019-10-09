//客户
import { List, PhysicalManagement, ClientsAudit, Care, DataAnalysis, ClientsManagement, Record } from "@/views/"
const routes = [
   
    {
        path: "/customer/list",
        component: List,
        meta: {
            title: "客户列表"
        }
    },
    {
        path: "/customer/physicalManagement",
        component: PhysicalManagement,
        meta: {
            title: "体能老师管理"
        }
    },
    {
        path: "/customer/audit",
        component: ClientsAudit,
        meta: {
            title: "客户审核"
        }
    },
    {
        path: "/customer/care",
        component: Care,
        meta: {
            title: "客户维护"
        }
    },
    {
        path: "/customer/dataAnalysis",
        component: DataAnalysis,
        meta: {
            title: "客户数据分析"
        }
    },
    {
        path: "/customer/clientsManagement",
        component: ClientsManagement,
        meta: {
            title: "拜访管理"
        }
    },
    {
        path: "/customer/record",
        component: Record,
        meta: {
            title: "拜访记录"
        }
    },
    {
        path: "/customer",
        redirect: "/customer/list"
    },
];


export default routes;