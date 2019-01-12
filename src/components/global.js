import Vue from 'vue'

// 找到components文件夹下以.vue命名的文件
const RC = require.context('.', false, /\.vue$/)

RC.keys().forEach(fileName => {
    const componentConfig = RC(fileName)

    // 因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
    const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

    Vue.component(componentName, componentConfig.default || componentConfig)
})
