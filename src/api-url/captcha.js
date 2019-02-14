/*
 * @Author: hzq
 * @Date: 2019-01-22 14:18:00
 * @Last Modified by: hzq
 * @Last Modified time: 2019-01-22 14:19:13
 * @文件说明: 验证码接口
 */
export default [
    // 获取验证码
    {
        name: 'getCaptcha',
        url: '/getcaptcha'
    },
    // 校验验证码
    {
        name: 'verifyCaptcha',
        url: '/verifycaptcha'
    }
]
