//考勤统计中 多个复选框数据
export const header = [
    {
        name: "全部显示"
    }, {
        name: "正常打卡人数"
    }, {
        name: "迟到人数"
    }, {
        name: "早退人数"
    }, {
        name: "旷工人数"
    }, {
        name: "脱岗人数"
    }, {
        name: "请假人数"
    }, {
        name: "加班人数"
    }, {
        name: "外出人数"
    }, {
        name: "出差人数"
    },
]
// 考勤统计中 按日期统计数据
export const columns = [
    {
        title: "日期",
        dataIndex: 'time',
        key: "time"
    },
    {
        title: "星期",
        dataIndex: 'week',
        key: "week"
    },
    {
        title: "应考勤人数",
        dataIndex: 'total',
        key: "total1"
    },
    {
        title: '考勤正常人数',
        dataIndex: 'total',
        key: "total2"
    },
    {
        title: "考勤异常人数",
        dataIndex: 'abnormal',
        key: 'abnormal'
    },
    {
        title: "",
        width: 300,
    }
]

//考勤统计中 按人员统计数据
export const columnsPerson = [
    {
        title: "姓名",
        dataIndex: 'name',
        key: "name"
    },
    {
        title: "日期",
        dataIndex: 'time',
        key: "time"
    },
    {
        title: "星期",
        dataIndex: 'week',
        key: "week"
    },
    {
        title: "考勤情况",
        dataIndex: 'thing',
        key: "thing",
    }
]


//考勤明细中 table表格数据
export const detailcolumns = [
    {
        title: '部门',
        dataIndex: "branch",
        key: "branch",
    },
    {
        title: "星期",
        dataIndex: 'week',
        key: "week"
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: "name"
    },
    {
        title: "工号",
        dataIndex: 'jobnumber',
        key: "jobnumber"
    },
    {
        title: "职务",
        dataIndex: 'duty',
        key: "duty"
    },
    {
        title: "考勤组",
        dataIndex: 'attendancegroup',
        key: "dattendancegrouputy"
    },
    {
        title: "签到",
        children: [
            {
                title: "时间",
                dataIndex: 'signIntime',
                key: "signIntime"
            },
            {
                title: "地点",
                dataIndex: 'local',
                key: "local"
            },
            {
                title: "照片",
                dataIndex: 'pic',
                key: "pic"
            },
            {
                title: "文字说明",
                dataIndex: 'state',
                key: "state"
            }
        ]
    },
    {
        title: "签退",
        children: [
            {
                title: "时间",
                dataIndex: 'signIntime',
                key: "signIntime"
            },
            {
                title: "地点",
                dataIndex: 'local',
                key: "local"
            },
            {
                title: "照片",
                dataIndex: 'pic',
                key: "pic"
            }
        ]
    }
]

//考勤审计中 table表格数据

export const approvalcolumns = [
    {
        title: "申请时间",
    },
    {
        title: "申请类型"
    },
    {
        title: "申请人",
    },
    {
        title: "申请内容",
    },
    {
        title: "操作",
    }
]

//考勤统计 echarts处理x轴坐标
const addZero = (arg) => {
    if ((arg + "").length > 1) {
        return arg + ""
    } else {
        return "0" + arg
    }
}
export const getData = () => {
    var date = new Date();
    var year = date.getFullYear();
    var mouth = date.getMonth() + 1;
    var totalDays = new Date(year, mouth, 0).getDate();
    var arr = [];
    let mouthZero = addZero(mouth)
    for (let i = 1; i < totalDays + 1; i++) {
        let res = addZero(i)
        let result = `${mouthZero}-${res}`
        arr.push(result)
    }
    return arr
}