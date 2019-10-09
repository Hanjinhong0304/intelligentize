import {observable,action} from "mobx";
import {userInfo} from "@/api/"
class getUserInfo {
    @observable userInfo={}
    @action.bound
    async userInfo_action(option){
        let {data}=await userInfo(option);
        window.sessionStorage.setItem("authorization",data.token)
        window.sessionStorage.setItem("userinfo",JSON.stringify(data))
        this.userInfo=data; 
    }
}

export default new getUserInfo()
