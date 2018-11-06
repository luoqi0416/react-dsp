import axios from "axios";
import Vue from "vue";
import cookie from "./cookie";

//Vue的原型上定义方法---有可能被覆盖
// Vue.prototype.$http=axios.create({
//     timeout:3000
// });

//定义Vue插件
const instance = axios.create({
    timeout: 3000,
    baseURL:"http://localhost:3000"//配置默认的基准路径
});
//请求头--- 添加请求拦截器
instance.interceptors.request.use((config) => {
    let token = cookie.getCookie("token");
    if (token) {
        config.headers.token = token;//个人信息的token挂载在请求头上
    }
    return config;
});
//响应头--添加响应拦截器
instance.interceptors.response.use(function(response){
    //响应数据前的操作
    if(response.status===200){
        return response.data;
    }else{
        return response;
    }
})

let httpPlugin = {
    install() {
        //向Vue原型追加$http属性，值为axios的一个实例
        Object.defineProperty(Vue.prototype, "$http", {
            value: instance
        })
    }
}

export default httpPlugin;