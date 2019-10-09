import { axios } from "@/utils/request"

export const dowmload = (url, data = {}) => axios({
    url,
    method: "post",
    data,
    responseType: "blob"
})

export const exportXlsx = (formdata) => {
    return axios.post('/management/importXlsx', formdata)
}

export const getXlsx = (limit = 10, pageid = 0) => axios.get('/management/alldata', {
    params: {
        limit,
        pageid
    }
})

//删除员工管理数据
export const removeFile = (data) => axios.post('/management/removedata', data)
//添加员工管理数据   
export const addFile = (data) => axios.post('/management/adddata', data)