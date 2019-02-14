/*
 * @Author: hzq
 * @Date: 2018-11-09 11:07:40
 * @Last Modified by: hzq
 * @Last Modified time: 2018-11-15 09:49:39
 * @文件说明: 图片、视频上传接口
 */
export default [
    {
        // 获取图片上传数据
        name: 'getImageUploadInfo',
        url: '/analyst/getImageUploadInfo',
        methods: 'get'
    },
    {
        // 获取视频上传信息
        name: 'getVideoUploadInfo',
        url: '/analyst/getVideoUploadInfo',
        methods: 'get'
    },
    {
        // 保存视频上传信息
        name: 'saveFileKey',
        url: '/analyst/saveFileKey'
    },
    {
        // 获取视频转码信息
        name: 'getVideoTransCodeInfo',
        url: '/analyst/getVideoTransCodeInfo',
        methods: 'get'
    },
    {
        // 获取视频截图信息
        name: 'getVideoVsampleInfo',
        url: '/analyst/getVideoVsampleInfo',
        methods: 'get'
    },
    {
        // 保存视频封面信息
        name: 'saveVideoThumb',
        url: '/analyst/saveVideoThumb'
    }
]
