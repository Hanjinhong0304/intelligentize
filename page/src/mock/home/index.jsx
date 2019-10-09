import Mock from 'mockjs'
//列表内容
export const home=Mock.mock({
    "homeData|3":[
        {
            "list|3-5":[
                {
                    "key|+1": 1,
                    "time|1": ["09:00-11:00","10:00-12:00"],
                    "curriculum|1": ["体育课","数学课"],
                    "Garplace|1": ["蓝天幼儿园","培贤幼儿园"],
                    "class|1": ["大班-苗苗班","小班-苗苗班"],
                }
            ]
        }
    ]
})
//表头
export const columns=[
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width:"25%",
        align:"center"
    },
    {
        title: '课程/活动',
        dataIndex: 'curriculum',
        key: 'curriculum',
        width:"25%",
        align:"center"
    },
    {
        title: '园所',
        dataIndex: 'Garplace',
        key: 'Garplace',
        width:"25%",
        align:"center"
    },
    {
        title: '班级',
        key: 'class',
        dataIndex: 'class',
        width:"25%",
        align:"center"
    }]