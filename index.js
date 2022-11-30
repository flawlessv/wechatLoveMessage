const { params } = require('./src/config/config')
const getToken = require('./src/getToken/index')
const sendMessage = require('./src/sendMessage/index')
const {getDate,getLoveWords,getWeather}=require('./src/utils')
async function start() {
  let access_token

  try {
    access_token = await getToken(params)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
  const {low,high}=await getWeather()
  const loveWords= await getLoveWords()
  const data={
  nowDate: {
    value: getDate(),
    color: '#2f90b9',
  },
  city: {
    value: '连云港',
    color: '#5d3131',
  },
  low: {
    value: low,
    color: '#7CD47D',
  },
  high: {
    value: high,
    color: '#fcb70a',
  },
  loveDate: {
    value: Math.ceil((Date.now()-new Date('2018-10-1 03:59:00').getTime())/(1000*3600*24)),
    color: '#f0ada0',
  },
  txt: {
    value: loveWords,
    color: '#de1c31',
  },
}

  sendMessage({
    ...params,
    access_token,
    ...data,
  })
    .then((res) => {
      if (res.data && res.data.errcode) {
        console.error('发送失败', res.data)
        return
      }
      console.log('发送成功-请在微信上查看对应消息')
    })
    .catch((err) => console.error('发送失败', err))
}
start()
setInterval(() => {
  start()
}, 1000);
