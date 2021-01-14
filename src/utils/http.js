/*
 * @Author: your name
 * @Date: 2021-01-03 16:27:03
 * @LastEditTime: 2021-01-04 17:36:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /management/pc-management/src/utils/request.js
 */

// 导入axios
import axios from 'axios'

let instance = axios.create({
  //baseURL: "http://samoyed-mall.cezhiqiu.cn",
  transformResponse: [function (data) {
      return JSON.parse(data);
  }]
})

// 再创建一个axios实例,去发送请求到服务器更新token
// let tokenInstance = axios.create({
//   baseURL: "http://samoyed-mall.cezhiqiu.cn/",
// })

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    console.log('-------------------请求拦截器----------------')
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

//   响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
},
  async function (error) {
    console.log('----------------响应拦截器----------------');
    console.dir(error);
    return Promise.reject(error);
  });

//   暴露axios 实例
export default instance;
