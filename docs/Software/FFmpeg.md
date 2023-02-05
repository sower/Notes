---
title: FFmpeg
created_at: 2022-01-29T15:20:45.000Z
updated_at: 2022-03-05T08:32:25.000Z
word_count: 1793
---  

## FFmpeg

[FFmpeg](https://ffmpeg.org/)是视频处理最常用的开源软件。  <br />  功能强大，用途广泛，大量用于视频网站和商业软件，也是许多音频和视频格式的标准编码/解码实现。

容器：文件的后缀名反映了它的容器格式

**编码格式（CODEC）**

- 视频：H.262，H.264，H.265，VP8，VP9，AV1
- 音频：MP3，AAC



视频编码器

- libx264：最流行的开源 H.264 编码器
- NVENC：基于 NVIDIA GPU 的 H.264 编码器
- libx265：开源的 HEVC 编码器
- libvpx：谷歌的 VP8 和 VP9 编码器
- libaom：AV1 编码器

音频编码器

- libfdk-aac
- aac



### 基本信息查询命令
| 参数 | 说明 |
| --- | --- |
| -version | 显示版本。 |
| -h | 帮助 |
| -formats | 显示可用的格式（包括设备）。 |
| -demuxers | 显示可用的demuxers。 |
| -muxers | 显示可用的muxers。 |
| -devices | 显示可用的设备。 |
| -codecs | 显示libavcodec已知的所有编解码器。 |
| -decoders | 显示可用的解码器。 |
| -encoders | 显示所有可用的编码器。 |
| -bsfs | 显示可用的比特流filter。 |
| -protocols | 显示可用的协议。 |
| -filters | 显示可用的libavfilter过滤器。 |
| -pix_fmts | 显示可用的像素格式。 |
| -sample_fmts | 显示可用的采样格式。 |
| -layouts | 显示channel名称和标准channel布局。 |
| -colors | 显示识别的颜色名称。 |

###   <br />    <br />  CLI

**ffmpeg [global_options] {[input_file_options] -iinput_url} ... {[output_file_options] output_url} ...**

**ffmpeg [全局参数] [输入文件参数] -i [输入文件] [输出文件参数] [输出文件]**
```shell
ffmpeg \
-y \ # 全局参数
-c:a libfdk_aac -c:v libx264 \ # 输入文件参数
-i input.mp4 \ # 输入文件
-c:v libvpx-vp9 -c:a libvorbis \ # 输出文件参数
output.webm # 输出文件

# 等同

ffmpeg -i input.avi output.mp4
```

**常用参数**

- -c：指定编码器
- -c copy：直接复制，效率高
- -c:v：指定视频编码器
- -c:a：指定音频编码器
- -i：指定输入文件
- -an：去除音频流
- -vn： 去除视频流
- -preset：指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值 ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow。
- -y：不经过确认，输出时直接覆盖同名文件。
- -n：不要覆盖输出文件，如果指定的输出文件已经存在，立即退出。
- -t duration：设置纪录时间 hh:mm:ss[.xxx]格式的记录时间也支持
- -ss 位置：搜索到指定的时间 [-]hh:mm:ss[.xxx]的格式也支持



**视频选项**

- -b bitrate 设置比特率，缺省200kb/s
- -r fps 设置帧频 缺省25
- -s size 设置帧大小 格式为WXH 缺省160X128.
- -aspect aspect 设置横纵比 4:3 16:9 或 1.3333 1.7777
- -croptop size 设置顶部切除带大小 像素单位
- -cropbottom size –cropleft size –cropright size
- -padtop size 设置顶部补齐的大小 像素单位
- -padbottom size –padleft size –padright size –padcolor color 设置补齐条颜色
- -vn 不做视频记录
- -bt tolerance 设置视频码率容忍度kbit/s
- -maxrate bitrate设置最大视频码率容忍度
- -minrate bitreate 设置最小视频码率容忍度
- -bufsize size 设置码率控制缓冲区大小
- -vcodec codec 强制使用codec编解码方式。 如果用copy表示原始编解码数据必须被拷贝。
- -sameq 使用同样视频质量作为源（VBR）
- -pass n 选择处理遍数（1或者2）。两遍编码非常有用。第一遍生成统计信息，第二遍生成精确的请求的码率
- -passlogfile file 选择两遍的纪录文件名为file



#### 查看文件（元）信息
`ffmpeg -i input.mp4 [-hide_banner] `

#### 转换编码格式（transcoding）
`ffmpeg -i [input.file] -c:v libx264 output.mp4 `

#### 转换容器格式（transmuxing）
`ffmpeg -i input.mp4 -c copy output.webm `

#### 调整码率（transrating）
改变编码的比特率，一般用来将视频文件的体积变小
```shell
# 指定码率最小为964K，最大为3856K，缓冲区大小为 2000K。

ffmpeg \
-i input.mp4 \
-minrate 964K -maxrate 3856K -bufsize 2000K \
output.mp4
```

#### 改变分辨率（transsizing）
```shell
ffmpeg \
-i input.mp4 \
-vf scale=480:-1 \
output.mp4
```

#### 提取音频（demuxing）
```shell
ffmpeg \
-i input.mp4 \
-vn -c:a copy \
output.aac

# -vn表示去掉视频，-c:a copy表示不改变音频编码，直接拷贝
```

#### 添加音轨（muxing）
将外部音频加入视频，比如添加背景音乐或旁白。
```shell
ffmpeg \
-i input.aac -i input.mp4 \
output.mp4
```


#### 截图
```shell
# 从指定时间开始，连续对1秒钟的视频进行截图。
ffmpeg \
-y \
-i input.mp4 \
-ss 00:01:24 -t 00:00:01 \
output_%3d.jpg

# 只截一张图，指定只截取一帧。
 ffmpeg \
-ss 01:23:45 \
-i input \
-vframes 1 -q:v 2 \
output.jpg
# -vframes 1指定只截取一帧，-q:v 2表示输出的图片质量，一般是1到5之间（1 为质量最高）。
```

#### 裁剪（cutting）
截取视频中的一个片段，输出一个新视频。可指定开始时间（start）和持续时间（duration），也可以指定结束时间（end）  <br />  `ffmpeg -ss [start] -i [input] -t [duration] -c copy [output]`  <br />  `ffmpeg -ss [start] -i [input] -to [end] -c copy [output] `

#### 为音频添加封面
```shell
ffmpeg \
-loop 1 \
-i cover.jpg -i input.mp3 \
-c:v libx264 -c:a aac -b:a 192k -shortest \
output.mp4

# -loop 1参数表示图片无限循环，-shortest参数表示音频文件结束，输出视频就结束。
```

#### 添加水印
`ffmpeg -i input.mp4 -i mark.png -filter_complex overlay output.mp4 `

#### 文字水印
```shell
ffmpeg -i input.mp4 -i mark.png -filter_complex overlay output.mp4  

# 文字水印
ffmpeg -i input.mp4 \
-vf "drawtext=fontfile=simsunb.ttf: text='shuiying':x=100:y=10:fontsize=24:fontcolor=yellow:shadowy=2" output.mp4
```



## ffplay
ffmpeg工程中提供的播放器，功能强大，不是图形化界面的，须通过键盘来操作

### 快捷键
| 按键 | 作用 |
| --- | --- |
| q, ESC | 退出 |
| f | 全屏 |
| p, 空格 | 暂停 |
| w | 显示音频波形 |
| s | 逐帧显示 |
| 左方向键/右方向键 | 向后10s/向前10s |
| 上方向键/下方向键 | 向后1min/向前1min |
| page down/page up | 向后10min/向前10min |
| 鼠标点击屏幕 | 跳转到指定位置（根据鼠标位置相对屏幕的宽度计算） |


### 选项
| 名称 | 有参数 | 作用 |
| --- | --- | --- |
| x | Y | 强制屏幕宽度 |
| y | Y | 强制屏幕高度 |
| s | Y | 强制屏幕大小 |
| fs | N | 全屏 |
| an | N | 关闭音频 |
| vn | N | 关闭视频 |
| ast | Y | 设置想播放的音频流（需要指定流ID） |
| vst | Y | 设置想播放的视频流（需要指定流ID） |
| sst | Y | 设置想播放的字幕流（需要指定流ID） |
| ss | Y | 从指定位置开始播放，单位是秒 |
| t | Y | 播放指定时长的视频 |
| nodisp | N | 无显示屏幕 |
| f | Y | 强制封装格式 |
| pix_fmt | Y | 指定像素格式 |
| stats | N | 显示统计信息 |
| idct | Y | IDCT算法 |
| ec | Y | 错误隐藏方法 |
| sync | Y | 视音频同步方式（type=audio/video/ext） |
| autoexit | N | 播放完成自动退出 |
| exitonkeydown | N | 按下按键退出 |
| exitonmousedown | N | 按下鼠标退出 |
| loop | Y | 指定循环次数 |
| framedrop | N | CPU不够的时候丢帧 |
| window_title | Y | 显示窗口的标题 |
| rdftspeed | Y | Rdft速度 |
| showmode | Y | 显示方式(0 = video, 1 = waves, 2 = RDFT) |
| codec | Y | 强制解码器 |



