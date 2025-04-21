const express = require('express');
const app = express();
const port = 3000;

// 定义根路径的路由，返回 "hello express"
app.get('/', (req, res) => {
  res.send('hello express');
});

// 启动服务器并监听 3000 端口
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});