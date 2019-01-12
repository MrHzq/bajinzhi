# 微信评选平台系统(PC 端)

## 已有配置

1. `vuex`：Vue 的状态管理模式，具体请看`store文件`
1. `scss`：CSS 预处理器
1. Element UI 框架

## 已有插件

1. 封装了`hzqRouter`路由自动生成函数。具体代码请看[hzq-router](https://github.com/MrHzq/hzq-router)
1. 封装了`$api`接口请求方法，可通过`this.$api.**()`调用。具体代码请看[hzq-axios](https://github.com/MrHzq/hzq-axios)
1. 封装了`$tool`工具方法，可通过`this.$tool.**()`调用。具体代码请看[hzq-tool](https://github.com/MrHzq/hzq-tool/blob/master/validator.js)
1. 封装了`$getItem,$setItem,$copy`三个常用方法，可通过`this.$getItem()`等调用。具体代码请看[hzq-tool](https://github.com/MrHzq/hzq-tool/blob/master/index.js)

## 使用方式

1. 生产环境：npm run build
1. 测试环境：npm run test
1. 本地环境：npm run dev
