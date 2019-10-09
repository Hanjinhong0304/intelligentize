import Mock from 'mockjs'

const section=['财务部','法务部','技术部','人事部','公关部','后勤部','保卫部','监察部']
const week=['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
const duty=['程序开发','设计','PHP开发','软件工程经理','数据架构师']
const attendancegroup=['默认考勤组',0,1,2,3]
const state=['按时打卡,未迟到','迟到']
//考勤统计
export const Attendance=Mock.mock({
    "list|20":[
        {
            name:'@cname',//名字
            "branch|1":section, //部门
            time:'@date("2019-MM-dd")',
            total:20,//总人数
            'week|1':week,//星期几
            abnormal:0,//考勤异常人数
            thing:'好',
            "jobnumber|1-1000":200,//工号
            'duty|1':duty,
            "attendancegroup|1":attendancegroup,//考勤组
            signIntime:'10:00',
            local:'前台',//签到地点
            "state|1":state,
            pic:"暂无"
        }
    ]
})