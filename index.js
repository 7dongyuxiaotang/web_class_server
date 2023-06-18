// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 托管静态资源

// 调用 app.listen 方法，指定端口号并启动 web 服务器

app.get('/time', (req, res) => {
  res.json({
    code:200,
    time:new Date()
  })
})
const port = 80
app.listen(port, function () {
  console.log('服务器开启成功')
})