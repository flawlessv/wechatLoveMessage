const params = {
  appid: 'wx224187fd118a1a31',
  secret: '67caa4616bf30b601077543ffff37bab',
  touser: 'oFqGO5zE3gXuBGdJa5xs_3MtxddA',//要推送的微信号
  template_id: 'fjkNvM61gFiOUtAhLfNPFhFPdO2aTuRaqOXmU5YjbCA',//推送的模板id
}

/* 上述代码是需要自定义的配置项 */
function verifyEmpty() {
  var flag = ''
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      if (!params[key]) {
        flag = key
        break
      }
    }
  }
  return flag
}

// 校验为空
if (verifyEmpty()) {
  console.error(
    '警告：请完善 “/src/config/config.js中的配置项: ' +
      verifyEmpty() +
      '”的内容,再执行代码！'
  )
  process.exit(0)
}

module.exports = {
  params
}
