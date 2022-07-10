
# Public API
[public-apis](https://github.com/public-apis/public-apis)  <br />  [接口大全](https://www.free-api.com/)

**综合**

- [M3O](https://m3o.com/)**	Micro APIs**
- [Abstract APIs](https://www.abstractapi.com/)	api@tmpbox.net	Aa123456!

**临时邮箱**

- [https://www.snapmail.cc](https://www.snapmail.cc)
- [Temp Mail - 10M](https://temp-mail.org/zh/)

[**Cloud Storage & File Sharing**](https://github.com/public-apis/public-apis#cloud-storage--file-sharing)

- [https://www.file.io](https://www.file.io)
- [https://gofile.io/api](https://gofile.io/api)

文本存储

- [ExtendsClass JSON Storage](https://extendsclass.com/json-storage.html)
- [JSONbin.io](https://jsonbin.io/)

[Documents & Productivity](https://github.com/public-apis/public-apis#documents--productivity)  <br />  [Authentication](https://github.com/public-apis/public-apis#authentication)  <br />  [AirVisual](https://airvisual.com/api) Air quality and weather data  <br />  [Weather](https://github.com/public-apis/public-apis#weather)  <br />     <br />  [Development](https://github.com/public-apis/public-apis#development)

- [https://app.screenshotapi.net](https://app.screenshotapi.net)

[JSON 2 JSONP](https://json2jsonp.com/)  <br />  [Netlify](https://docs.netlify.com/api/get-started/)  <br />  [OneSignal](https://documentation.onesignal.com/docs/onesignal-api)  <br />  [https://pusher.com/beams](https://pusher.com/beams)  <br />  [https://quickchart.io/](https://quickchart.io/)  <br />  [https://scraperbox.com/](https://scraperbox.com/)

- [Google Docs](https://developers.google.com/docs/api/reference/rest) API to read, write, and format Google Docs documents OAuth Yes Unknown
- [Google Firebase](https://firebase.google.com/docs) Google's mobile application development platform that helps build, improve, and grow app apiKey 
- [Google Keep](https://developers.google.com/keep/api/reference/rest) API to read, write, and format Google Keep notes OAuth Yes Unknown
- [Google Sheets](https://developers.google.com/sheets/api/reference/rest) API to read, write, and format Google Sheets data

 [https://api.slack.com/](https://api.slack.com/)

图床

- 壁纸	[https://bing.ioliu.cn/v1/rand](https://bing.ioliu.cn/v1/rand)
- 随机unsplash：[https://picsum.photos/](https://picsum.photos/)


```shell
# coding=utf-8
import urllib3
import os
import json
import base64
import time
 
 
# 上传图片
def UpImg(File):
    try:
        http = urllib3.PoolManager()
        # 设置UA和Cookie
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
            'Cookie': '你的新浪Ccookie',
        }
        # 上传接口
        url = "https://picupload.weibo.com/interface/pic_upload.php?ori=1&mime=image%2Fjpeg&data=base64&url=0&markpos=1&logo=&nick=0&marks=1&app=miniblog"
 
 
        f = open(File, 'rb')
        values = {
            'b64_data': base64.b64encode(f.read()),     # 将图片转换为base64
            'pic1': File
        }
        f.close()
        r = http.request('POST', url, fields=values, headers=headers)  # post方式调用API
        data = r.data.decode('utf-8')  # 解析返回内容
        data = data.replace('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />', '')
        data = data.replace('<script type="text/javascript">document.domain="sina.com.cn";</script>', '')
        jData = json.loads(data)  # 解析返回的json
        pid = jData['data']['pics']['pic_2']['pid']
 
        # 拼接图片地址
        imgUrl = 'http://ww1.sinaimg.cn/large/{pid}.jpg'.format(pid=pid)
        print("图片{file}上传成功，地址：{imgUrl}".format(file=File, imgUrl=imgUrl))
        return imgUrl
    except:
        print("图片{file}上传失败,3秒后将重试".format(file=File))
        time.sleep(3)
        UpImg(File)
 
 
if __name__ == '__main__':
    path = "需要上传的图片所在目录"
    urlList = []
    for file in os.listdir(path):
        url = UpImg(path + "\\" + file)
        # 写入图片地址到本地文件
        f = open('filelist.txt', 'a+')
        f.write(url + "\n")
        f.close()
```
解决防盗链可以用 `<meta name="referrer" content="no-referrer" />`




# 油猴脚本
  <br />  

## 元数据块
描述脚本的一个用户脚本部分。它通常包含脚本名称，命名空间，描述和包含和排除规则。出现在JavaScript行注释中，可能会出现在脚本内的任何位置， 但通常靠近文件的顶部。

| **键** | **示例** | **备注** |
| --- | --- | --- |
| @name | [@name](https://www.52pojie.cn/home.php?mod=space&uid=170990)  脚本名称 | 脚本的名称。该项将显示在页面的标题以及链接内容，必填项。 |
| @description | @description  脚本功能描述 | 脚本功能的描述，显示在脚本标题下面，必填项。 |
| @namespace |  | [@namespace](https://www.52pojie.cn/home.php?mod=space&uid=467642) 及 @name 这两个属性将帮助用户脚本管理器判断是否已安  装该脚本。 |
| @version | @version  0.0.1 | 脚本的版本标记将使用 Mozilla 版本格式 并显示于脚本的简介页面，必填  项。 |
| @include  <br />  @exclude  <br />  @match | @match  *://www.52pojie.cn/* | 描述脚本将执行的页面。该列表会被分析并展示到脚本的简介页面，以及  用于脚本分类。 |
| @require | @require http://cdn.bootcss.com/jquery.min.js | 引用外部脚本到您的脚本 |
| @updateURL  <br />  @installURL,  @downloadURL |  | 告知用户脚本管理器应该在哪个地址获取脚本更新。 |
| @license |  | 脚本所使用的许可协议名称或地址，该协议需包含用户是否允许二次分发  或修改  脚本的权利。不提供许可协议则表示用户仅允许个人使用且不得  二次分发；该协  议将在脚本的简介页面显示。 |
| @supportURL |  | 用户可获得该脚本技术支持的链接地址 (如：错误反馈系统、论坛、电子  邮件)，该链接将显示在脚本的反馈页面。 |
| @contributionURL |  | 用于捐赠脚本作者的链接，该链接将显示在脚本的反馈页面。 |
| @contributionAmount |  | 建议捐赠金额，请配合 @contributionURL 使用。 |
| @compatible |  | 标记此脚本与某个浏览器兼容，兼容性信息将显示在脚本的简介页面上。 |
| @incompatible |  | 标记此脚本与某个浏览器不兼容，兼容性信息将显示在脚本的简介页面上。 |

元数据块必须遵循以下格式
```shell
// ==UserScript==
// @key value
// ==/UserScript==
```
备注：

- Greasy Fork 要读取的脚本元键值【https://greasyfork.org/zh-CN/help/meta-keys】
- Metadata Block - GreaseSpot Wiki （api文档）【https://wiki.greasespot.net/Metadata_Block】

示例：Google谷歌翻译自动中英互译
```shell
// ==UserScript==
// @name        Google Translate Auto Languages
// @name:zh-CN  Google谷歌翻译自动中英互译
// @description Auto switch Chinese/English
// @description:zh-CN 自动切换目标语言为中/英文
// @namespace   https://greasyfork.org/users/197529
// @version     1.6
// @author      kkocdko
// @license     Unlicense
// @match       *://translate.google.com/*
// @match       *://translate.google.cn/*
// @noframes
// ==/UserScript==
"use strict";

const firstLangRule = /English|英语/;
const firstLang = "en";
const secondLang = "zh-CN";

const detectTab = document.querySelector("[role=tab]");
new MutationObserver(() => {
  const isFirstLang = firstLangRule.test(detectTab.textContent);
  const lang = isFirstLang ? secondLang : firstLang;
  const selector = `[data-popup-corner]~* [data-language-code=${lang}]`;
  const tab = document.querySelector(selector);
  if (tab.getAttribute("aria-selected") !== "true") tab.click();
}).observe(detectTab, { characterData: true, subtree: true });
if (detectTab.getAttribute("aria-selected") !== "true") detectTab.click();
```

```javascript
// ==UserScript==
// @name             中文维基百科优先简体中文
// @namespace        https://github.com/Roger-WIN/greasemonkey-user-scripts
// @description      Wikipedia 维基百科（中文）优先使用简体中文浏览
// @version          1.2.1
// @match            *zh.wikipedia.org/*
// @match            *zh-yue.wikipedia.org/*
// @match            *zh.m.wikipedia.org/*
// @match            *zh-yue.m.wikipedia.org/*
// @require          https://cdn.jsdelivr.net/gh/Roger-WIN/greasemonkey-user-scripts@a44e2ee0a802fd0fbed6c461196188237294fc32/Chinese%20(Simplified)%20first/_common/language-first.js
// @author           神齐 <RogerKung.WIN@outlook.com>
// @license          MIT
// @supportURL       https://github.com/Roger-WIN/greasemonkey-user-scripts/issues
// @contributionURL  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RogerKung.WIN@outlook.com&item_name=Greasy+Fork+donation
// ==/UserScript==

(() => {
    // 目标语言
    const lang_target = "/zh-cn/";
    // 表示页面是否指定语言
    let langs_head = "/zh";
    let lang_default = "/wiki/";
    let flags_exclude = ["index.php", "/w/"];
    if (convertSubdomain()) {
        convertWithExclude(lang_target, flags_exclude, langs_head, lang_default);
    }
})();
```


# Bookmarklet
小书签（bookmarklet，书签小程式），是一种小型的程序(Applet)，以网址(URL)的形式被存为浏览器中的书签，也可以是网页上的一个链接。Bookmarklet是由Bookmark和Applet组合而来。  <br />  实质是一段Javascript代码，以`"javascript:"`开头。点击之后，会对当前页面执行某种操作。  <br />  它通常在网页中以链接的形式出现：  <br />  ` <a href="javascript:alert('hi');">xxx</a> `

**规则**

1. 以`javascript:`开头
1. 所有代码必须在同一行：因为浏览器把Bookmarklet当做网址保存，而网址是不能分行的。另外，网址是有长度限制的。
1. 使用单引号：由于html语言主要使用双引号，所以Bookmarklet优先使用单引号。使用双引号的情况采用其URL编码形式`%22`。
1. 采用匿名函数，不污染全局变量`javascript: (function(){...})(); `
1. 对文本和URL进行编码：为了防止出现非法字符，代码以外的文本都应该使用`encodeURIComponent()`函数进行编码，比如把空格变成`%20`。



**编写技巧**

- 防止刷新页面

如果代码对页面有改动（比如使用了`document.write`），浏览器就会用一个新页面替换原有页面。所以最好用`void()`命令，把语句放在里面。  <br />  ` javascript:void(document.links[0].href='http://www.ibm.com/'); `

- 连接外部javascript代码
```shell
javascript:(function(){
    var script=document.createElement('script');
    script.setAttribute('src',
    　　　　　　　　'http://path/to/external/file.js');
    document.getElementsByTagName('head')[0]
    　　　　.appendChild(script);
})();
```

添加外部函数库
```shell

if (!window.jQuery) {
  script=document.createElement( 'script' );
  script.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
  script.onload=foo;
  document.body.appendChild(script);
} else {
	foo();
}

function foo() {
	/* ... */
}
```


## 常用
[bookmarkleter](https://github.com/chriszarate/bookmarkleter) 生成器

显示明文密码
```javascript
javascript:(function()%7Bvar%20IN,F;IN=document.getElementsByTagName('input');for(var%20i=0;i<IN.length;i++)%7BF=IN%5Bi%5D;if(F.type.toLowerCase()=='password')%7Btry%7BF.type='text'%7Dcatch(r)%7Bvar%20n,Fa;n=document.createElement('input');Fa=F.attributes;for(var%20ii=0;ii<Fa.length;ii++)%7Bvar%20k,knn,knv;k=Fa%5Bii%5D;knn=k.nodeName;knv=k.nodeValue;if(knn.toLowerCase()!='type')%7Bif(knn!='height'&&knn!='width'&!!knv)n%5Bknn%5D=knv%7D%7D;F.parentNode.replaceChild(n,F)%7D%7D%7D%7D)()
```

解除右键限制
```javascript
javascript:(function(bookmarklets)%7Bfor(var%20i=0;i%3Cbookmarklets.length;i++)%7Bvar%20code=bookmarklets%5Bi%5D.url;if(code.indexOf(%22javascript:%22)!=-1)%7Bcode=code.replace(%22javascript:%22,%22%22);eval(code)%7Delse%7Bcode=code.replace(/%5Es+%7Cs+$/g,%22%22);if(code.length%3E0)%7Bwindow.open(code)%7D%7D%7D%7D)(%5B%7Btitle:%22%E7%A0%B4%E9%99%A4%E5%8F%B3%E9%94%AE%E8%8F%9C%E5%8D%95%E9%99%90%E5%88%B6%22,url:%22javascript:function%20applyWin(a)%7Bif(typeof%20a.__nnANTImm__===%5Cx22undefined%5Cx22)%7Ba.__nnANTImm__=%7B%7D;a.__nnANTImm__.evts=%5B%5Cx22mousedown%5Cx22,%5Cx22mousemove%5Cx22,%5Cx22copy%5Cx22,%5Cx22contextmenu%5Cx22%5D;a.__nnANTImm__.initANTI=function()%7Ba.__nnantiflag__=true;a.__nnANTImm__.evts.forEach(function(c,b,d)%7Ba.addEventListener(c,this.fnANTI,true)%7D,a.__nnANTImm__)%7D;a.__nnANTImm__.clearANTI=function()%7Bdelete%20a.__nnantiflag__;a.__nnANTImm__.evts.forEach(function(c,b,d)%7Ba.removeEventListener(c,this.fnANTI,true)%7D,a.__nnANTImm__);delete%20a.__nnANTImm__%7D;a.__nnANTImm__.fnANTI=function(b)%7Bb.stopPropagation();return%20true%7D;a.addEventListener(%5Cx22unload%5Cx22,function(b)%7Ba.removeEventListener(%5Cx22unload%5Cx22,arguments.callee,false);if(a.__nnantiflag__===true)%7Ba.__nnANTImm__.clearANTI()%7D%7D,false)%7Da.__nnantiflag__===true?a.__nnANTImm__.clearANTI():a.__nnANTImm__.initANTI()%7DapplyWin(top);var%20fs=top.document.querySelectorAll(%5Cx22frame,%20iframe%5Cx22);for(var%20i=0,len=fs.length;i%3Clen;i++)%7Bvar%20win=fs%5Bi%5D.contentWindow;try%7Bwin.document%7Dcatch(ex)%7Bcontinue%7DapplyWin(fs%5Bi%5D.contentWindow)%7D;void%200;%22%7D,%7Btitle:%22%E7%A0%B4%E9%99%A4%E9%80%89%E6%8B%A9%E5%A4%8D%E5%88%B6%E9%99%90%E5%88%B6%22,url:%22javascript:(function()%7Bvar%20doc=document;var%20bd=doc.body;bd.onselectstart=bd.oncopy=bd.onpaste=bd.onkeydown=bd.oncontextmenu=bd.onmousemove=bd.onselectstart=bd.ondragstart=doc.onselectstart=doc.oncopy=doc.onpaste=doc.onkeydown=doc.oncontextmenu=null;doc.onselectstart=doc.oncontextmenu=doc.onmousedown=doc.onkeydown=function%20()%7Breturn%20true;%7D;with(document.wrappedJSObject%7C%7Cdocument)%7Bonmouseup=null;onmousedown=null;oncontextmenu=null;%7Dvar%20arAllElements=document.getElementsByTagName(%5Cx27*%5Cx27);for(var%20i=arAllElements.length-1;i%3E=0;i--)%7Bvar%20elmOne=arAllElements;with(elmOne.wrappedJSObject%7C%7CelmOne)%7Bonmouseup=null;onmousedown=null;%7D%7Dvar%20head=document.getElementsByTagName(%5Cx27head%5Cx27)%5B0%5D;if(head)%7Bvar%20style=document.createElement(%5Cx27style%5Cx27);style.type=%5Cx27text/css%5Cx27;style.innerHTML=%5Cx22html,*%7B-moz-user-select:auto!important;%7D%5Cx22;head.appendChild(style);%7Dvoid(0);%7D)();%22%7D%5D)
```


# [jsdelivr](https://github.com/jsdelivr/jsdelivr)
Root endpoint : **https://cdn.jsdelivr.net**

**npm**  <br />  Load any project hosted on npm:  <br />  `/npm/package@version/file `

Load exact version:  <br />  `/npm/jquery@3.1.0/dist/jquery.min.js `

Use a version range instead of an exact version:  <br />  `/npm/jquery@3/dist/jquery.min.js`  <br />  `/npm/jquery@3.1/dist/jquery.min.js `

Omit the version completely or use "latest" to load the latest one (not recommended for production usage):  <br />  `/npm/jquery@latest/dist/jquery.min.js`  <br />  `/npm/jquery/dist/jquery.min.js `

Add ".min" to any JS/CSS/SVG file to get a minified version - if one doesn't exist, we'll generate it for you. All generated files come with source maps and can be easily used during development:  <br />  `/npm/github-markdown-css@2.4.1/github-markdown.min.css `

**GitHub**  <br />  Load any GitHub release, commit, or branch:  <br />  `/gh/user/repo@version/file `  <br />  Load exact version:  <br />  `/gh/jquery/jquery@3.1.0/dist/jquery.min.js `  <br />  `/gh/jquery/jquery@32b00373b3f42e5cdcb709df53f3b08b7184a944/dist/jquery.min.js `  <br />  Use a version range instead of an exact version (only works with valid semver versions):  <br />  `/gh/jquery/jquery@3/dist/jquery.min.js`  <br />  `/gh/jquery/jquery@3.1/dist/jquery.min.js`









