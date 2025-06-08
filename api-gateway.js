const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Forward requests to Student Microservice
app.use('/student', createProxyMiddleware({
  target: 'http://3.85.135.131:3001',
  changeOrigin: true
}));

// Forward requests to Teacher Microservice
app.use('/teacher', createProxyMiddleware({
  target: 'http://13.219.97.195:3002',
  changeOrigin: true
}));

app.listen(5000, () => {
  console.log("API Gateway is running on port 5000");
});

