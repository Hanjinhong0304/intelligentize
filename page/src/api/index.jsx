import {axios} from "@/utils/request";
//用户登录
export  const userInfo=(data)=>axios.post("/user/login",{...data})
