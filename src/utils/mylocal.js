// 设置local
function setLocal(key,value){
    window.localStorage.setItem(key,JSON.stringify(value))
}
// 获取local
function getLocal(key){
return JSON.parse(window.localStorage.getItem(key))
}
// 删除local
function removeLocal(key){
window.localStorage.removeItem(key)
}

// 暴露出去-按需暴露
export {setLocal,getLocal,removeLocal}
