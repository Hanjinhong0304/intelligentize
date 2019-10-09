//级别考核
import {DirectorC,DirectorB,DirectorA,Review,TeacherCtoB,TeacherBtoA} from "@/views/"
const routes=[
    {
        path:"/level/directorC",
        component:DirectorC,
        meta:{
            title:"主管考核C级"
        }
    },
    {
        path:"/level/directorB",
        component:DirectorB,
        meta:{
            title:"主管考核B级"
        }
    },
    {
        path:"/level/directorA",
        component:DirectorA,
        meta:{
            title:"主管考核A级"
        }
    },
    {
        path:"/level/review",
        component:Review,
        meta:{
            title:"考核评审"
        }
    },
    {
        path:"/level/teacherCtoB",
        component:TeacherCtoB,
        meta:{
            title:"教师考核C-B级"
        }
    },
    {
        path:"/level/teacherBtoA",
        component:TeacherBtoA,
        meta:{
            title:"教师考核B-A级"
        }
    },
    {
        path:"/level",
        redirect:"/level/directorA"
    },
];


export default routes;
