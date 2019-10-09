//积分管理
import {Audit,Exchange,Report,Statistics} from "@/views/"
const routes=[
    
    {
        path:"/integral/audit",
        component:Audit,
        meta:{
            title:"积分审核"
        }
    },
    {
        path:"/integral/exchange",
        component:Exchange,
        meta:{
            title:"积分兑换"
        }
    },
    {
        path:"/integral/report",
        component:Report,
        meta:{
            title:"积分上报"
        }
    },
    {
        path:"/integral/statistics",
        component:Statistics,
        meta:{
            title:"积分统计"
        }
    },
    {
        path:"/integral",
        redirect:"/integral/audit"
    },
];


export default routes;