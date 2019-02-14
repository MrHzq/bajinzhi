/*
 * @Author: hzq
 * @Date: 2018-11-07 15:54:37
 * @Last Modified by: hzq
 * @Last Modified time: 2019-02-13 13:49:28
 * @文件说明: 编辑器组件
 */
<template>
    <div class='h-editor'>
        <quill-editor ref="quillEditorDom" class="quillEditorDom" :options="editorOption" @change="onEditorChange($event)">
            <div ref="toolbar" id="toolbar" slot="toolbar">
                <span class="ql-formats">
                    <button type="button" class="ql-bold" text="加粗"></button>
                    <button type="button" class="ql-header" value="1" text="标题1"></button>
                    <button type="button" class="ql-header" value="2" text="标题2"></button>
                    <button type="button" class="ql-italic" text="斜体"></button>
                    <button type="button" class="ql-underline" text="下划线"></button>
                    <select class="ql-color" text="字体颜色">
                        <option selected="selected"></option>
                        <option value="#e60000"></option>
                        <option value="#ff9900"></option>
                        <option value="#ffff00"></option>
                        <option value="#008a00"></option>
                        <option value="#0066cc"></option>
                        <option value="#9933ff"></option>
                        <option value="#ffffff"></option>
                        <option value="#facccc"></option>
                        <option value="#ffebcc"></option>
                        <option value="#ffffcc"></option>
                        <option value="#cce8cc"></option>
                        <option value="#cce0f5"></option>
                        <option value="#ebd6ff"></option>
                        <option value="#bbbbbb"></option>
                        <option value="#f06666"></option>
                        <option value="#ffc266"></option>
                        <option value="#ffff66"></option>
                        <option value="#66b966"></option>
                        <option value="#66a3e0"></option>
                        <option value="#c285ff"></option>
                        <option value="#888888"></option>
                        <option value="#a10000"></option>
                        <option value="#b26b00"></option>
                        <option value="#b2b200"></option>
                        <option value="#006100"></option>
                        <option value="#0047b2"></option>
                        <option value="#6b24b2"></option>
                        <option value="#444444"></option>
                        <option value="#5c0000"></option>
                        <option value="#663d00"></option>
                        <option value="#666600"></option>
                        <option value="#003700"></option>
                        <option value="#002966"></option>
                        <option value="#3d1466"></option>
                        <option value="#312345"></option>
                    </select>
                    <select class="ql-align" text="对齐方式">
                        <option selected="selected"></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                    </select>
                    <!-- <button type="button" class="ql-blockquote" text="引用块"></button> -->
                </span>
                <span class="ql-formats">
                    <button type="button" class="ql-list" value="ordered" text="有序列表"></button>
                    <button type="button" class="ql-list" value="bullet" text="无序列表"></button>
                </span>
                <!-- <span class="ql-formats">
                    <select class="ql-header" text="标题">
                        <option selected="selected"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                    </select>
                </span> -->
                <span class="ql-formats">
                    <button type="button" class="ql-link" text="插入链接" @click="insertLink('insert')"></button>
                    <button type="button" style="position: relative;" text="上传图片">
                        <el-upload ref="imageUpDom" class="imageUpClass" action="https://up.qbox.me" accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.GIF,.webp" :data="qnUpData" :show-file-list="false" :before-upload='imageBeforeUp' :on-success='imageUpOk' :on-error="imageUpErr">
                        </el-upload>
                        <svg viewBox="0 0 18 18">
                            <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
                            <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
                            <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
                        </svg>
                    </button>
                    <!-- <button type="button" style="position: relative;" text="上传视频" @click="uploadVideo">
                        <svg viewBox="0 0 18 18">
                            <rect class="ql-stroke" height="12" width="12" x="3" y="3"></rect>
                            <rect class="ql-fill" height="12" width="1" x="5" y="3"></rect>
                            <rect class="ql-fill" height="12" width="1" x="12" y="3"></rect>
                            <rect class="ql-fill" height="2" width="8" x="5" y="8"></rect>
                            <rect class="ql-fill" height="1" width="3" x="3" y="5"></rect>
                            <rect class="ql-fill" height="1" width="3" x="3" y="7"></rect>
                            <rect class="ql-fill" height="1" width="3" x="3" y="10"></rect>
                            <rect class="ql-fill" height="1" width="3" x="3" y="12"></rect>
                            <rect class="ql-fill" height="1" width="3" x="12" y="5"></rect>
                            <rect class="ql-fill" height="1" width="3" x="12" y="7"></rect>
                            <rect class="ql-fill" height="1" width="3" x="12" y="10"></rect>
                            <rect class="ql-fill" height="1" width="3" x="12" y="12"></rect>
                        </svg>
                    </button> -->
                </span>
                <span class="ql-formats">
                    <button type="button" class="ql-clean" text="清除格式"></button>
                </span>
                <!-- <p class="autoSaveText" :style="{right:isFixed?'2.8rem':0}" v-if="needAutoSave&&$store.state.currTime">{{$store.state.currTime}} 草稿已保存</p> -->
                <!-- <template v-if="isFixed">
                    <div class="publishBtn" v-if="canPublish" @click="$emit('publishFun')">发布文章</div>
                    <div class="noPublishBtn" v-else>发布文章</div>
                </template> -->
            </div>
        </quill-editor>
        <!-- 插入链接-弹窗 -->
        <el-dialog class="linkDialog" title="插入链接" :visible.sync="linkDialog" center>
            <el-form ref="linkForm" :model="linkForm" :rules="linkRules" @keyup.enter.native="confirmForm">
                <el-form-item prop="name">
                    <h-input v-model="linkForm.name" placeholder="输入链接文本" autocomplete="off" autofocus maxlength="20">
                        <i slot="prefix" class="iconfont icon-wenben"></i>
                    </h-input>
                </el-form-item>
                <el-form-item prop="link">
                    <h-input v-model="linkForm.link" placeholder="输入链接地址，以http://、https://开头" autocomplete="off">
                        <i slot="prefix" class="iconfont icon-lianjie"></i>
                    </h-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-row :gutter="18">
                    <el-col :span="12">
                        <h-button @click.native="cancelForm(false)" size="large" full>取消</h-button>
                    </el-col>
                    <el-col :span="12">
                        <h-button type="primary" @click.native="confirmForm" size="large" full>确认</h-button>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
        <!-- 上传视频-弹窗 -->
        <el-dialog class="videoDialog" title="本地视频上传" :visible.sync="videoDialog" :close-on-press-escape="false" :close-on-click-modal="false" center @close="closeVideoDialog">
            <el-upload v-if="videoUpStatus==='noup'" ref="videoUpDom" class="videoUpClass" drag accept=".avi,.dat,.mkv,.flv,.vob,.mp4,.3gp,.mov,.m4v,.ogg,.wmv,.rmvb" :show-file-list="false" :http-request="videoRequest">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">选择要上传的文件</div>
            </el-upload>
            <div v-else-if="videoUpStatus==='cover'" class="videoCoverClass">
                <div v-for="(i,index) in videoCover.keys" :key="i" :class="{coverChoosed:index===coverIndex}" :style="{backgroundImage:'url('+videoCover.url+'/'+i+')'}" @click="coverIndex=index"></div>
                <p class="coverTips">视频转码完成，请选择封面</p>
            </div>
            <div v-else-if="videoUpStatus==='upErr'" class="videoUpErrClass">
                <p class="clickAgain" @click="videoAgainUp">点击重试</p>
                <p class="errTips">视频上传失败</p>
            </div>
            <div v-else-if="videoUpStatus==='codeErr'" class="videoCodeErrClass">
                <div class="errReason">
                    <p>失败原因</p>
                    <p>{{codeErrTxt}}</p>
                </div>
                <p class="errTips">视频转码失败</p>
            </div>
            <div v-else class="videoProcessClass">
                <el-progress :percentage="videoPercentage"></el-progress>
                <div class="processText" v-if="videoUpStatus==='coding'">视频转码中，请稍后...</div>
                <div class="processText" v-else>视频上传中 {{videoPercentage}}%</div>
            </div>
            <div v-if="videoUpStatus!=='noup'" slot="footer">
                <h-button v-if="videoUpStatus==='cover'" @click.native="coverConfirm">确定</h-button>
                <h-button v-else @click.native="cancelVideo">取消</h-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    import * as qiniu from 'qiniu-js'
    export default {
        name: 'h-editor',
        components: { 'quill-editor': quillEditor },
        props: {
            height: {
                // 编辑器输入部分的高度
                type: String,
                default: '670'
            },
            content: {
                // 编辑器输入的内容
                type: String,
                default: ''
            }
            // canPublish: {
            //     // 是否能发布
            //     type: Boolean,
            //     default: false
            // },
            // needAutoSave: {
            //     // 是否显示保存时间
            //     type: Boolean,
            //     default: false
            // }
        },
        data() {
            return {
                // 是否为第一次进入
                firstIn: 1,
                // quillDom元素
                quillDom: '',
                // 当前编辑器光标位置
                currQuillIndex: null,
                // 是否显示【插入链接】弹窗
                linkDialog: false,
                // 插入链接弹窗-form表单数据
                linkForm: {
                    name: '',
                    link: ''
                },
                // 插入链接弹窗-form表单验证规则
                linkRules: {
                    name: [
                        {
                            required: true,
                            message: '输入链接文本',
                            trigger: 'blur'
                        }
                    ],
                    link: [
                        {
                            required: true,
                            message: '输入链接地址',
                            trigger: 'blur'
                        },
                        {
                            pattern: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
                            message: '请输入正确的链接地址',
                            trigger: 'blur'
                        }
                    ]
                },
                // 当前所有的占位图片数组
                imgLoadArr: [],
                // 当前占位图片数组的下标
                imgLoadIndex: [],
                // 图片上传所需信息-后台返回的
                imageUpInfo: {},
                // 视频上传所需信息-后台返回的
                videoUpInfo: {},
                // 是否显示【上传视频】弹窗
                videoDialog: false,
                // 当前视频进度-默认为null，表示未上传视频
                videoPercentage: null,
                // 视频上传状态：未上传(noup)、上传中(up)、上传失败(upErr)、转码中(coding)、转码失败(codeErr)、选封面(cover)、转码失败(codeerr)
                videoUpStatus: 'noup',
                // 视频上传成功保存的一系列信息
                videoRes: {},
                // 转码失败原因提示
                codeErrTxt: '',
                // 视频封面图数据
                videoCover: {
                    keys: [],
                    url: 'https://image.dzqqsc.com'
                },
                // 视频上传的文件
                videoFile: null,
                // 当前选中的封面下标
                coverIndex: 0,
                // 图片上传七牛所需的参数
                qnUpData: {},
                // 编辑器-参数设置
                editorOption: {
                    placeholder: '请输入',
                    modules: {
                        toolbar: '#toolbar'
                    }
                },
                // 七牛-观察者
                qnObservable: null,
                // 七牛-订阅者
                qnSubscription: null,
                // WebSocket对象
                ws: null
            }
        },
        watch: {
            content(val) {
                if (this.firstIn === 1) {
                    let qlEditor = this.$refs.quillEditorDom.$refs.editor.firstChild
                    qlEditor.innerHTML = this.content
                    this.firstIn++
                }
            }
        },
        methods: {
            // 编辑器change事件
            onEditorChange(e) {
                this.$emit('update:content', e.html)
            },
            // 插入链接弹窗-确认事件
            confirmForm() {
                this.$refs.linkForm.validate(valid => {
                    if (valid) {
                        let form = this.$copy(this.linkForm)
                        if (
                            !form.link.match('https://') &&
                            !form.link.match('http://')
                        ) {
                            form.link = 'http://' + form.link
                        }
                        if (form.length) {
                            // 编辑链接-删除之前的链接
                            this.quillDom.deleteText(form.start, form.length)
                        }
                        // 往编辑器插入当前的链接信息
                        this.quillDom.insertText(
                            this.currQuillIndex,
                            form.name,
                            'link',
                            form.link
                        )
                        this.cancelForm(this.currQuillIndex + form.name.length)
                    }
                })
            },
            // 插入链接弹窗-取消事件
            cancelForm(length) {
                this.linkDialog = false
                this.linkForm = { name: '', link: '' }
                // 将编辑器的光标调整到插入的文字后面
                if (length) this.quillDom.setSelection(length)
            },
            // 插入\编辑 链接事件
            insertLink(flag) {
                this.linkDialog = true
                if (flag === 'insert') {
                    this.getQuillIndex() // 插入-仅仅获取当前要插入的光标位置
                } else {
                    // 编辑链接-获取到要编辑的链接信息
                    let Leaf = this.quillDom.getLeaf(this.currQuillIndex)
                    if (Leaf[0].parent.domNode.nodeName !== 'A') {
                        this.currQuillIndex++
                        Leaf = this.quillDom.getLeaf(this.currQuillIndex)
                    }
                    let [leaf, offset] = Leaf
                    this.currQuillIndex -= offset
                    this.linkForm = {
                        start: this.currQuillIndex,
                        name: leaf.text,
                        length: leaf.text.length,
                        link: leaf.parent.domNode.getAttribute('href')
                    }
                }
                this.$nextTick(() => this.$refs.linkForm.clearValidate())
            },
            // 图片上传前操作-给qnUpData赋值
            imageBeforeUp(file) {
                // 插入占位图片
                this.quillInsert('load')
                this.qnUpData.token = this.imageUpInfo.token
                this.qnUpData.key = this.imageUpInfo.fileKey
                this.qnUpData.file = file
            },
            // 图片上传成功回调
            imageUpOk(res) {
                let index = this.imgLoadArr.findIndex(val => {
                    return 'imgId' + val.id === res['x:id']
                })
                // 删除对应的占位图片
                this.quillDom.deleteText(this.imgLoadArr[index].index, 1)
                // 插入上传成功的图片
                this.quillInsert(
                    'success',
                    this.imageUpInfo.url + '/' + res.key,
                    this.imgLoadArr[index].index
                )
                // 删除占位图数组里面的值
                this.imgLoadArr.splice(index, 1)
                // 清空已上传的文件列表
                this.$refs.imageUpDom.clearFiles()
                // 获取图片上传所需的信息
                this.$api.getImageUploadInfo().then(res => {
                    this.imageUpInfo = res.data
                })
            },
            // 图片上传失败回调
            imageUpErr() {
                this.quillInsert('fail')
            },
            // 将图片插入编辑器里面
            quillInsert(flag, url, index) {
                if (flag === 'load') {
                    // 上传中，插入占位图片
                    // 获取光标所在位置
                    index = this.getQuillIndex()
                    url =
                        'https://image.dzqqsc.com/102334_e7f88afdf0a3713ae52177b39b5a3226'
                    // 插入图片
                    this.quillDom.insertEmbed(index, 'image', url)
                    this.imgLoadIndex.push(index)
                    let id = Number(new Date())
                    this.qnUpData['x:id'] = 'imgId' + id
                    this.imgLoadArr.push({ id, index })
                } else if (flag === 'success') {
                    // 上传成功，插入上传的图片
                    // 插入图片
                    this.quillDom.insertEmbed(index, 'image', url)
                    // 将编辑器的光标调整到最后
                    this.quillDom.setSelection(index + 1)
                    // 编辑器插入换行符
                    this.quillDom.insertText(index + 1, '\n')
                } else {
                    // 上传失败，插入失败的图片
                    url =
                        'https://image.dzqqsc.com/102334_1916217b5479496a692ef6fa47be0660'
                    // 插入图片
                    this.quillDom.insertEmbed(index, 'image', url)
                }
            },
            // 获取光标位置
            getQuillIndex() {
                if (this.currQuillIndex === null) {
                    this.quillDom.focus()
                    this.quillDom.setSelection(this.quillDom.getLength() - 1)
                }
                this.quillDom.focus()
                this.currQuillIndex = this.quillDom.getSelection().index
                return this.currQuillIndex
            },
            // 编辑器上传视频点击事件
            uploadVideo() {
                this.videoFile = null
                this.getQuillIndex()
                this.videoDialog = true
                this.videoUpStatus = 'noup'
            },
            // 上传视频弹窗-取消事件
            cancelVideo() {
                if (this.videoUpStatus === 'up') {
                    this.qnSubscription.unsubscribe() // 取消上传视频
                }
                this.videoFile = null
                this.videoUpStatus = 'noup'
                if (this.ws) this.ws.close()
            },
            // 关闭上传弹窗事件
            closeVideoDialog() {
                if (this.qnSubscription) {
                    this.qnSubscription.unsubscribe() // 取消上传视频
                }
                if (this.ws) this.ws.close()
            },
            // 自定义上传-使用七牛的方式上传视频
            videoRequest(obj) {
                if (this.videoFile) obj = this.videoFile
                else this.videoFile = obj
                this.videoPercentage = 0
                this.videoUpStatus = 'up'
                // 获取视频上传所需的信息
                this.$api.getVideoUploadInfo().then(res => {
                    if (res.code === 0) {
                        this.videoUpInfo = res.data
                        this.qnObservable = qiniu.upload(
                            obj.file,
                            this.videoUpInfo.fileKey,
                            this.videoUpInfo.token
                        )
                        // 开始上传
                        this.qnSubscription = this.qnObservable.subscribe(
                            this.qnNext,
                            this.qnError,
                            this.qnComplete
                        )
                    } else this.videoUpStatus = 'noup'
                }, () => (this.videoUpStatus = 'noup'))
            },
            // 七牛-获取上传进度信息
            qnNext(res) {
                let num = Number(res.total.percent.toFixed(0))
                this.videoPercentage = num >= 100 ? 99 : num
            },
            // 七牛-获取上传错误信息
            qnError(res) {
                this.videoUpStatus = 'upErr'
            },
            // 七牛-获取上传完成信息
            qnComplete(videRes) {
                this.videoUpStatus = 'coding'
                this.qnSubscription = null
                this.$api.saveFileKey({ ...videRes, type: 1 }).then(res => {
                    if (res.code === 0) {
                        this.videoRes = Object.assign({}, videRes, res.data)
                        // this.videoTransCode()
                        this.initWebScoket(1)
                    } else this.videoUpStatus = 'upErr'
                }, () => (this.videoUpStatus = 'upErr'))
            },
            // 视频上传失败，重新上传点击事件
            videoAgainUp() {
                this.videoRequest()
            },
            // WebScoket设置
            initWebScoket(num) {
                let { video_id } = this.videoRes
                let url = 'wss://ws-dev.beone.app'
                console.log(process.env.PATH_ENV)
                if (process.env.PATH_ENV === 'prod') {
                    url = 'wss://wss.xkt.one'
                }
                let ws = new WebSocket(url)
                this.ws = ws
                ws.onopen = e => ws.send(video_id)
                ws.onclose = e => (this.ws = null)
                ws.onerror = e => {
                    console.log('WebSocket连接出错次数：' + num)
                    num++
                    if (num > 3) {
                        this.videoUpStatus = 'upErr'
                        this.$message.error('网络异常，请稍后重试')
                    } else this.initWebScoket(num)
                }
                ws.onmessage = res => {
                    let data = JSON.parse(res.data)
                    if (data.status === 'success') {
                        this.videoRes.key = data.key
                        this.videoCover.url = data.url
                        this.videoCover.keys = data.keys
                        this.videoUpStatus = 'cover'
                    } else {
                        this.videoUpStatus = 'codeErr'
                        this.codeErrTxt = data.msg
                    }
                    ws.close()
                }
            },
            // 获取视频转码信息-长循环
            videoTransCode() {
                let { video_id } = this.videoRes
                this.$api.getVideoTransCodeInfo({ video_id }).then(
                    res => {
                        if (this.videoDialog && this.videoUpStatus === 'coding') {
                            let status = res.data.status
                            if (status === 'transCoding') {
                                // 转码中-递归调用
                                this.videoTransCode()
                            } else if (status === 'success') {
                                this.videoRes.key = res.data.key
                                // 转码成功-获取视频封面
                                this.videoVsample()
                            } else {
                                // 转码失败
                                this.videoUpStatus = 'codeErr'
                            }
                        }
                    },
                    () => this.videoTransCode()
                )
            },
            // 获取视频封面-长循环
            videoVsample() {
                let { video_id } = this.videoRes
                this.$api.getVideoVsampleInfo({ video_id }).then(
                    res => {
                        if (this.videoDialog && this.videoUpStatus === 'coding') {
                            if (res.data.status === 'sampling') {
                                this.videoVsample()
                            } else {
                                this.videoCover = res.data
                                this.videoUpStatus = 'cover'
                            }
                        }
                    },
                    () => this.videoVsample()
                )
            },
            // 获取要插入视频的html位置
            getStart(qhtml, currIndex) {
                if (this.quillDom.getLength() === 1) {
                    return { start: 3, newLine: true }
                }
                let [leaf, offset] = this.quillDom.getLeaf(currIndex)
                let _spilt = leaf.parent.domNode.outerHTML.split(leaf.text)[0]
                let leafText = this.$copy(leaf.text || '')
                if (offset === 0) _spilt += leafText
                else _spilt += leafText.substr(0, offset)
                let splitArr = qhtml.split(_spilt)
                let start = 0
                if (splitArr.length > 2) {
                    let textArr = splitArr.map(val => {
                        return val
                            .replace(/<\/video><\/p>/g, '  ')
                            .replace(/<\/video><\/span>|<\/p>/g, ' ')
                            .replace(/<img/g, ' <img')
                            .replace(/<(?:.|\s)*?>/g, '')
                    })
                    let index = 0
                    let sum = 0
                    for (let t = 0, len = textArr.length; t < len; t++) {
                        let _val = textArr[t] + leafText.substr(0, offset)
                        sum += _val.length
                        if (_spilt === '<p><br></p>') {
                            if (_val === '') sum += 1
                        }
                        if (sum === currIndex) {
                            index = t + 1
                            break
                        }
                    }
                    for (let i = 0; i < index; i++) start += splitArr[i].length
                    start += _spilt.length * index
                } else start += splitArr[0].length + _spilt.length
                if (offset === 0) start -= leafText.length
                let newLine = offset === leafText.length
                if (!start) start = qhtml.length - 4
                return { start, newLine }
            },
            // 选择封面后，点击确认事件
            coverConfirm() {
                let { video_id } = this.videoRes
                this.$api
                    .saveVideoThumb({
                        video_id,
                        thumb: this.videoCover.keys[this.coverIndex]
                    })
                    .then(res => {
                        if (res.code === 0) {
                            this.videoUpStatus = 'noup'
                            let url = this.videoUpInfo.url + '/' + this.videoRes.key
                            let poster =
                                this.videoCover.url +
                                '/' +
                                this.videoCover.keys[this.coverIndex]
                            this.videoDialog = false
                            this.coverIndex = 0
                            let video =
                                '<video class="ql-video" controls="controls" poster="' +
                                poster +
                                '" src="' +
                                url +
                                '"></video>'
                            // 插入视频
                            let qlEditor = this.$refs.quillEditorDom.$refs.editor
                                .firstChild
                            let qhtml = qlEditor.innerHTML
                            let currIndex = this.currQuillIndex
                            let { start, newLine } = this.getStart(qhtml, currIndex)
                            qlEditor.innerHTML =
                                qhtml.slice(0, start) + video + qhtml.slice(start)
                            setTimeout(() => {
                                if (newLine) {
                                    // 编辑器插入换行符
                                    this.quillDom.insertText(currIndex + 2, '\n')
                                    // 将编辑器的光标调整到最后
                                    this.quillDom.setSelection(currIndex + 2)
                                } else this.quillDom.setSelection(currIndex + 1)
                            }, 0)
                        } else this.videoUpStatus = 'upErr'
                    }, () => (this.videoUpStatus = 'upErr'))
            }
        },
        mounted() {
            let _q = this.$refs.quillEditorDom
            this.quillDom = _q.quill
            // 设置编辑器输入部分的高度
            _q.$refs.editor.style.height = Number(this.height) - 42 + 'px'
            // 获取图片上传所需的信息
            // this.$api.getImageUploadInfo().then(res => {
            //     this.imageUpInfo = res.data
            // })
            // 链接-添加编辑事件
            document
                .querySelector('.quillEditorDom .ql-action')
                .addEventListener('click', this.insertLink, false)

            // 监听编辑器光标改变事件，将光标赋值给currQuillIndex
            this.quillDom.on('selection-change', range => {
                if (range && range.length === 0) {
                    this.currQuillIndex = range.index
                }
            })

            let top = 0
            // 监听内容改变事件，将光标赋值给currQuillIndex
            this.quillDom.on('editor-change', eventName => {
                // 内容改变，设置滚动条位置不变
                let _top = top
                // setTimeout(() => {
                //     document.documentElement.scrollTop = _top
                // }, 0)
            })
            // let toolbarTop =
            //     this.$refs.toolbar.offsetTop - this.$refs.toolbar.offsetHeight * 3
            // 滚动事件，用于是否固定编辑器工具栏
            // window.onscroll = e => {
            //     if (this.$refs.toolbar) {
            //         top = document.documentElement.scrollTop
            //     }
            // }
        },
        beforeDestroy() {
            if (this.ws) this.ws.close()
        }
    }
