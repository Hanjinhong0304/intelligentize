//管理助手
import {SummaryData,CustomerData,ExecutiveRanking,TeacherRanking} from "@/views/"
const routes=[
    
    {
        path:"/assistant/summaryData",
        component:SummaryData,
        meta:{
            title:"考勤数据汇总"
        }
    },
    {
        path:"/assistant/customerData",
        component:CustomerData,
        meta:{
            title:"客户数据分析"
        }
    },
    {
        path:"/assistant/executiveRanking",
        component:ExecutiveRanking,
        meta:{
            title:"主管竞争力排名"
        }
    },
    {
        path:"/assistant/teacherRanking",
        component:TeacherRanking,
        meta:{
            title:"教师学习排名"
        }
    },
    {
        path:"/assistant",
        redirect:"/assistant/summaryData"
    },
];


export default routes;