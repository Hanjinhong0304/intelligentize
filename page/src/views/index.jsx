import loadable from "react-loadable";
// ******************************************** //
//Loading
import Loading from "@/components/Loading/index";


//级别考核
//主管考核C级
export const DirectorC = loadable({
    loader:()=>import("./Assessment/DirectorC/index"),
    loading:Loading
});
//主管考核B级
export const DirectorB = loadable({
    loader:()=>import("./Assessment/DirectorB/index"),
    loading:Loading
});
//主管考核A级
export const DirectorA = loadable({
    loader:()=>import("./Assessment/DirectorA/index"),
    loading:Loading
});
//考核评审
export const Review = loadable({
    loader:()=>import("./Assessment/Review/index"),
    loading:Loading
});
//教师考核C-B级
export const TeacherCtoB = loadable({
    loader:()=>import("./Assessment/TeacherCtoB/index"),
    loading:Loading
});
//教师考核B-A级
export const TeacherBtoA = loadable({
    loader:()=>import("./Assessment/TeacherBtoA/index"),
    loading:Loading
});

// ******************************************** //
//管理助手
//考勤数据汇总
export const SummaryData = loadable({
    loader:()=>import("./Assistant/SummaryData/index"),
    loading:Loading
});
//客户数据分析
export const CustomerData = loadable({
    loader:()=>import("./Assistant/CustomerData/index"),
    loading:Loading
});
//主管竞争力排名
export const ExecutiveRanking = loadable({
    loader:()=>import("./Assistant/ExecutiveRanking/index"),
    loading:Loading
});
//教师学习排名
export const TeacherRanking = loadable({
    loader:()=>import("./Assistant/TeacherRanking/index"),
    loading:Loading
});

// ******************************************** //
//积分管理
//积分审核
export const Audit = loadable({
    loader:()=>import("./Integral/Audit/index"),
    loading:Loading
});
//积分兑换
export const Exchange = loadable({
    loader:()=>import("./Integral/Exchange/index"),
    loading:Loading
});
//积分上报
export const Report = loadable({
    loader:()=>import("./Integral/Report/index"),
    loading:Loading
});
//积分统计
export const Statistics = loadable({
    loader:()=>import("./Integral/Statistics/index"),
    loading:Loading
});

// ******************************************** //
//客户管理
//客户列表
export const List = loadable({
    loader:()=>import("./Clients/List/index"),
    loading:Loading
});
//体能老师管理 
export const PhysicalManagement = loadable({
    loader:()=>import("./Clients/PhysicalManagement/index"),
    loading:Loading
});
//客户审核
export const ClientsAudit = loadable({
    loader:()=>import("./Clients/Audit/index"),
    loading:Loading
});
//客户维护
export const Care = loadable({
    loader:()=>import("./Clients/Care/index"),
    loading:Loading
});
//客户数据分析
export const DataAnalysis = loadable({
    loader:()=>import("./Clients/DataAnalysis/index"),
    loading:Loading
});
//拜访管理
export const ClientsManagement = loadable({
    loader:()=>import("./Clients/Management/index"),
    loading:Loading
});
//拜访记录
export const Record = loadable({
    loader:()=>import("./Clients/Record/index"),
    loading:Loading
});

// ******************************************** //
//首页
export const Home = loadable({
    loader:()=>import("./Home/index"),
    loading:Loading
});
// ******************************************** //
//入口
export const Main = loadable({
    loader:()=>import("./Main/index"),
    loading:Loading
});
// ******************************************** //
//登录
export const Login = loadable({
    loader:()=>import("./Login/index"),
    loading:Loading
});

// ******************************************** //
//亚太学院
//考勤数据汇总
export const CollegeSummaryData = loadable({
    loader:()=>import("./InstituteCollege/SummaryData/index"),
    loading:Loading
});
//客户数据分析
export const CollegeCustomerData = loadable({
    loader:()=>import("./InstituteCollege/CustomerData/index"),
    loading:Loading
});
//主管竞争力排名
export const CollegeExecutiveRanking = loadable({
    loader:()=>import("./InstituteCollege/ExecutiveRanking/index"),
    loading:Loading
});
//教师学习排名
export const CollegeTeacherRanking = loadable({
    loader:()=>import("./InstituteCollege/TeacherRanking/index"),
    loading:Loading
});


// ******************************************** //
//员工管理
//档案管理
export const Archives = loadable({
    loader:()=>import("./Management/Archives/index"),
    loading:Loading
});
//分配管理
export const Distribution = loadable({
    loader:()=>import("./Management/Distribution/index"),
    loading:Loading
});
//课程管理
export const Course = loadable({
    loader:()=>import("./Management/Course/index"),
    loading:Loading
});
//代理费管理
export const Agency = loadable({
    loader:()=>import("./Management/Agency/index"),
    loading:Loading
});
//生日提醒
export const Birthday = loadable({
    loader:()=>import("./Management/Birthday/index"),
    loading:Loading
});
//薪酬管理
export const Salary = loadable({
    loader:()=>import("./Management/Salary/index"),
    loading:Loading
});
//离职管理
export const Dimission = loadable({
    loader:()=>import("./Management/Dimission/index"),
    loading:Loading
});

// ******************************************** //
//员工考勤
//考勤审批
export const Approval = loadable({
    loader:()=>import("./Attendance/Approval/index"),
    loading:Loading
});
//考勤统计
export const AttendanceStatistics = loadable({
    loader:()=>import("./Attendance/Statistics/index"),
    loading:Loading
});
//考勤明细
export const Detail = loadable({
    loader:()=>import("./Attendance/Detail/index"),
    loading:Loading
});
//考勤设置
export const Settings = loadable({
    loader:()=>import("./Attendance/Settings/index"),
    loading:Loading
});