</script>

<style lang='scss' scoped>
    .h-editor {
        /deep/ .quill-editor {
            .ql-snow {
                border: 1px solid #dcdfe6;
            }
            .ql-toolbar {
                position: relative;
                display: flex;
                align-items: center;
                // height: 50px;
                padding: 0;
                border-top: 1px solid #dcdfe6;
                border-bottom: none;
                background-color: #fff;
                .ql-formats button,
                .ql-align,
                .ql-color {
                    position: relative;
                    height: 28px;
                    width: 36px;
                    // svg {
                    // width: 28px;
                    // height: 26px;
                    // }
                    &::after {
                        display: none;
                        content: attr(text);
                        position: absolute;
                        top: 35px;
                        left: -30%;
                        z-index: 9999;
                        width: 50px;
                        width: max-content;
                        padding: 5px 8px;
                        font-size: 12px;
                        color: #fff;
                        background-color: rgb(70, 76, 91);
                        border-radius: 4px;
                    }
                    &::before {
                        display: none;
                        content: '';
                        position: absolute;
                        top: 31px;
                        left: 10px;
                        width: 0;
                        height: 0;
                        border-color: transparent;
                        border-style: solid;
                        border-width: 0 5px 5px;
                        border-bottom-color: rgb(70, 76, 91);
                    }
                    &:hover {
                        &::after,
                        &::before {
                            display: block;
                        }
                    }
                }
                .ql-color {
                    .ql-picker-options {
                        width: 160px;
                        padding: 8px;
                        border: none;
                        .ql-picker-item {
                            width: 18px;
                            height: 18px;
                            margin: 3px;
                        }
                    }
                }
                .ql-align {
                    .ql-picker-options {
                        padding: 4px;
                        border: none;
                        .ql-picker-item {
                            width: auto;
                            height: auto;
                        }
                    }
                }
                .ql-expanded {
                    .ql-picker-label {
                        outline: none;
                        border: none;
                        svg {
                            * {
                                stroke: #06c;
                            }
                        }
                    }
                }

                .imageUpClass {
                    position: absolute;
                    z-index: 2222;
                    width: 100%;
                    height: 100%;
                    .el-upload {
                        width: 100%;
                        height: 100%;
                    }
                }
                // .autoSaveText {
                //     position: absolute;
                //     font-size: 14px;
                //     color: #bbb;
                // }
                // .publishBtn {
                //     position: absolute;
                //     right: 0;
                //     display: inline-block;
                //     width: 2.4rem;
                //     margin: 0;
                //     padding: 0.225rem 0.375rem;
                //     font-size: 0.35rem;
                //     font-weight: 500;
                //     color: #409eff;
                //     background: #ecf5ff;
                //     border-radius: 3px;
                //     transition: 0.1s;
                //     box-sizing: border-box;
                //     outline: 0;
                //     border: 1px solid #b3d8ff;
                //     text-align: center;
                //     line-height: 1;
                //     white-space: nowrap;
                //     -webkit-appearance: none;
                //     cursor: pointer;
                //     &:hover {
                //         background: #409eff;
                //         border-color: #409eff;
                //         color: #fff;
                //     }
                // }
                // .noPublishBtn {
                //     @extend .publishBtn;
                //     background-color: #fff;
                //     border-color: #ebeef5;
                //     color: #c0c4cc;
                //     cursor: not-allowed;
                //     &:hover {
                //         background-color: #fff;
                //         border-color: #ebeef5;
                //         color: #c0c4cc;
                //     }
                // }
            }
            .ql-container {
                padding: 30px 10px;
                // border-bottom: 0px;
                .ql-editor {
                    padding: 0;
                    font-size: 16px;
                    line-height: 26px;
                    color: #222;
                    // 编辑器输入部分-设置placeholder的样式
                    &::before {
                        left: 10px;
                        // font-size: 18px;
                        color: #b3b3b3;
                        font-style: normal;
                    }
                    p {
                        margin: 22px 0;
                        color: #222;
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                    span {
                        color: #222;
                    }
                    blockquote {
                        margin: 22px 0;
                        color: #919191;
                        padding-left: 13px;
                        border-left: 3px solid #d8d8d8;
                    }
                    h1 {
                        margin: 30px 0 22px;
                        color: #222;
                        font-size: 20px;
                        // font-weight: normal;
                    }
                    h2 {
                        margin: 30px 0 22px;
                        color: #222;
                        font-size: 18px;
                        // font-weight: normal;
                    }
                    // 编辑器输入部分-清除有序、无序列表的前面空格
                    ul,
                    ol {
                        color: #222;
                        padding-left: 0;
                    }
                    li:not(.ql-direction-rtl)::before {
                        text-align: center;
                    }
                    // 编辑器输入部分-设置图片铺满
                    img,
                    video {
                        display: block;
                        width: 100%;
                        margin: 22px 0;
                    }
                    button {
                        position: relative;
                        &::after {
                            content: 'dasdasd';
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }
                    a {
                        color: #222;
                        cursor: pointer;
                        &:hover {
                            color: #0098f6;
                        }
                    }
                    video {
                        height: 444px;
                    }
                }
                .ql-tooltip {
                    font-size: 14px;
                    padding: 10px 15px;
                    &::before {
                        display: none;
                        content: '链接地址:';
                    }
                    a.ql-preview {
                        max-width: 200px;
                        line-height: unset;
                    }
                    a.ql-action::after {
                        content: '编辑';
                        padding-right: 0;
                        margin-left: 15px;
                        border-right: none;
                    }
                    a.ql-remove::before {
                        display: none;
                        content: '移除';
                    }
                }
                .ql-editing {
                    display: none;
                }
            }
        }
        /deep/ .el-dialog {
            padding: 32px;
            box-sizing: border-box;
            .el-dialog__body {
                padding: 0;
            }
            .el-dialog__header {
                padding: 0;
                font-size: 24px;
                color: #303133;
                font-weight: bold;
                .el-dialog__title {
                    font-size: 24px;
                }
            }
            .el-dialog__footer {
                padding: 0;
                font-size: initial;
            }
        }
        .linkDialog {
            /deep/ .el-dialog {
                width: 410px;
                .icon-wenben,
                .icon-lianjie {
                    margin-left: 4px;
                    font-weight: bold;
                }
                .el-dialog__body {
                    padding: 32px 0;
                    .el-form-item {
                        margin-bottom: 24px;
                        &:last-child {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .videoDialog {
            /deep/ .el-dialog {
                width: 513px;
                .videoUpClass {
                    width: 388px;
                    height: 321px;
                    margin: 32px auto 0;
                    .el-upload-dragger {
                        width: 388px;
                        height: 321px;
                        .el-icon-upload {
                            margin-top: 100px;
                        }
                        .el-upload__text {
                            font-size: 18px;
                        }
                    }
                }
                .videoProcessClass {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 321px;
                    margin: 0 auto;
                    .el-progress {
                        width: 264px;
                        .el-progress-bar {
                            padding-right: 0;
                        }
                        .el-progress__text {
                            display: none;
                        }
                    }
                    .processText {
                        margin-top: 38px;
                        color: #5a5a5a;
                        font-size: 19px;
                        line-height: 19px;
                    }
                }
                .videoCoverClass {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 28px;
                    div {
                        width: 135px;
                        height: 81px;
                        margin-bottom: 10px;
                        margin-right: 10px;
                        background-position: center;
                        background-size: cover;
                        cursor: pointer;
                        border: 2px solid #fff;
                        &:hover {
                            border-color: #4a90e2;
                        }
                    }
                    .coverChoosed {
                        border-color: #4a90e2;
                    }
                    .coverTips {
                        margin: 22px auto 32px;
                        font-size: 19px;
                        line-height: 19px;
                        color: #5a5a5a;
                    }
                }
                .videoUpErrClass,
                .videoCodeErrClass {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 321px;
                    font-size: 19px;
                    color: #5a5a5a;
                    text-align: center;
                    .clickAgain {
                        margin-bottom: 32px;
                        color: #0098f6;
                        cursor: pointer;
                    }
                    .errTips {
                        text-decoration: line-through;
                    }
                }
                .videoCodeErrClass {
                    .errReason {
                        margin-bottom: 16px;
                        color: #bfbfbf;
                        line-height: 24px;
                        p {
                            width: 205px;
                            margin: 0 auto;
                            word-wrap: break-word;
                            word-break: break-all;
                        }
                    }
                }
            }
        }
    }
</style>
