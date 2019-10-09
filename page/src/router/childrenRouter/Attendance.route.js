//员工考勤
import {Approval,AttendanceStatistics,Detail,Settings} from "@/views/"
const routes=[
   
    {
        path:"/checkWork/approval",
        component:Approval,
        meta:{
            title:"考勤审批"
        }
    },
    {
        path:"/checkWork/detail",
        component:Detail,
        meta:{
            title:"考勤明细"
        }
    },
    {
        path:"/checkWork/settings",
        component:Settings,
        meta:{
            title:"考勤设置"
        }
    },
    {
        path:"/checkWork/statistics",
        component:AttendanceStatistics,
        meta:{
            title:"考勤统计"
        }
    },
    {
        path:"/checkWork",
        redirect:"/checkWork/approval"
    },
];


export default routes;