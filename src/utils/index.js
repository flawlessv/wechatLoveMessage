const moment = require('moment')
const axios = require('axios')
const getDate=()=>{
    const now=Date.now()
    return moment(now).format('[宝崽~今天是]YYYY[年]MM[月]DD[日]dddd')
}
//获取天气
const getWeather=()=>{
return new Promise((resolve,reject)=>{
axios.get('https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=55846844&appsecret=goET7hhq&cityid=101191006').then(res=>{
    const {data}=res
    resolve({
        low:data.tem2,
        high:data.tem1,
    })
}).catch(err=>reject(err))

})
}
//获取情话
const getLoveWords=()=>{
    return new Promise((resolve,reject)=>{
        axios.get('https://apis.tianapi.com/caihongpi/index?key=2699df74b9fe22014bb21d3f491c82bc').then(res=>{
            
            // https://apis.tianapi.com/pyqwenan/index?key=2699df74b9fe22014bb21d3f491c82bc  
            const {data:{result}}=res
            resolve(result.content)
        })
    }).catch(err=>reject(err))
}
getLoveWords()
module.exports={
    getDate,
    getWeather,
    getLoveWords
}