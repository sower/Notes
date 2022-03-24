
# —— Google Chrome ——


## [DevTools（开发者工具）](https://developer.chrome.com/docs/devtools/)

[awesome-chrome-devtools](https://github.com/ChromeDevTools/awesome-chrome-devtools)  <br />  一套内置于Google Chrome中的Web开发和调试工具，可用来对网站进行迭代、调试和分析。


### panel

- Elements：查看网页的 HTML，自由操纵DOM和CSS来重演您网站的布局和设计
- Console：记录诊断信息，在页面上与JavaScript交互
- Sources：查看网页加载的脚本源码，断点调试 JavaScript 
- Network：查看网页的 HTTP 通信情况。
- Timeline：查看页面的运行时性能，网站生命周期内发生的各种事件
- Performance：查看网页的性能情况，比如 CPU 和内存消耗。
- Memory
- Application：查看网页加载的各种资源文件（比如代码文件、字体文件 CSS 文件等），以及在硬盘上创建的各种内容（比如本地缓存、Cookie、Local Storage等）。
- Security：调试混合内容问题，证书问题等等。


**Dom 设置断点（DOM change breakpoints）**

- Subtree modifications 触发条件
   - 当前选中节点的子节点被移除或添加时
   - 子节点的内容更改时
   - 子节点的属性修改是不触发
- Attributes modifications 触发条件
   - 当前选中元素的属性被添加或删除时触发
   - 会属性值修改时
- Node Removal 的触发条件
   - 当前选中元素被移除时触发


### Performance
FPS：主要和动画性能有关，代表每秒帧数。图表中的绿色长条越高，说明FPS越高，用户体验越好。如果其中有红色长条，代表着这部分帧数有卡顿，需要优化。  <br />  CPU：和底部的 Summary 对应，显示了页面加载过程中，各阶段对 CPU 的占用时间，占用时间越多，代表该阶段越需要优化。  <br />  NET：主要展示了网络请求的先后顺序以及各自的请求耗时，可以被 Network 面板完美替代，建议直接查看 Network  <br />  Main：展现了主线程在 Record 过程中做的所有事情，包括：Loading、Scripting、Rendering、Painting 等等。图的横轴代表着时间，纵轴代表着调用堆栈。每一个长条代表执行了一个事件或函数，长条的长度代表着耗时的长短，如果某个长条右上角是红色的则表示该函数存在性能问题，需要重点关注。

Performance monitor

1. 打开 Chrome 开发者工具
1. 按“Esc”，打开附加面板
1. 点击选项按钮，打开选项菜单
1. 选择“Performance monitor”


### Shortcut
**全局**

| 全局快捷键 | Windows |
| --- | --- |
| 显示一般设置对话框 | ?、F1 |
| 查找面板 | Ctrl + Shift + P |
| 上/下一个面板 | Ctrl + [ / ] |
| 在面板历史记录中后退/前进 | Ctrl + Alt + [ / ] |
| 更改停靠位置 | Ctrl + Shift + D |
| 打开 Device Mode | Ctrl + Shift + M |
| 切换控制台/在设置对话框打开时将其关闭 | Esc |
| 刷新页面 | F5、Ctrl + R |
| 刷新忽略缓存内容的页面 | Ctrl + F5、Ctrl + Shift + R |
| 在当前文件或面板中搜索文本 | Ctrl + F |
| 在所有源中搜索文本 | Ctrl + Shift + F |
| 按文件名搜索（除了在 Timeline 上） | Ctrl + O、Ctrl + P |
| 放大（焦点在 DevTools 中时） | Ctrl + + |
| 缩小 | Ctrl + - |
| 恢复默认文本大小 | Ctrl + 0 |

  <br />  

## API
`$_`	最近一次计算的表达式的值

**选择元素**

| 快捷方式 | 说明 |
| --- | --- |
| $(selector) | 返回与指定的CSS选择器匹配的第一个元素。document.querySelector()的快捷方式。 |
| $$(selector) | 返回一个与指定的CSS选择器匹配的所有元素的数组。document.querySelectorAll()的别名。 |
| $x(path) | 返回一个与指定的 XPath 匹配的元素的数组。 |

copy(object)	将指定对象的字符串表示复制到剪贴板。  <br />  debug(function)  <br />  keys(object)	返回一个包含属于指定对象的属性名的数组  <br />  values(object)	返回一个包含属于指定对象的所有属性值的数组

inspect(object/function)	在适当的面板中打开并选择指定的元素或对象  <br />  getEventListeners(object)	返回在指定对象上注册事件的监听器  <br />  monitor(function)	当调用指定的函数时，将在控制台记录一指示函数名和函数被调用时传入的参数的消息  <br />  monitorEvents(object[, events])	当指定事件之一在指定对象上发生时，Event对象将被记录到控制台。 

| 时间类型 | 对应的映射事件 |
| --- | --- |
| mouse | "mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel" |
| key | "keydown", "keyup", "keypress", "textInput" |
| touch | "touchstart", "touchmove", "touchend", "touchcancel" |
| control | "resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset" |

profile()	通过可选名称，启动JavaScript CPU分析会话  <br />  profileEnd()	停止分析并在Profile(分析)面板中显示结果


## filter(过滤器)

- domain **(域)** : 仅显示来自指定域的资源。可用通配符（ * ）来包括多个域。
- has-response-header **(响应头信息)** : 显示包含指定HTTP响应头信息的资源。
- is : 使用 is:running 过滤出 WebSocket 资源。
- larger-than **(大于)** : 显示大于指定大小的资源（以字节为单位）。设置值 1000 等效于设置值 1k 。
- method **(方法)** : 显示通过指定的HTTP方法类型检索的资源。
- mime-type **(mime类型)** : 显示指定MIME类型的资源。 
- mixed-content **(混合内容)** : 显示所有混合内容资源（ mixed-content:all ）或仅显示当前显示的内容（ mixed-content:displayed ）。
- scheme **(协议)** : 显示通过不受保护的HTTP（ scheme:http ）或受保护的HTTPS检索的资源。
- set-cookie-domain **(cookie域)** : 显示具有 Set-Cookie 头,并且其Domain属性与指定值匹配的资源。
- set-cookie-name **(cookie名)** : 显示具有 Set-Cookie 头,并且名称与指定值匹配的资源。
- set-cookie-value **(cookie值)** : 显示具有 Set-Cookie 头,并且值与指定值匹配的资源。
- status-code **(状态码)** : 仅显示其HTTP状态代码与指定代码匹配的资源。

模拟地理位置坐标  <br />  在 More Tools (更多工具)下，单击 Sensors (传感器)


**screenshot**

- Capture area screenshot
- **Capture full size screenshot	长截图**
- Capture node screenshot
- Capture screenshot


## CLI
--help  <br />  --headless	在无头模式下运行，即没有UI或显示服务器依赖性  <br />  --disable-gpu	禁用GPU硬件加速  <br />  --disable-gpu-vsync	在呈现之前阻止GPU在vsync上进行同步  <br />  --dump-dom	指示headless_shell将document.body.innerHTML打印到stdout。  <br />  --remote-debugging-port	在指定端口上启用HTTP远程调试。  <br />  --print-to-pdf	保存已加载页面的pdf文件。  <br />  --screenshot	保存已加载页面的屏幕截图。  <br />  --start-maximized                           启动就最大化  <br />  --no-sandbox                                 取消沙盒模式  <br />  --window-position	指定初始窗口位置:-窗口位置=x，y  <br />  --window-size	设置初始窗口大小。提供格式为“800,600”的字符串。  <br />  –user-data-dir=”[PATH]”              指定用户文件夹User Data路径，可以把书签这样的用户数据保存在系统分区以外的分区。  <br />  –disk-cache-dir=”[PATH]“            指定缓存Cache路径  <br />  –disk-cache-size=                       指定Cache大小，单位Byte  <br />  –first run                                     重置到初始状态，第一次运行  <br />  –incognito                                    隐身模式启动  <br />  –disable-javascript                        禁用Javascript  <br />  --omnibox-popup-count="num"   将地址栏弹出的提示菜单数量改为num个  <br />  --user-agent="xxxxxxxx"                修改HTTP请求头部的Agent字符串  <br />  --disable-plugins                            禁止加载所有插件，可以增加速度  <br />  --disable-javascript                        禁用JavaScript，如果觉得速度慢在加上这个  <br />  --disable-java                                  禁用java   <br />  --single-process                             单进程运行  <br />  --process-per-tab                           每个标签使用单独进程  <br />  --process-per-site                           每个站点使用单独进程  <br />  --in-process-plugins                      插件不启用单独进程  <br />  --disable-popup-blocking             禁用弹出拦截  <br />  --disable-plugins                            禁用插件  <br />  --disable-images                            禁用图像  <br />  --enable-udd-profiles                    启用账户切换菜单  <br />  --proxy-pac-url                               使用pac代理 [via 1/2]  <br />  --lang=zh-CN                                 设置语言为简体中文  <br />  --disk-cache-dir                             自定义缓存目录  <br />  --disk-cache-size                          自定义缓存最大值（单位byte）  <br />  --media-cache-size                      自定义多媒体缓存最大值（单位byte）  <br />  --bookmark-menu                         在工具 栏增加一个书签按钮  <br />  --enable-sync                                启用书签同步



---



[Awesome-WebExtensions](https://github.com/fregante/Awesome-WebExtensions)  <br />  [web-extension-starter](https://github.com/abhijithvijayan/web-extension-starter)

# [Extensions](https://developer.chrome.com/docs/extensions/)
Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.

**Components**

- [background scripts](https://developer.chrome.com/docs/extensions/mv3/background_pages/)
- [content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
- [options page](https://developer.chrome.com/docs/extensions/mv3/options/)
- [UI elements](https://developer.chrome.com/docs/extensions/mv3/user_interface/)
   - [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)
   - [Tooltip](https://developer.chrome.com/docs/extensions/mv3/user_interface/#tooltip)
   - [Click Event](https://developer.chrome.com/docs/extensions/mv3/user_interface/#click-event)
   - [Omnibox](https://developer.chrome.com/docs/extensions/mv3/user_interface/#omnibox)
   - [Context menu](https://developer.chrome.com/docs/extensions/mv3/user_interface/#context_menu)
   - [Commands](https://developer.chrome.com/docs/extensions/mv3/user_interface/#commands)
   - [Override pages](https://developer.chrome.com/docs/extensions/mv3/user_interface/#override)


[debugging tutorial](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/)  <br />  [extensions APIs](https://developer.chrome.com/docs/extensions/reference/)



## [Manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/)
```json
{
  // Required
  "manifest_version": 3,
  "name": "My Extension",
  "version": "versionString",

  // Recommended
  "action": {
        "default_icon": "icon.png",
        "default_title": "System Extension",
        "default_popup": "popup.html"
    },
  "default_locale": "en",
  "description": "A plain text description",
  "icons": {
    "16": "extension_icon16.png",
    "32": "extension_icon32.png",
    "48": "extension_icon48.png",
    "128": "extension_icon128.png"
  },

  // Optional
  "author": "Hyle",
  "automation": ...,
  "background": {
    // Required
    "service_worker": "background.js",
    // Optional
    "type": ...
  },
  "chrome_settings_overrides": {...},
  "chrome_url_overrides": {
        "newtab": "override_page.html"
    },
  "commands": {
        "OpenApp2": {
            "suggested_key": {
                "default": "Alt+2",
                "mac": "Command+Shift+2"
            },
            "description": "Open app2"
        }
    },
  "content_capabilities": ...,
   "content_scripts": [
   {
     "matches": ["https://*.test.com/*"],
     "exclude_matches": ["*://*/*business*"],
     "css": ["styles.css"],
     "js": ["content-script.js"],
      "all_frames": true,
      "run_at": "document_end"
   }
  ],
  "content_security_policy": {...},
  "converted_from_user_script": ...,
  "cross_origin_embedder_policy": {"value": "require-corp"},
  "cross_origin_opener_policy": {"value": "same-origin"},
  "current_locale": ...,
  "declarative_net_request": ...,
  "devtools_page": "devtools.html",
  "differential_fingerprint": ...,
  "event_rules": [{...}],
  "externally_connectable": {
    "matches": ["*://*.example.com/*"]
  },
  "file_browser_handlers": [...],
  "file_system_provider_capabilities": {
    "configurable": true,
    "multiple_mounts": true,
    "source": "network"
  },
  "homepage_url": "https://path/to/homepage",
  "host_permissions": ["*://*/*"],
  "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
  "incognito": "spanning, split, or not_allowed",
  "input_components": ...,
  "key": "publicKey",
  "minimum_chrome_version": "versionString",
  "nacl_modules": [...],
  "natively_connectable": ...,
  "oauth2": ...,
  "offline_enabled": true,
  "omnibox": {
    "keyword": "aString"
  },
  "optional_permissions": ["tabs"],
  "options_page": "options.html",
  "options_ui": {
    "chrome_style": true,
    "page": "options.html"
  },
  "permissions": ["tabs"],
  "platforms": ...,
  "replacement_web_app": ...,
  "requirements": {...},
  "sandbox": [...],
  "short_name": "Short Name",
  "storage": {
    "managed_schema": "schema.json"
  },
  "system_indicator": ...,
  "tts_engine": {...},
  "update_url": "https://path/to/updateInfo.xml",
  "version_name": "aString",
  "web_accessible_resources": [...]
}
```



Match patterns
```json
<url-pattern> := <scheme>://<host><path>
<scheme> := '*' | 'http' | 'https' | 'file' | 'ftp' | 'urn'
<host> := '*' | '*.' <any char except '/' and '*'>+
<path> := '/' <any chars>

https://*/*	  Matches any URL that uses the https scheme
```


**Theme**  <br />  A _theme_ is a special kind of extension that changes the way the browser looks. Themes are [packaged](https://developer.chrome.com/docs/extensions/mv3/linux_hosting/#packaging) like regular extensions, but they don't contain JavaScript or HTML code.
```json
{
  "version": "2.6",
  "name": "camo theme",
  "theme": {
    "images" : {
      "theme_frame" : "images/theme_frame_camo.png",
      "theme_frame_overlay" : "images/theme_frame_stripe.png",
      "theme_toolbar" : "images/theme_toolbar_camo.png",
      "theme_ntp_background" : "images/theme_ntp_background_norepeat.png",
      "theme_ntp_attribution" : "images/attribution.png"
    },
    "colors" : {
      "frame" : [71, 105, 91],
      "toolbar" : [207, 221, 192],
      "ntp_text" : [20, 40, 0],
      "ntp_link" : [36, 70, 0],
      "ntp_section" : [207, 221, 192],
      "button_background" : [255, 255, 255]
    },
    "tints" : {
      "buttons" : [0.33, 0.5, 0.47]
    },
    "properties" : {
      "ntp_background_alignment" : "bottom"
    }
  }
}
```

[API Reference](https://developer.chrome.com/docs/extensions/reference/)


## [contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus)
```json
chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
```

[permissions](https://developer.chrome.com/docs/extensions/reference/permissions)
```json
// Check the extension's current permissions
chrome.permissions.contains({
  permissions: ['tabs'],
  origins: ['https://www.google.com/']
}, (result) => {
  if (result) {
    // The extension has the permissions.
  } else {
    // The extension doesn't have the permissions.
  }
});
```


## [runtime](https://developer.chrome.com/docs/extensions/reference/runtime)
```json
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: 'options.html'
    });
});
```

-  [Message Passing](https://developer.chrome.com/docs/extensions/mv3/messaging/)
```json
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log('bg:', sender);
  if (message === 'hello') {
    sendResponse({ greeting: 'welcome!' })
  } else if (message === 'goodbye') {
    chrome.runtime.Port.disconnect();
  }
});

chrome.runtime.sendMessage('hello', (response) => {
    console.log('received :', response);
});
```


## [scripting](https://developer.chrome.com/docs/extensions/reference/scripting)
```json
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['script.js'],
    },
    (injectionResult) => {
      console.log('injectionResult: ', injectionResult);
});
```


## [tabs](https://developer.chrome.com/docs/extensions/reference/tabs)
```json
async function tab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  chrome.tabs.sendMessage(
    tab.id,
    'tab',
    {},
    r => console.log(r)
  );
  return tab;
}
```


## [storage](https://developer.chrome.com/docs/extensions/reference/storage)
```json
chrome.storage.sync.set({key: value}, function() {
  console.log('Value is set to ' + value);
});

chrome.storage.sync.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});


chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});
```


## [webRequest](https://developer.chrome.com/docs/extensions/reference/webRequest)
```json
const filter = {
  url: [
    {
      urlMatches: 'https://*/*',
    },
  ],
};
chrome.webNavigation.onCompleted.addListener(() => {
  console.info("The user has loaded my favorite website!");
}, filter);
```

[Extending DevTools](https://developer.chrome.com/docs/extensions/mv3/devtools/)

- [devtools.inspectedWindow](https://developer.chrome.com/docs/extensions/mv3/devtools.inspectedWindow)
- [devtools.network](https://developer.chrome.com/docs/extensions/mv3/devtools.network)
- [devtools.panels](https://developer.chrome.com/docs/extensions/mv3/devtools.panels)
```json
chrome.devtools.panels.create("My Panel",
    "MyPanelIcon.png",
    "Panel.html",
    function(panel) {
      // code invoked on panel creation
    }
);
```

[notifications](https://developer.chrome.com/docs/extensions/reference/notifications)

Error handling
```json
// Error handling with callbacks
chrome.tabs.create({...}, (result) => {
  if (chrome.runtime.lastError) {
    // Handle last error
  }
});

// Error handling with promises
chrome.tabs.create({...})
  .then((result) => {
    // success case
  })
  .catch((error) => {
    // failure case
  });
```



**Skills**



chrome://flags  <br />  Chrome 恢复显示网址 https:// 和 www   <br />  chrome://flags/#omnibox-ui-hide-steady-state-url-trivial-subdomains

- default：不显示 https:// 及 www. 
- disable：显示 https:// 及 www. 
- enable：显示 https:// 但不显示 www.

Smooth Scrolling  <br />  Overlay Scrollbars
