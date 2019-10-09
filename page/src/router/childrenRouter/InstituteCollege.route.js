//亚太学院
import {CollegeSummaryData,CollegeCustomerData,CollegeExecutiveRanking,CollegeTeacherRanking} from "@/views/"
const routes=[
    
    {
        path:"/college/summaryData",
        component:CollegeSummaryData,
        meta:{
            title:"考勤数据汇总"
        }
    },
    {
        path:"/college/customerData",
        component:CollegeCustomerData,
        meta:{
            title:"客户数据分析"
        }
    },
    {
        path:"/college/executiveRanking",
        component:CollegeExecutiveRanking,
        meta:{
            title:"主管竞争力排名"
        }
    },
    {
        path:"/college/teacherRanking",
        component:CollegeTeacherRanking,
        meta:{
            title:"教师学习排名"
        }
    },
    {
        path:"/college",
        redirect:"/college/summaryData"
    },
];


export default routes;