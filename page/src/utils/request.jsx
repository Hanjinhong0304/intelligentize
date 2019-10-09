import axios from 'axios';
import { message } from 'antd'; //  引入 element-ui  解构处理 Message 提示组件
const request = axios.create({
    timeout: 2000
});

// const errorTip={
//     "401":"没有权限",
//     "405":""
// }
// 请求之前拦截器
request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            // 可以按照用户要求更改 标识  类似于 token
            authorization: window.sessionStorage.getItem('authorization'),
            "api-request":"yes"
        }
    }
}, (error) => {
    return Promise.reject(error)
})
// 相应之前
request.interceptors.response.use((response) => {
    let { data } = response
    if (data instanceof Blob) {
        return data
    }
    let { code, msg } = data;
    if (code) {
        return data;
    }
    // 报错弹出信息
    message.error(msg)
    return Promise.reject(response.data)
}, (error) => {
    message.error(error.response.data.msg || error.response.statusText)
    return Promise.reject(error)
})

export {
    // 把 request 重命名为 axios
    request as axios
}
