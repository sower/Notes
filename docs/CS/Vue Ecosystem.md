---
title: Vue Ecosystem
created_at: 2022-03-04T14:44:29.000Z
updated_at: 2022-12-11T06:55:36.000Z
word_count: 5306
---
# Vue Ecosystem  
## [Vite](https://vitejs.dev/)
```java
// 全局安装 vite
npm install vite -g

// 搭建一个 Vite 项目
npm create vite@latest
```

- [配置](https://cn.vitejs.dev/config/)
- [依赖预构建](https://cn.vitejs.dev/guide/dep-pre-bundling.html)
- [静态资源处理](https://cn.vitejs.dev/guide/assets.html)
- [模块热替换](https://cn.vitejs.dev/guide/features.html#hot-module-replacement)
- [CSS](https://cn.vitejs.dev/guide/features.html#css)
- [Glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import)
- [动态导入](https://cn.vitejs.dev/guide/features.html#dynamic-import)
- [WebAssembly](https://cn.vitejs.dev/guide/features.html#webassembly)
- [Web Workers](https://cn.vitejs.dev/guide/features.html#web-workers)
- [构建优化](https://cn.vitejs.dev/guide/features.html#build-optimizations)


## [~~Vue CLI~~](https://cli.vuejs.org/zh/)
CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令  <br />  CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。
```javascript
npm install -g @vue/cli
npm update -g @vue/cli

# 最新稳定版
npm install vue@next
```

preset：一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。 (~/.vuerc)

**vue  [options]**

```javascript
Commands:
  create [options] <app-name>                create a new project powered by vue-cli-service
  add [options] <plugin> [pluginOptions]     install a plugin and invoke its generator in an already created project
  invoke [options] <plugin> [pluginOptions]  invoke the generator of a plugin in an already created project
  inspect [options] [paths...]               inspect the webpack config in a project with vue-cli-service
  serve [options] [entry]                    serve a .js or .vue file in development mode with zero config
  build [options] [entry]                    build a .js or .vue file in production mode with zero config
  ui [options]                               start and open the vue-cli ui
  init [options] <template> <app-name>       generate a project from a remote template (legacy API, requires @vue/cli-init)
  config [options] [value]                   inspect and modify the config
  outdated [options]                         (experimental) check for outdated vue cli service / plugins
  upgrade [options] [plugin-name]            (experimental) upgrade vue cli service / plugins
  migrate [options] [plugin-name]            (experimental) run migrator for an already-installed cli plugin
  info                                       print debugging information about your environment
```

- vue-cli-service serve

```javascript
用法：vue-cli-service serve [options] [entry]

选项：
  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
```

- vue-cli-service build

```javascript
用法：vue-cli-service build [options] [entry|pattern]

选项：
  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

- vue-cli-service inspect

[模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)

在项目根目录中放置下列文件来指定环境变量：

```javascript
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略


一个环境文件只包含环境变量的“键=值”对：
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。

使用	process.env.VUE_APP_SECRET


[**项目配置**](https://cli.vuejs.org/zh/config/)

[browserslist](https://github.com/browserslist/browserslist)

vue.config.js  <br />  一个可选的配置文件，在项目的根目录中

```javascript
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
}
```

**设置目录别名 alias**

```javascript
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 别名 alias
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  }
}
```

**代理配置**

```javascript
module.exports = {
  // 代理设置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.1:8080/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

**环境配置**

```javascript
// .env.development
NODE_ENV = 'development'
BASE_URL = '/'
VUE_APP_NAME = 'vue-quick-build'
VUE_APP_FETCH_URL = 'http://192.168.0.1/
VUE_APP_PUBLIC_KEY = 'VUE_APP_PUBLIC_KEY'
// .env.test
NODE_ENV = 'test'
BASE_URL = '/'
VUE_APP_NAME = 'vue-quick-build'
VUE_APP_FETCH_URL = 'https://test.com/'
VUE_APP_PUBLIC_KEY = 'VUE_APP_PUBLIC_KEY'
// .env.production
NODE_ENV = 'production'
BASE_URL = '/'
VUE_APP_NAME = 'vue-quick-build'
VUE_APP_FETCH_URL = 'https://production.com/'
VUE_APP_PUBLIC_KEY = 'VUE_APP_PUBLIC_KEY'
```

**多页面**

```javascript
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}
```

## [Vue Router](https://next.router.vuejs.org/zh/)

HTML

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

JavaScript

```javascript
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
  // 4. 使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')
```

[动态路由匹配](https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html)

动态路径参数(dynamic segment)

[path-to-regexp](https://github.com/pillarjs/path-to-regexp)

```javascript
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    )
  },
}

const routes = [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', name: 'user', component: User },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
    { path: '/user-:afterUser(.*)', component: UserGeneric },
  ]
```

[嵌套路由](https://next.router.vuejs.org/zh/guide/essentials/nested-routes.html)

```javascript
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功 
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

[编程式导航](https://next.router.vuejs.org/zh/guide/essentials/navigation.html)

| 声明式 | 编程式 |
| --- | --- |
| `<router-link :to="...">` | router.push(...) |
| `<router-link :to="..." replace>` | router.replace(...) |


```javascript
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

```javascript
// --替换当前位置
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })

// --横跨历史
// 向前移动一条记录，与 router.forward() 相同
router.go(1)

// 返回一条记录，与router.back() 相同
router.go(-1)

// 前进 3 条记录
router.go(3)

// 如果没有那么多记录，静默失败
router.go(-100)
router.go(100)
```

[命名路由](https://next.router.vuejs.org/zh/guide/essentials/named-routes.html)

```javascript
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]

<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
// Equivalent
router.push({ name: 'user', params: { username: 'erina' } })
```

[命名视图](https://next.router.vuejs.org/zh/guide/essentials/named-views.html)

```javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        LeftSidebar,
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
})


<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

[重定向和别名](https://next.router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)

```javascript
// 重定向
const routes = [
    { path: '/home', redirect: '/' },
    { path: '/home', redirect: { name: 'homepage' } },
    {
        // /search/screens -> /search?q=screens
        path: '/search/:searchText',
        redirect: to => {
          // 方法接收目标路由作为参数
          // return 重定向的字符串路径/路径对象
          return { path: '/search', query: { q: to.params.searchText } }
        },
      },
      {
        path: '/search',
        // ...
      },
]


// 别名
const routes = [
  { path: '/', component: Homepage, alias: '/home' },
  {
    path: '/users',
    component: UsersLayout,
    children: [
      // 为这 3 个 URL 呈现 UserList
      // - /users
      // - /users/list
      // - /people
      { path: '', component: UserList, alias: ['/people', 'list'] },
    ],
  },
]
```

[路由组件传参](https://next.router.vuejs.org/zh/guide/essentials/passing-props.html)

```javascript
// 当 props 为 true 时，route.params 将被设置为组件的 props。
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]


// 对于有命名视图的路由，必须为每个命名视图定义 props 配置
const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false }
  }
]
```

[不同的历史记录模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html)

[导航守卫](https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html)

导航解析流程

1.  导航被触发。 
2.  在失活的组件里调用 beforeRouteLeave 守卫。 
3.  调用全局的 beforeEach 守卫。 
4.  在重用的组件里调用 beforeRouteUpdate 守卫
5.  在路由配置里调用 beforeEnter。 
6.  解析异步路由组件。 
7.  在被激活的组件里调用 beforeRouteEnter。 
8.  调用全局的 beforeResolve 守卫
9.  导航被确认。 
10.  调用全局的 afterEach 钩子。 
11.  触发 DOM 更新。 
12.  调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。 

[路由元信息](https://next.router.vuejs.org/zh/guide/advanced/meta.html)

[数据获取](https://next.router.vuejs.org/zh/guide/advanced/data-fetching.html)

[组合式 API](https://next.router.vuejs.org/zh/guide/advanced/composition-api.html)

```javascript
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}
```

[过渡动效](https://next.router.vuejs.org/zh/guide/advanced/transitions.html)

[滚动行为](https://next.router.vuejs.org/zh/guide/advanced/scroll-behavior.html)

```javascript
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})
```

[路由懒加载](https://next.router.vuejs.org/zh/guide/advanced/lazy-loading.html)

```javascript
// 动态导入
// 将 import UserDetails from './views/UserDetails' 替换成
const UserDetails = () => import('./views/UserDetails')

const router = createRouter({
  // ...
  routes: [{ path: '/users/:id', component: UserDetails }],
})

// 把组件按组分块
const UserDetails = () =>
  import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () =>
  import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () =>
  import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
```
[扩展 RouterLink](https://next.router.vuejs.org/zh/guide/advanced/extending-router-link.html)  <br />  [导航故障](https://next.router.vuejs.org/zh/guide/advanced/navigation-failures.html)  <br />  [动态路由](https://next.router.vuejs.org/zh/guide/advanced/dynamic-routing.html)


**API**

- `<router-link>` Props
   - [to](https://next.router.vuejs.org/zh/api/#to)	目标路由的链接
   - [replace](https://next.router.vuejs.org/zh/api/#replace)
   - [active-class](https://next.router.vuejs.org/zh/api/#active-class)	链接激活时，应用于渲染的 `<a>` 的 class
   - [aria-current-value](https://next.router.vuejs.org/zh/api/#aria-current-value)	当链接激活时，传递给属性 aria-current 的值
   - [custom](https://next.router.vuejs.org/zh/api/#custom)	`<router-link>` 是否应该将其内容包裹在 `<a>` 元素中
```javascript
<router-link to="/home" custom v-slot="{ navigate, href, route }">
  <a :href="href" @click="navigate">{{ route.fullPath }}</a>
</router-link>

渲染成 <a href="/home">/home</a>。
```

- [exact-active-class](https://next.router.vuejs.org/zh/api/#exact-active-class)	链接精准激活时，应用于渲染的 `<a>` 的 class
   - [v-slot](https://next.router.vuejs.org/zh/api/#router-link-%E7%9A%84-v-slot)
- `<router-view>` Props
   - [name](https://next.router.vuejs.org/zh/api/#name)
   - [route](https://next.router.vuejs.org/zh/api/#route)
   - [v-slot](https://next.router.vuejs.org/zh/api/#router-view-%E7%9A%84-v-slot)
- [createRouter](https://next.router.vuejs.org/zh/api/#createrouter)
- [createWebHistory](https://next.router.vuejs.org/zh/api/#createwebhistory)**	创建一个 HTML5 历史，应用程序必须通过 http 协议被提供服务。**
- [createWebHashHistory](https://next.router.vuejs.org/zh/api/#createwebhashhistory)**	创建一个 hash 历史记录**
- [createMemoryHistory](https://next.router.vuejs.org/zh/api/#creatememoryhistory)**	创建一个基于内存的历史记录**
- [NavigationFailureType](https://next.router.vuejs.org/zh/api/#navigationfailuretype)
| 成员 | 值 | 描述 |
| --- | --- | --- |
| aborted | 4 | 终止导航是指由于导航守卫返回 false 或调用 next(false) 而失败的导航。 |
| cancelled | 8 | 取消导航是指由于最近的导航完成启动（不一定是完成）而失败的导航。 |
| duplicated | 16 | 重复导航是指在启动时已经在同一位置失败的导航。 |


- [START_LOCATION](https://next.router.vuejs.org/zh/api/#start-location)**	路由所在的初始路由地址**
- [Composition API](https://next.router.vuejs.org/zh/api/#composition-api)
   - [onBeforeRouteLeave](https://next.router.vuejs.org/zh/api/#onbeforerouteleave)
   - [onBeforeRouteUpdate](https://next.router.vuejs.org/zh/api/#onbeforerouteupdate)
   - [useLink](https://next.router.vuejs.org/zh/api/#uselink)

```javascript
import { RouterLink, useLink } from 'vue-router'

export default {
  name: 'AppLink',

  props: {
    // 如果使用 TypeScript，请添加 @ts-ignore
    ...RouterLink.props,
    inactiveClass: String,
  },

  setup(props) {
    const { route, href, isActive, isExactActive, navigate } = useLink(props)

    const isExternalLink = computed(
      () => typeof props.to === 'string' && props.to.startsWith('http')
    )

    return { isExternalLink, href, navigate, isActive }
  },
}
```

- [useRoute](https://next.router.vuejs.org/zh/api/#useroute)
   - [useRouter](https://next.router.vuejs.org/zh/api/#userouter)



- [Router 属性](https://next.router.vuejs.org/zh/api/#router-%E5%B1%9E%E6%80%A7)
   - [currentRoute](https://next.router.vuejs.org/zh/api/#currentroute)	当前路由地址
   - [options](https://next.router.vuejs.org/zh/api/#options)
- [Router 方法](https://next.router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95)
   - [addRoute](https://next.router.vuejs.org/zh/api/#addroute)(parentName: string | symbol, route: RouteRecordRaw): () => void
   - [addRoute](https://next.router.vuejs.org/zh/api/#addroute-1)
   - [afterEach](https://next.router.vuejs.org/zh/api/#aftereach)
   - [back](https://next.router.vuejs.org/zh/api/#back)
   - [beforeEach](https://next.router.vuejs.org/zh/api/#beforeeach)
   - [beforeResolve](https://next.router.vuejs.org/zh/api/#beforeresolve)
   - [forward](https://next.router.vuejs.org/zh/api/#forward)
   - [getRoutes](https://next.router.vuejs.org/zh/api/#getroutes)
   - [go](https://next.router.vuejs.org/zh/api/#go)(delta: number): void
   - [hasRoute](https://next.router.vuejs.org/zh/api/#hasroute)(name: string | symbol): boolean
   - [isReady](https://next.router.vuejs.org/zh/api/#isready)
   - [onError](https://next.router.vuejs.org/zh/api/#onerror)
   - [push](https://next.router.vuejs.org/zh/api/#push)(to: RouteLocationRaw)
   - [removeRoute](https://next.router.vuejs.org/zh/api/#removeroute)(name: string | symbol): void
   - [replace](https://next.router.vuejs.org/zh/api/#replace-1)(to: RouteLocationRaw)
   - [resolve](https://next.router.vuejs.org/zh/api/#resolve)
- [RouterOptions](https://next.router.vuejs.org/zh/api/#routeroptions)
   - [history](https://next.router.vuejs.org/zh/api/#history)
   - [linkActiveClass](https://next.router.vuejs.org/zh/api/#linkactiveclass)
   - [linkExactActiveClass](https://next.router.vuejs.org/zh/api/#linkexactactiveclass)
   - [parseQuery](https://next.router.vuejs.org/zh/api/#parsequery)
   - [routes](https://next.router.vuejs.org/zh/api/#routes)
   - [scrollBehavior](https://next.router.vuejs.org/zh/api/#scrollbehavior)
   - [stringifyQuery](https://next.router.vuejs.org/zh/api/#stringifyquery)
- [RouteRecordRaw](https://next.router.vuejs.org/zh/api/#routerecordraw)
   - [path](https://next.router.vuejs.org/zh/api/#path)
   - [redirect](https://next.router.vuejs.org/zh/api/#redirect)
   - [children](https://next.router.vuejs.org/zh/api/#children)
   - [alias](https://next.router.vuejs.org/zh/api/#alias)
   - [name](https://next.router.vuejs.org/zh/api/#name-1)
   - [beforeEnter](https://next.router.vuejs.org/zh/api/#beforeenter)
   - [props](https://next.router.vuejs.org/zh/api/#props)
   - [meta](https://next.router.vuejs.org/zh/api/#meta)
- [RouteRecordNormalized](https://next.router.vuejs.org/zh/api/#routerecordnormalized)
   - [aliasOf](https://next.router.vuejs.org/zh/api/#aliasof)
   - [beforeEnter](https://next.router.vuejs.org/zh/api/#beforeenter-1)
   - [children](https://next.router.vuejs.org/zh/api/#children-1)
   - [components](https://next.router.vuejs.org/zh/api/#components)
   - [meta](https://next.router.vuejs.org/zh/api/#meta-1)
   - [name](https://next.router.vuejs.org/zh/api/#name-2)
   - [path](https://next.router.vuejs.org/zh/api/#path-1)
   - [props](https://next.router.vuejs.org/zh/api/#props-1)
   - [redirect](https://next.router.vuejs.org/zh/api/#redirect-1)
- [RouteLocationRaw](https://next.router.vuejs.org/zh/api/#routelocationraw)
- [RouteLocation](https://next.router.vuejs.org/zh/api/#routelocation)
- [RouteLocationNormalized](https://next.router.vuejs.org/zh/api/#routelocationnormalized)
   - [fullPath](https://next.router.vuejs.org/zh/api/#fullpath)
   - [hash](https://next.router.vuejs.org/zh/api/#hash)
   - [query](https://next.router.vuejs.org/zh/api/#query)
   - [matched](https://next.router.vuejs.org/zh/api/#matched)
   - [meta](https://next.router.vuejs.org/zh/api/#meta-2)
   - [name](https://next.router.vuejs.org/zh/api/#name-3)
   - [params](https://next.router.vuejs.org/zh/api/#params)
   - [path](https://next.router.vuejs.org/zh/api/#path-2)
   - [redirectedFrom](https://next.router.vuejs.org/zh/api/#redirectedfrom)
- [NavigationFailure](https://next.router.vuejs.org/zh/api/#navigationfailure)
   - [from](https://next.router.vuejs.org/zh/api/#from)
   - [to](https://next.router.vuejs.org/zh/api/#to-1)
   - [type](https://next.router.vuejs.org/zh/api/#type)
- [NavigationGuard](https://next.router.vuejs.org/zh/api/#navigationguard)



## [Pinia](https://pinia.vuejs.org/)

```javascript
yarn add pinia
# or with npm
npm install pinia


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

**Core Concepts**

- [Store](https://pinia.vuejs.org/core-concepts/) 是一个用reactive 包裹的对象
```javascript
// 定义一个 Store
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  
 getters: {
    doubleCount: (state) => state.counter * 2,
  },
  
 actions: {
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
})


// 使用 store
import { useStore } from '@/stores/counter'

export default {
  setup() {
    const store = useStore()

    // 这也会为插件添加的属性创建引用
    // 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
    const { name, counter } = storeToRefs(store)

    return {
      name,
      doubleCount
    }
  },
})
```

[State](https://pinia.vuejs.org/core-concepts/state.html)  <br />  [Getters](https://pinia.vuejs.org/core-concepts/getters.html)  <br />  [Actions](https://pinia.vuejs.org/core-concepts/actions.html)  <br />  [Plugins](https://pinia.vuejs.org/core-concepts/plugins.html)  <br />  [Stores outside of components](https://pinia.vuejs.org/core-concepts/outside-component-usage.html)



## [~~Vuex~~](https://next.vuex.vuejs.org/zh/)

采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

```javascript
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>

npm install vuex --save
npm install vuex@next --save
```

-  状态存储是响应式的 
-  改变 store 中的状态的唯一途径就是显式地提交 (commit) mutations 

![](./assets/1646406430612-d4971b8e-4d7f-4462-8b32-8f9c873aa43a.png)

```javascript
import Vimport { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp({ 
/* 根组件 */
    methods: {
      increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
      }
    }
 })

// 将 store 实例作为插件安装
app.use(store)
```

**核心概念**

- State	获得 Vuex 状态

```javascript
import { mapState } from 'vuex'

export default {
  // ...
  computed: {
       localComputed () { /* ... */ },
      // 使用对象展开运算符将此对象混入到外部对象中
      mapState({
        // 箭头函数可使代码更简练
        count: state => state.count,
    
        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'count',
    
        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState (state) {
          return state.count + this.localCount
        }
      })
  }
}
```

- Getter	派生状态，计算属性

```javascript
const store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
        return getters.doneTodos.length
      },
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
      }
  }
})

// 通过属性访问
store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
store.getters.doneTodosCount // -> 1
// 通过方法访问
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }


// 将 store 中的 getter 映射到局部计算属性
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      doneCount: 'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```

- Mutation	更改状态

```javascript
const store = createStore({
  state: {
    count: 1
  },
  mutations: {  // 必须是同步函数
      increment (state, payload) {
        state.count += payload.amount
      }
    }
})

store.commit('increment', {
  amount: 10
})


import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

- Action	异步

```javascript
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
     incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('increment')
        }, 1000)
      },
      // // 假设 getData() 和 getOtherData() 返回的是 Promise
      async actionA ({ commit }) {
        commit('gotData', await getData())
      },
      async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
      }
  }
})

// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})


import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

- Module

```javascript
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

命名空间

```javascript
const store = createStore({
  modules: {
    account: {
      namespaced: true,

      // 模块内容（module assets）
      state: () => ({ ... }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },

      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: () => ({ ... }),
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },

        // 进一步嵌套命名空间
        posts: {
          namespaced: true,

          state: () => ({ ... }),
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})
```

简化使用

```javascript
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}

// 或

import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // 在 `some/nested/module` 中查找
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}
```

require.context(directory, useSubdirectories, regExp, mode = 'sync')

**API**

- [Store](https://next.vuex.vuejs.org/zh/api/#store)
   - [createStore](https://next.vuex.vuejs.org/zh/api/#createstore)
- [Store 构造器选项](https://next.vuex.vuejs.org/zh/api/#store-%E6%9E%84%E9%80%A0%E5%99%A8%E9%80%89%E9%A1%B9)
   - [state](https://next.vuex.vuejs.org/zh/api/#state)
   - [mutations](https://next.vuex.vuejs.org/zh/api/#mutations)
   - [actions](https://next.vuex.vuejs.org/zh/api/#actions)
   - [getters](https://next.vuex.vuejs.org/zh/api/#getters)
   - [modules](https://next.vuex.vuejs.org/zh/api/#modules)
   - [plugins](https://next.vuex.vuejs.org/zh/api/#plugins)
   - [strict](https://next.vuex.vuejs.org/zh/api/#strict)
   - [devtools](https://next.vuex.vuejs.org/zh/api/#devtools)
- [Store 实例属性](https://next.vuex.vuejs.org/zh/api/#store-%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7)
   - [state](https://next.vuex.vuejs.org/zh/api/#state-2)
   - [getters](https://next.vuex.vuejs.org/zh/api/#getters-2)
- [Store 实例方法](https://next.vuex.vuejs.org/zh/api/#store-%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95)
   - [commit](https://next.vuex.vuejs.org/zh/api/#commit)
   - [dispatch](https://next.vuex.vuejs.org/zh/api/#dispatch)
   - [replaceState](https://next.vuex.vuejs.org/zh/api/#replacestate)
   - [watch](https://next.vuex.vuejs.org/zh/api/#watch)
   - [subscribe](https://next.vuex.vuejs.org/zh/api/#subscribe)
   - [subscribeAction](https://next.vuex.vuejs.org/zh/api/#subscribeaction)
   - [registerModule](https://next.vuex.vuejs.org/zh/api/#registermodule)
   - [unregisterModule](https://next.vuex.vuejs.org/zh/api/#unregistermodule)
   - [hasModule](https://next.vuex.vuejs.org/zh/api/#hasmodule)
   - [hotUpdate](https://next.vuex.vuejs.org/zh/api/#hotupdate)
- [组件绑定的辅助函数](https://next.vuex.vuejs.org/zh/api/#%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9A%E7%9A%84%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)
   - [mapState](https://next.vuex.vuejs.org/zh/api/#mapstate)
   - [mapGetters](https://next.vuex.vuejs.org/zh/api/#mapgetters)
   - [mapActions](https://next.vuex.vuejs.org/zh/api/#mapactions)
   - [mapMutations](https://next.vuex.vuejs.org/zh/api/#mapmutations)
   - [createNamespacedHelpers](https://next.vuex.vuejs.org/zh/api/#createnamespacedhelpers)
- [组合式函数](https://next.vuex.vuejs.org/zh/api/#%E7%BB%84%E5%90%88%E5%BC%8F%E5%87%BD%E6%95%B0)
   - [useStore](https://next.vuex.vuejs.org/zh/api/#usestore)

```javascript
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // 在 computed 函数中访问 state
      count: computed(() => store.state.count),

      // 在 computed 函数中访问 getter
      double: computed(() => store.getters.double),
      
       // 使用 mutation
      increment: () => store.commit('increment'),

      // 使用 action
      asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
}
```

表单处理——双向绑定的计算属性

```javascript
<input v-model="message">

// ...
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```

## [Vue Loader](https://vue-loader.vuejs.org/zh/)

一个 [webpack](https://webpack.js.org/) 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件

### Scoped CSS

当 `<style>` 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。父组件的样式将不会渗透到子组件中
```html
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

转换结果：

```html
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

深度选择器

```javascript
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>


<style scoped>
:deep(<inner-selector>)
</style>

  
// 编译成：
.a[data-v-f3f3eg9] .b { /* ... */ }
```



**插槽选择器**

```javascript
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```

**全局选择器**

```javascript
<style scoped>
:global(.red) {
  color: red;
}
</style>
```

### [CSS Modules](https://vue-loader.vuejs.org/zh/guide/css-modules.html)

```javascript
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

```javascript
<template>
  <div>
    <p :class="{ [$style.red]: isRed }">
      Am I red?
    </p>
    <p :class="[$style.red, $style.bold]">
      Red and bold
    </p>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$style.red)
    // -> "red_1VyoJ-uZ"
    // 一个基于文件名和类名生成的标识符
  }
}
</script>
```

Vue SFC Style CSS 变量

```javascript
<template>
  <div class="text">hello</div>
</template>

<script>
  export default {
    data() {
      return {
        color: 'red',
        font: {
          size: '2em'
        }
      }
    }
</script>

<style>
  .text {
    color: v-bind(color);

    /* expressions (wrap in quotes) */
    font-size: v-bind('font.size');
  }
</style>
```

-  热重载 
-  函数式组件 
-  自定义块 
-  CSS 提取 
-  代码校验 (Linting) 



## —— 组件

## [Vue I18n](https://vue-i18n.intlify.dev/)

```javascript
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/vue-i18n@next"></script>

<div id="app">
  <p>{{ $t("message.hello") }}</p>  // for Legacy API
  <p>{{ t("message.hello") }}</p>  // for composition API
</div>
```

```javascript
// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// 2. Create i18n instance with options
const i18n = VueI18n.createI18n({
  legacy: false, // for composition API
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


// 3. Create a vue root instance
const app = Vue.createApp({
  // for composition API
  setup() {
    // ...
    const { t } = useI18n({ ... })
    return { ... , t }
  }
})

// 4. Install i18n instance to make the whole app i18n-aware
app.use(i18n)

// 5. Mount
app.mount('#app')
```

API

- [General](https://vue-i18n.intlify.dev/api/general)
   - [createI18n](https://vue-i18n.intlify.dev/api/general.html#createi18n)
      - [Type Parameters](https://vue-i18n.intlify.dev/api/general.html#type-parameters)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters)
      - [Returns](https://vue-i18n.intlify.dev/api/general.html#returns)
   - [DefineDateTimeFormat](https://vue-i18n.intlify.dev/api/general.html#definedatetimeformat)
   - [DefineLocaleMessage](https://vue-i18n.intlify.dev/api/general.html#definelocalemessage)
   - [DefineNumberFormat](https://vue-i18n.intlify.dev/api/general.html#definenumberformat)
   - [ExportedGlobalComposer](https://vue-i18n.intlify.dev/api/general.html#exportedglobalcomposer)
      - [availableLocales](https://vue-i18n.intlify.dev/api/general.html#availablelocales)
      - [fallbackLocale](https://vue-i18n.intlify.dev/api/general.html#fallbacklocale)
      - [locale](https://vue-i18n.intlify.dev/api/general.html#locale)
   - [I18n](https://vue-i18n.intlify.dev/api/general.html#i18n)
      - [global](https://vue-i18n.intlify.dev/api/general.html#global)
      - [mode](https://vue-i18n.intlify.dev/api/general.html#mode)
      - [install(app, options)](https://vue-i18n.intlify.dev/api/general.html#install-app-options)
   - [I18nAdditionalOptions](https://vue-i18n.intlify.dev/api/general.html#i18nadditionaloptions)
      - [globalInjection](https://vue-i18n.intlify.dev/api/general.html#globalinjection)
      - [legacy](https://vue-i18n.intlify.dev/api/general.html#legacy)
   - [I18nInjectionKey](https://vue-i18n.intlify.dev/api/general.html#i18ninjectionkey)
   - [I18nMode](https://vue-i18n.intlify.dev/api/general.html#i18nmode)
   - [I18nOptions](https://vue-i18n.intlify.dev/api/general.html#i18noptions)
   - [I18nPluginOptions](https://vue-i18n.intlify.dev/api/general.html#i18npluginoptions)
      - [globalInstall](https://vue-i18n.intlify.dev/api/general.html#globalinstall)
      - [useI18nComponentName](https://vue-i18n.intlify.dev/api/general.html#usei18ncomponentname)
   - [I18nScope](https://vue-i18n.intlify.dev/api/general.html#i18nscope)
   - [VERSION](https://vue-i18n.intlify.dev/api/general.html#version)
   - [DateTimeOptions](https://vue-i18n.intlify.dev/api/general.html#datetimeoptions)
      - [fallbackWarn](https://vue-i18n.intlify.dev/api/general.html#fallbackwarn)
      - [key](https://vue-i18n.intlify.dev/api/general.html#key)
      - [locale](https://vue-i18n.intlify.dev/api/general.html#locale-1)
      - [missingWarn](https://vue-i18n.intlify.dev/api/general.html#missingwarn)
      - [part](https://vue-i18n.intlify.dev/api/general.html#part)
   - [FallbackLocale](https://vue-i18n.intlify.dev/api/general.html#fallbacklocale-1)
   - [fallbackWithLocaleChain](https://vue-i18n.intlify.dev/api/general.html#fallbackwithlocalechain)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters-2)
      - [Returns](https://vue-i18n.intlify.dev/api/general.html#returns-1)
   - [fallbackWithSimple](https://vue-i18n.intlify.dev/api/general.html#fallbackwithsimple)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters-3)
      - [Returns](https://vue-i18n.intlify.dev/api/general.html#returns-2)
   - [LinkedModifiers](https://vue-i18n.intlify.dev/api/general.html#linkedmodifiers)
   - [Locale](https://vue-i18n.intlify.dev/api/general.html#locale-2)
   - [LocaleFallbacker](https://vue-i18n.intlify.dev/api/general.html#localefallbacker)
   - [LocaleMessage](https://vue-i18n.intlify.dev/api/general.html#localemessage)
   - [LocaleMessageDictionary](https://vue-i18n.intlify.dev/api/general.html#localemessagedictionary)
   - [LocaleMessages](https://vue-i18n.intlify.dev/api/general.html#localemessages)
   - [LocaleMessageType](https://vue-i18n.intlify.dev/api/general.html#localemessagetype)
   - [LocaleMessageValue](https://vue-i18n.intlify.dev/api/general.html#localemessagevalue)
   - [MessageResolver](https://vue-i18n.intlify.dev/api/general.html#messageresolver)
   - [NamedValue](https://vue-i18n.intlify.dev/api/general.html#namedvalue)
   - [NumberOptions](https://vue-i18n.intlify.dev/api/general.html#numberoptions)
      - [fallbackWarn](https://vue-i18n.intlify.dev/api/general.html#fallbackwarn-1)
      - [key](https://vue-i18n.intlify.dev/api/general.html#key-1)
      - [locale](https://vue-i18n.intlify.dev/api/general.html#locale-3)
      - [missingWarn](https://vue-i18n.intlify.dev/api/general.html#missingwarn-1)
      - [part](https://vue-i18n.intlify.dev/api/general.html#part-1)
   - [Path](https://vue-i18n.intlify.dev/api/general.html#path)
   - [PathValue](https://vue-i18n.intlify.dev/api/general.html#pathvalue)
   - [PluralizationRules](https://vue-i18n.intlify.dev/api/general.html#pluralizationrules)
   - [PostTranslationHandler](https://vue-i18n.intlify.dev/api/general.html#posttranslationhandler)
   - [registerLocaleFallbacker](https://vue-i18n.intlify.dev/api/general.html#registerlocalefallbacker)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters-4)
   - [registerMessageResolver](https://vue-i18n.intlify.dev/api/general.html#registermessageresolver)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters-5)
   - [resolveValue](https://vue-i18n.intlify.dev/api/general.html#resolvevalue)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters-6)
      - [Returns](https://vue-i18n.intlify.dev/api/general.html#returns-3)
   - [resolveWithKeyValue](https://vue-i18n.intlify.dev/api/general.html#resolvewithkeyvalue)
      - [Parameters](https://vue-i18n.intlify.dev/api/general.html#parameters-7)
      - [Returns](https://vue-i18n.intlify.dev/api/general.html#returns-4)
   - [TranslateOptions](https://vue-i18n.intlify.dev/api/general.html#translateoptions)
      - [default](https://vue-i18n.intlify.dev/api/general.html#default)
      - [escapeParameter](https://vue-i18n.intlify.dev/api/general.html#escapeparameter)
      - [fallbackWarn](https://vue-i18n.intlify.dev/api/general.html#fallbackwarn-2)
      - [list](https://vue-i18n.intlify.dev/api/general.html#list)
      - [locale](https://vue-i18n.intlify.dev/api/general.html#locale-4)
      - [missingWarn](https://vue-i18n.intlify.dev/api/general.html#missingwarn-2)
      - [named](https://vue-i18n.intlify.dev/api/general.html#named)
      - [plural](https://vue-i18n.intlify.dev/api/general.html#plural)
      - [resolvedMessage](https://vue-i18n.intlify.dev/api/general.html#resolvedmessage)
- [Legacy API](https://vue-i18n.intlify.dev/api/legacy)
- [Composition API](https://vue-i18n.intlify.dev/api/composition)
- [Components](https://vue-i18n.intlify.dev/api/component)
- [Directives](https://vue-i18n.intlify.dev/api/directive)
- [Component Injections](https://vue-i18n.intlify.dev/api/injection)


## [SSR](https://v3.cn.vuejs.org/guide/ssr/introduction.html)

![](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png#clientId=u9a034459-3792-4&crop=0&crop=0&crop=1&crop=1&errorMessage=unknown%20error&id=yZjUA&originHeight=892&originWidth=1946&originalType=binary&ratio=1&rotation=0&showTitle=false&status=error&style=none&taskId=ue8e28367-b99d-4946-909f-5f0119f31f9&title=)

```javascript
const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const server = require('express')()

server.get('*', async (req, res) => {
  const app = createSSRApp({
    data() {
      return {
        user: 'John Doe'
      }
    },
    template: `<div>Current user is: {{ user }}</div>`
  })

  const appContent = await renderToString(app)
  const html = `
  <html>
    <body>
      <h1>My First Heading</h1>
      <div id="app">${appContent}</div>
    </body>
  </html>
  `

  res.end(html)
})

server.listen(8080)
```




## [vitepress](https://github.com/vuejs/vitepress)

```
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.js
│  │  └─ config.js
│  └─ index.md
└─ package.json
  
    "scripts": {
      "dev": "vitepress dev docs --open",
      "build": "vitepress build docs",
      "serve": "vitepress serve docs"
    }
```

Custom Containers
```markdown
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


custom title
::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
```
Line Highlighting in Code Blocks
```markdown
```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
```

[**Configs**](https://vitepress.vuejs.org/config/introduction.html)
```typescript
export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: 'public/logo.svg' }
    ]
  ],
  base: '/',
  appearance: true,
  lastUpdated: true,

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',

    //   头部导航
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' }
        ]
      },
      { text: '关于', link: '/about/' },
    ],

    outline: [1, 4],
    outlineTitle: 'TOC',
    //   侧边导航
    sidebar: [
      {
        text: 'Guide',
    		collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdatedText: 'Updated Date'
  },

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
}

```


## [awesome-vue](https://github.com/vuejs/awesome-vue)

**Template**

- [vitesse](https://github.com/antfu/vitesse) - Opinionated Vite + Vue Starter Template
- [vitesse-lite](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse
- [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3) - Vitesse for Nuxt 3
- [vitesse-webext](https://github.com/antfu/vitesse-webext) - WebExtension Vite starter template

[vueuse](https://github.com/vueuse/vueuse)	Collection of essential Vue Composition Utilities for Vue 2 and 3
```javascript
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  },
}
```


[nuxt.js](https://github.com/nuxt/nuxt.js)

[vitest](https://github.com/vitest-dev/vitest)	A Vite-native test framework.
```javascript
import { assert, describe, expect, it } from 'vitest'

describe('suite name', () => {
  it('foo', () => {
    expect(1 + 1).toEqual(2)
    expect(true).to.be.true
  })

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})
```

[test-utils](https://github.com/vuejs/test-utils)	Vue Test Utils for Vue 3

```javascript
import { mount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
```





