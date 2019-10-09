//用来获取用户信息
export const getUserInfo=()=>JSON.parse(window.sessionStorage.getItem("userinfo"))