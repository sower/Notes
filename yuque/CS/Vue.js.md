<a name="wvfUu"></a>
# —— [Vue.js](https://vue3js.cn/docs/zh/) ——
一套构建用户界面的渐进式框架。<br />Vue 只关注视图层， 采用自底向上增量开发的设计。
```javascript
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<!-- Vue3 --!>
<script src="https://unpkg.com/vue@next"></script>
var vm = new Vue({
  // 选项
})
// vue3
const RootComponent = { /* 选项 */ }
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
```
```html
<html>
<head>
    <title>VueJs HelloWorld</title>
    <script type = "text/javascript" src = "vue.js"></script>
</head>
<body>
    <div id="test" style="text-align:center;">
        <h1>{{ message }}</h1>
        <h2>{{content.front}}</h2>
        <h2>{{content.back}}</h2>
        <p>{{details()}}</p>
    </div>
    
    <script type="text/javascript">
        const app = Vue.createApp({
            data() {
                return{
                    message: 'My first VueJS Task',
                    content:{
                        front:"前端",
                        back:'后端'
                    }
                }
            },
            methods: {
                details: function () {
                    return this.message + "...";
                }
            }
        }).mount('#test');
    </script>
</body>
</html>
```
生命周期<br />![](https://v3.vuejs.org/images/lifecycle.svg#crop=0&crop=0&crop=1&crop=1&id=Q7xGM&originHeight=1388&originWidth=838&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
<a name="iGpsp"></a>
## 应用配置

- [errorHandler](https://v3.cn.vuejs.org/api/application-config.html#errorhandler)
- [warnHandler](https://v3.cn.vuejs.org/api/application-config.html#warnhandler)
- [globalProperties](https://v3.cn.vuejs.org/api/application-config.html#globalproperties)
- [optionMergeStrategies](https://v3.cn.vuejs.org/api/application-config.html#optionmergestrategies)
- [performance](https://v3.cn.vuejs.org/api/application-config.html#performance)
- [compilerOptions](https://v3.cn.vuejs.org/api/application-config.html#compileroptions)
   - [compilerOptions.isCustomElement](https://v3.cn.vuejs.org/api/application-config.html#compileroptions-iscustomelement)
   - [compilerOptions.whitespace](https://v3.cn.vuejs.org/api/application-config.html#compileroptions-whitespace)
   - [compilerOptions.delimiters](https://v3.cn.vuejs.org/api/application-config.html#compileroptions-delimiters)
   - [compilerOptions.comments](https://v3.cn.vuejs.org/api/application-config.html#compileroptions-comments)
- [isCustomElement](https://v3.cn.vuejs.org/api/application-config.html#iscustomelement)
<a name="fbcht"></a>
## 应用 API

- component	注册或检索全局组件
- config	[应用配置](https://v3.cn.vuejs.org/api/application-config.html)
- directive	注册或检索全局指令
```javascript
import { createApp } from 'vue'
const app = createApp({})
// 注册
app.directive('my-directive', {
  // 指令是具有一组生命周期的钩子：
  // 在绑定元素的 attribute 或事件监听器被应用之前调用
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 绑定元素的父组件被挂载时调用
  mounted() {},
  // 在包含组件的 VNode 更新之前调用
  beforeUpdate() {},
  // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
  updated() {},
  // 在绑定元素的父组件卸载之前调用
  beforeUnmount() {},
  // 卸载绑定元素的父组件时调用
  unmounted() {}
})
// 注册 (功能指令)
app.directive('my-directive', () => {
  // 这将被作为 `mounted` 和 `updated` 调用
})
// getter, 如果已注册，则返回指令定义
const myDirective = app.directive('my-directive')
```

- [mixin](https://v3.cn.vuejs.org/api/application-api.html#mixin)
- [mount](https://v3.cn.vuejs.org/api/application-api.html#mount)
- [provide](https://v3.cn.vuejs.org/api/application-api.html#provide)	设置一个可以被注入到应用范围内所有组件中的值
- [unmount](https://v3.cn.vuejs.org/api/application-api.html#unmount)
- [use](https://v3.cn.vuejs.org/api/application-api.html#use)	安装 Vue.js 插件
- [version](https://v3.cn.vuejs.org/api/application-api.html#version)
<a name="aRjXU"></a>
## 全局 API

- [createApp](https://v3.cn.vuejs.org/api/global-api.html#createapp)
- [h](https://v3.cn.vuejs.org/api/global-api.html#h)	返回一个”虚拟节点“ (VNode)
   - 参数
      - type	HTML 标签名、组件。使用返回 null 的函数将渲染一个注释
      - props	与在模板中使用的 attribute、prop 和事件相对应
      - children	子代 VNode，使用 h() 生成，或者使用字符串来获取“文本 VNode”，或带有插槽的对象。
```javascript
render() {
  return h('h1', {}, 'Some title')
}
```

- [defineAsyncComponent](https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent)
- [defineCustomElement](https://v3.cn.vuejs.org/api/global-api.html#definecustomelement)
- [resolveComponent](https://v3.cn.vuejs.org/api/global-api.html#resolvecomponent)
- [resolveDynamicComponent](https://v3.cn.vuejs.org/api/global-api.html#resolvedynamiccomponent)
- [resolveDirective](https://v3.cn.vuejs.org/api/global-api.html#resolvedirective)
- [withDirectives](https://v3.cn.vuejs.org/api/global-api.html#withdirectives)	允许将指令应用于 VNode
- [createRenderer](https://v3.cn.vuejs.org/api/global-api.html#createrenderer)
- [nextTick](https://v3.cn.vuejs.org/api/global-api.html#nexttick)
- [mergeProps](https://v3.cn.vuejs.org/api/global-api.html#mergeprops)	将包含 VNode prop 的多个对象合并为一个单独的对象
- [useCssModule](https://v3.cn.vuejs.org/api/global-api.html#usecssmodule)
- [version](https://v3.cn.vuejs.org/api/global-api.html#version)
<a name="Di8kQ"></a>
## 选项式 API
Data

- data

vm.a === vm.$data.a<br />以 _ 或 $ 开头的 property 不会被 Vue 实例代理，vm.$data._property
```javascript
// 直接创建一个实例
const data = { a: 1 }
// 这个对象将添加到组件实例中
const vm = Vue.createApp({
  data() {
    return data
  }
}).mount('#app')
console.log(vm.a) // => 1
```

- props	用于从父组件接收数据的数组或对象
```javascript
const app = createApp({})
// 简单语法
app.component('props-demo-simple', {
  props: ['size', 'myMessage']
})
// 对象语法，提供验证
app.component('props-demo-advanced', {
  props: {
    // 类型检查
    height: Number,
    // 类型检查 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: value => {
        return value >= 0
      }
    }
  }
})
```

- computed	{ [key: string]: Function | { get: Function, set: Function } }

计算属性：基于响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。默认只有 getter
```javascript
const app = createApp({
  data() {
    return { a: 1 }
  },
  computed: {
    // 仅读取
    aDouble() {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get() {
        return this.a + 1
      },
      set(v) {
        this.a = v - 1
      }
    }
  }
})
const vm = app.mount('#app')
console.log(vm.aPlus) // => 2
vm.aPlus = 3
console.log(vm.a) // => 2
console.log(vm.aDouble) // => 4
```

- methods	可通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例
```html
const app = createApp({
  data() {
    return { a: 1 }
  },
  methods: {
    plus() {
      this.a++
    }
  }
})
const vm = app.mount('#app')
vm.plus()
console.log(vm.a) // => 2
```

- watch	侦听器	{ [key: string]: string | Function | Object | Array}
```javascript
const app = createApp({
  data() {
    return {
      a: 1,
      b: 2,
      c: {
        d: 4
      },
      e: 5,
      f: 6
    }
  },
  watch: {
    // 侦听顶级 property
    a(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    },
    // 字符串方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler(val, oldVal) {
        console.log('c changed')
      },
      deep: true
    },
    // 侦听单个嵌套 property
    'c.d': function (val, oldVal) {
      // do something
    },
    // 该回调将会在侦听开始之后被立即调用
    e: {
      handler(val, oldVal) {
        console.log('e changed')
      },
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    f: [
      'handle1',
      function handle2(val, oldVal) {
        console.log('handle2 triggered')
      },
      {
        handler: function handle3(val, oldVal) {
          console.log('handle3 triggered')
        }
        /* ... */
      }
    ]
  },
  methods: {
    someMethod() {
      console.log('b changed')
    },
    handle1() {
      console.log('handle 1 triggered')
    }
  }
})
const vm = app.mount('#app')
vm.a = 3 // => new: 3, old: 1
```

- emits	{ [key: string]: string | Function | Object | Array}
```javascript
const app = createApp({})
// 数组语法
app.component('todo-item', {
  emits: ['check'],
  created() {
    this.$emit('check')
  }
})
// 对象语法
app.component('reply-form', {
  emits: {
    // 没有验证函数
    click: null,
    // 带有验证函数
    submit: payload => {
      if (payload.email && payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  }
})
```
DOM

- template	字符串模板，用作 component 实例的标记。模板将会替换所挂载元素的 innerHTML
- render
```javascript
<div id="app" class="demo">
  <my-title blog-title="A Perfect Vue"></my-title>
</div>
const { createApp, h } = Vue
const app = createApp({})
app.component('my-title', {
  render() {
    return h(
      'h1',           // 标签名称
      this.blogTitle  // 标签内容
    )
  },
  props: {
    blogTitle: {
      type: String,
      required: true
    }
  }
})
app.mount('#app')
```
​

[生命周期钩子](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html)

- [beforeCreate](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforecreate)
- [created](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#created)
- [beforeMount](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforemount)
- [mounted](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#mounted)
- [beforeUpdate](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeupdate)
- [updated](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#updated)
- [activated](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#activated)
- [deactivated](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#deactivated)
- [beforeUnmount](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforeunmount)
- [unmounted](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#unmounted)
- [errorCaptured](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#errorcaptured)
- [renderTracked](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertracked)
- [renderTriggered](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#rendertriggered)



[资源](https://v3.cn.vuejs.org/api/options-assets.html)

- [directives](https://v3.cn.vuejs.org/api/options-assets.html#directives)	声明组件实例中可用指令的哈希表
```javascript
const app = createApp({})
app.component('focused-input', {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  template: `<input v-focus>`
})
```

- components	声明组件实例中可用组件的哈希表
```javascript
const Foo = {
  template: `<div>Foo</div>`
}
const app = createApp({
  components: {
    Foo
  },
  template: `<Foo />`
})
```
组合

- mixins
```javascript
const mixin = {
  created: function() {
    console.log(1)
  }
}
createApp({
  created() {
    console.log(2)
  },
  mixins: [mixin]
})
// => 1
// => 2
```

- extends	声明扩展另一个组件
- provide / inject	允许一个祖先组件向其所有子孙后代注入一个依赖
- setup	组件内部使用组合式 API 的入口点
```javascript
<template>
  <div>{{ count }} {{ object.foo }}</div>
</template>
<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const count = ref(0)
      const object = reactive({ foo: 'bar' })
      // 暴露到template中
      return {
        count,
        object
      }
    }
  }
</script>
```
​

[杂项](https://v3.cn.vuejs.org/api/options-misc.html)

- [name](https://v3.cn.vuejs.org/api/options-misc.html#name)	允许组件模板递归地调用自身
- [inheritAttrs](https://v3.cn.vuejs.org/api/options-misc.html#inheritattrs)
- [compilerOptions](https://v3.cn.vuejs.org/api/options-misc.html#compileroptions)



<a name="Qygwx"></a>
## ​[实例 property](https://v3.cn.vuejs.org/api/instance-properties.html)

- [$data](https://v3.cn.vuejs.org/api/instance-properties.html#data)	组件实例正在侦听的数据对象
- [$props](https://v3.cn.vuejs.org/api/instance-properties.html#props)	当前组件接收到的 props 对象
- [$el](https://v3.cn.vuejs.org/api/instance-properties.html#el)	组件实例正在使用的根 DOM 元素
- [$options](https://v3.cn.vuejs.org/api/instance-properties.html#options)	用于当前组件实例的初始化选项
```javascript
const app = createApp({
  customOption: 'foo',
  created() {
    console.log(this.$options.customOption) // => 'foo'
  }
})
```

- [$parent](https://v3.cn.vuejs.org/api/instance-properties.html#parent)	父实例
- [$root](https://v3.cn.vuejs.org/api/instance-properties.html#root)
- [$slots](https://v3.cn.vuejs.org/api/instance-properties.html#slots)
- [$refs](https://v3.cn.vuejs.org/api/instance-properties.html#refs)	持有注册过 [refattribute](https://v3.cn.vuejs.org/guide/component-template-refs.html) 的所有 DOM 元素和组件实例
```javascript
const app = Vue.createApp({})
app.component('base-input', {
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
      this.$refs.input.focus()
    }
  },
  mounted() {
    this.focusInput()
  }
})
```

- $attrs	包含了父作用域中不作为组件 props 或自定义事件的 attribute 绑定和事件
<a name="PrYXq"></a>
## 实例方法

- [$watch](https://v3.cn.vuejs.org/api/instance-methods.html#watch)
- 参数：
   - {string | Function} source
   - {Function | Object} callback
   - {Object} [options]
      - {boolean} deep
      - {boolean} immediate
      - {string} flush	'pre'、'post' 、 'sync'
- 返回：{Function} unwatch
```javascript
const app = createApp({
  data() {
    return {
      article: {
        text: 'Vue is awesome!'
      },
      comments: ['Indeed!', 'I agree']
    }
  },
  created() {
    this.$watch('article', () => {
      console.log('Article changed!')
    })
    this.$watch('comments', () => {
      console.log('Comments changed!')
    })
  },
  methods: {
    // 这些方法不会触发侦听器，因为我们只更改了Object/Array的一个property，
    // 不是对象/数组本身
    changeArticleText() {
      this.article.text = 'Vue 3 is awesome'
    },
    addComment() {
      this.comments.push('New comment')
    },
    // 这些方法将触发侦听器，因为我们完全替换了对象/数组
    changeWholeArticle() {
      this.article = { text: 'Vue 3 is awesome' }
    },
    clearComments() {
      this.comments = []
    }
  }
})
```

- $emit	触发当前实例上的事件
```javascript
<div id="emit-example-argument">
  <advice-component v-on:advise="showAdvice"></advice-component>
</div>
const app = createApp({
  methods: {
    showAdvice(advice) {
      alert(advice)
    }
  }
})
app.component('advice-component', {
  emits: ['advise'],
  data() {
    return {
      adviceText: 'Some advice'
    }
  },
  template: `
    <div>
      <input type="text" v-model="adviceText">
      <button v-on:click="$emit('advise', adviceText)">
        Click me for sending advice
      </button>
    </div>
  `
})
app.mount('#emit-example-argument')
```

- $forceUpdate	迫使组件实例重新渲染
- $nextTick	将回调延迟到下次 DOM 更新循环之后执行
```javascript
createApp({
  // ...
  methods: {
    // ...
    example() {
      // 修改数据
      this.message = 'changed'
      // DOM 尚未更新
      this.$nextTick(function() {
        // DOM 现在更新了
        // `this` 被绑定到当前实例
        this.doSomethingElse()
      })
    }
  }
})
```
<a name="TVeg9"></a>
## 指令(Directives)
动态参数：用 [方括号] 括起来的 JavaScript 表达式作为一个指令的参数<br />修饰符 (modifier) ：以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定

- [v-text](https://v3.cn.vuejs.org/api/directives.html#v-text)	更新元素的 textContent
   - “Mustache”语法 (双大括号) 的文本插值，支持JS表达式
- [v-html](https://v3.cn.vuejs.org/api/directives.html#v-html)	更新元素的 innerHTML
- [v-show](https://v3.cn.vuejs.org/api/directives.html#v-show)	根据表达式之真假值，切换元素的 display CSS property
- [v-if](https://v3.cn.vuejs.org/api/directives.html#v-if)	插入/移除元素
- [v-else](https://v3.cn.vuejs.org/api/directives.html#v-else)
- [v-else-if](https://v3.cn.vuejs.org/api/directives.html#v-else-if)
```javascript
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else>
  Not A/B
</div>
```

- v-for
```javascript
<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

- v-on	绑定事件监听器
- .stop - 调用 event.stopPropagation()。
- .prevent - 调用 event.preventDefault()。
- .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyAlias} - 仅当事件是从特定键触发时才触发回调。
- .once - 只触发一次回调。
- .left - 只当点击鼠标左键时触发。
- .right - 只当点击鼠标右键时触发。
- .middle - 只当点击鼠标中键时触发。
- .passive - { passive: true } 模式添加侦听器
```javascript
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>
<!-- 动态事件 -->
<button v-on:[event]="doThis"></button>
<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>
<!-- 缩写 -->
<button @click="doThis"></button>
<!-- 动态事件缩写 -->
<button @[event]="doThis"></button>
<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>
<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>
<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>
<!-- 串联修饰符 -->
<button @click.stop.prevent="doThis"></button>
<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter" />
<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>
<!-- 对象语法 -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

- v-bind	动态地绑定一个或多个 attribute，或一个组件 prop 到表达式
- .camel - 将 kebab-case attribute 名转换为 camelCase。
```javascript
<!-- 绑定 attribute -->
<img v-bind:src="imageSrc" />
<!-- 动态 attribute 名 -->
<button v-bind:[key]="value"></button>
<!-- 缩写 -->
<img :src="imageSrc" />
<!-- 动态 attribute 名缩写 -->
<button :[key]="value"></button>
<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName" />
<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">
  <!-- style 绑定 -->
  <div :style="{ fontSize: size + 'px' }"></div>
  <div :style="[styleObjectA, styleObjectB]"></div>
  <!-- 绑定一个全是 attribute 的对象 -->
  <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
  <!-- prop 绑定。"prop" 必须在 my-component 声明 -->
  <my-component :prop="someThing"></my-component>
  <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
  <child-component v-bind="$props"></child-component>
  <!-- XLink -->
  <svg><a :xlink:special="foo"></a></svg>
</div>
```

- v-model	在表单控件或者组件上创建双向绑定

限制于：<br /><input><br /><select><br /><textarea><br />components<br />修饰符：<br />
<br />[.lazy](https://v3.cn.vuejs.org/guide/forms.html#lazy) - 监听 change 而不是 input 事件<br />
<br />[.number](https://v3.cn.vuejs.org/guide/forms.html#number) - 输入字符串转为有效的数字<br />
<br />[.trim](https://v3.cn.vuejs.org/guide/forms.html#trim) - 输入首尾空格过滤<br />

```javascript
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```


- v-slot	提供具名插槽或需要接收 prop 的插槽



```javascript
<!-- 具名插槽 -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>

  <template v-slot:default>
    Default slot content
  </template>

  <template v-slot:footer>
    Footer content
  </template>
</base-layout>

<!-- 接收 prop 的具名插槽 -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>

<!-- 接收 prop 的默认插槽，使用了解构 -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
```


- v-pre	跳过这个元素和它的子元素的编译过程。用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。



```html
<span v-pre>{{ this will not be compiled }}</span>
```


- v-cloak	保持在元素上直到关联组件实例结束编译



```html
[v-cloak] {
  display: none;
}

<div v-cloak>
  {{ message }}
</div>

<!-- div不会显示，直到编译结束。-->
```


-  v-once	只渲染元素和组件一次 
-  v-memo	记住一个模板的子树 



<a name="5da1e5c2"></a>
### [自定义指令](https://vue3js.cn/docs/zh/guide/custom-directive.html)


```javascript
const app = Vue.createApp({})
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  mounted(el) {
    // Focus the element
    el.focus()
  }
})


// 注册局部指令
directives: {
  focus: {
    // 指令的定义
    mounted(el) {
      el.focus()
    }
  }
}
```


<a name="21c3477a"></a>
## [特殊指令](https://v3.cn.vuejs.org/api/special-attributes.html)


-  key 
-  ref	给元素或子组件注册引用信息 



```html
<!-- vm.$refs.p 会是 DOM 节点 -->
<p ref="p">hello</p>

<!-- vm.$refs.child 会是子组件实例 -->
<child-component ref="child"></child-component>

<!-- 当动态绑定时，我们可以将 ref 定义为回调函数，显式地传递元素或组件实例 -->
<child-component :ref="(el) => child = el"></child-component>
```


- is	使用动态组件



```html
<!-- 当 currentView 改变时组件就改变 -->
<component :is="currentView"></component>
```


<a name="2973bb67"></a>
## [内置组件](https://v3.cn.vuejs.org/api/built-in-components.html)

- [component](https://v3.cn.vuejs.org/api/built-in-components.html#component)	渲染一个“元组件”为动态组件
- [transition](https://v3.cn.vuejs.org/api/built-in-components.html#transition)	作为单个元素/组件的过渡效果
- [transition-group](https://v3.cn.vuejs.org/api/built-in-components.html#transition-group)	作为多个元素/组件的过渡效果
- [keep-alive](https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive)	缓存不活动的组件实例


<br />动态组件<br />

```javascript
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```


-  slot 
-  teleport 


<br />[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)<br />

```javascript
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```


<a name="77ee32de"></a>
## [响应性 API](https://v3.cn.vuejs.org/api/reactivity-api.html)

<br />[响应性基础 API](https://v3.cn.vuejs.org/api/basic-reactivity.html)<br />

- reactive	返回对象的响应式副本



```javascript
// 声明对象的格式
interface Member {
  id: number,
  name: string
};

// 定义一个成员对象
const userInfo: Member = reactive({
  id: 1,
  name: 'Tom'
});

// 读取用户名
console.log(userInfo.name);

// 修改用户名
userInfo.name = 'Petter';
```


- readonly



```javascript
const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // 用于响应性追踪
  console.log(copy.count)
})

// 变更 original 会触发依赖于副本的侦听器
original.count++

// 变更副本将失败并导致警告
copy.count++ // 警告!
```

- [isProxy](https://v3.cn.vuejs.org/api/basic-reactivity.html#isproxy)
- [isReactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreactive)
- [isReadonly](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreadonly)
- [toRaw](https://v3.cn.vuejs.org/api/basic-reactivity.html#toraw)
- [markRaw](https://v3.cn.vuejs.org/api/basic-reactivity.html#markraw)
- [shallowReactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreactive)
- [shallowReadonly](https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreadonly)

​

[Refs](https://v3.cn.vuejs.org/api/refs-api.html)

- [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref)



```typescript
interface Ref<T> {
  value: T
}

function ref<T>(value: T): Ref<T>
```


- unref	  isRef(val) ? val.value : val



```javascript
function useFoo(x: number | Ref<number>) {
  const unwrapped = unref(x) // unwrapped 现在一定是数字类型
}
```


- toRef



```typescript
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3
```


- toRefs



```typescript
const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型:

{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// ref 和原始 property 已经“链接”起来了
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
```

- [isRef](https://v3.cn.vuejs.org/api/refs-api.html#isref)
- [customRef](https://v3.cn.vuejs.org/api/refs-api.html#customref)
- [shallowRef](https://v3.cn.vuejs.org/api/refs-api.html#shallowref)
- [triggerRef](https://v3.cn.vuejs.org/api/refs-api.html#triggerref)

​

[Computed 与 watch](https://v3.cn.vuejs.org/api/computed-watch-api.html)

- [computed](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed)
```javascript
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0

plusOne.value++ // 错误
```


- watchEffect	立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。



```javascript
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

setTimeout(() => {
  count.value++
  // -> logs 1
}, 100)
```


- watch



```javascript
// 直接侦听一个 ref 或 getter
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})

// 侦听多个源
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})
```


<a name="4a1d1ce7"></a>
## [组合式 API](https://v3.cn.vuejs.org/api/composition-api.html)


- setup



```typescript
interface Data {
  [key: string]: unknown
}

interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
}

function setup(props: Data, context: SetupContext): Data
```


-  生命周期钩子 
-  Provide / Inject 



```javascript
import { InjectionKey, provide, inject } from 'vue'

const key: InjectionKey<string> = Symbol()

provide(key, 'foo') // 若提供非字符串值将出错

const foo = inject(key) // foo 的类型: string | undefined
```


- getCurrentInstance


<br />组合式示例<br />

```javascript
import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch, toRefs, computed } from 'vue'

// 在我们的组件中
setup (props) {
  // 使用 `toRefs` 创建对 props 中的 `user` property 的响应式引用
  const { user } = toRefs(props)

  const repositories = ref([])
  const getUserRepositories = async () => {
    // 更新 `props.user ` 到 `user.value` 访问引用值
    repositories.value = await fetchUserRepositories(user.value)
  }

  onMounted(getUserRepositories)

  // 在 user prop 的响应式引用上设置一个侦听器
  watch(user, getUserRepositories)

  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(
      repository => repository.name.includes(searchQuery.value)
    )
  })

  return {
    repositories,
    getUserRepositories,
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}
```


<a name="d41d8cd9"></a>
## [<script setup>](https://v3.cn.vuejs.org/api/sfc-script-setup.html)
```javascript
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code

import { useSlots, useAttrs, ref } from 'vue'

const slots = useSlots()
const attrs = useAttrs()
const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})

</script>
```


<a name="cb3165de"></a>
## 组件（Component）

<br />扩展 HTML 元素，封装可重用的代码<br />

```javascript
// 全局注册

// 创建一个Vue 应用
const app = Vue.createApp({})

// 定义一个名为 button-counter 的新全局组件
app.component('button-counter', {
  data() {    // data 选项必须是一个函数
    return {
      count: 0
    }
  },
  props: ['title'],
  template: `
    <button @click="count++">
      <h4>{{ title }}</h4> clicked me {{ count }} times.
    </button>`
})


// 局部注册
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  }
  // ...
}
```

<br />组件名<br />

-  kebab-case (短横线分隔命名) 	引用时使用 kebab-case 
-  PascalCase (首字母大写命名) 	引用时两种命名法都可以。     



<a name="f267f7da"></a>
### [Props](https://v3.cn.vuejs.org/guide/component-props.html)

<br />在组件上注册的一些自定义 attribute<br />
<br />单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。<br />
<br />验证<br />

```javascript
app.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default() {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数
      default() {
        return 'Default function'
      }
    }
  }
})
```

<br />[非 Prop 的 Attribute](https://v3.cn.vuejs.org/guide/component-attrs.html)<br />
<br />一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 [props](https://v3.cn.vuejs.org/guide/component-props) 或 emits 定义的 attribute。常见的示例包括 class、style 和 id 属性。<br />
<br />[Attribute 继承](https://v3.cn.vuejs.org/guide/component-attrs.html#attribute-%E7%BB%A7%E6%89%BF)<br />

```javascript
app.component('date-picker', {
  template: `
    <div class="date-picker">
      <input type="datetime-local" />
    </div>
  `
})

<!-- 具有非prop attribute的Date-picker组件-->
<date-picker data-status="activated"></date-picker>

<!-- 渲染 date-picker 组件 -->
<div class="date-picker" data-status="activated">
  <input type="datetime-local" />
</div>
```

<br />[禁用 Attribute 继承](https://v3.cn.vuejs.org/guide/component-attrs.html#%E7%A6%81%E7%94%A8-attribute-%E7%BB%A7%E6%89%BF)<br />

```javascript
app.component('date-picker', {
  inheritAttrs: false,
  template: `
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `
})

<!-- Date-picker 组件 使用非 prop attribute -->
<date-picker data-status="activated"></date-picker>

<!-- 渲染 date-picker 组件 -->
<div class="date-picker">
  <input type="datetime-local" data-status="activated" />
</div>
```

<br />[多个根节点上的 Attribute 继承](https://v3.cn.vuejs.org/guide/component-attrs.html#%E5%A4%9A%E4%B8%AA%E6%A0%B9%E8%8A%82%E7%82%B9%E4%B8%8A%E7%9A%84-attribute-%E7%BB%A7%E6%89%BF)<br />

<a name="a6c1bee9"></a>
### [自定义事件](https://v3.cn.vuejs.org/guide/component-custom-events.html)


```javascript
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>

app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
})
```


- 自定义修饰符



```javascript
<div id="app">
  <my-component v-model.capitalize="myText"></my-component>
  {{ myText }}
</div>


const app = Vue.createApp({
  data() {
    return {
      myText: ''
    }
  }
})

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: `<input
    type="text"
    :value="modelValue"
    @input="emitValue">`
})

app.mount('#app')
```


<a name="f8b8ced4"></a>
### [插槽](https://v3.cn.vuejs.org/guide/component-slots.html)


- [插槽内容](https://v3.cn.vuejs.org/guide/component-slots.html#%E6%8F%92%E6%A7%BD%E5%86%85%E5%AE%B9)
   - 字符串
   - 任何模板代码，包括 HTML
   - 其他组件
- [渲染作用域](https://v3.cn.vuejs.org/guide/component-slots.html#%E6%B8%B2%E6%9F%93%E4%BD%9C%E7%94%A8%E5%9F%9F)
   - 插槽可以访问与模板其余部分相同的实例 property (即相同的“作用域”)
   - 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
- [备用内容](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%A4%87%E7%94%A8%E5%86%85%E5%AE%B9)
   - 在没有提供内容的时候被渲染



```javascript
<button type="submit">
  <slot>Submit</slot>
</button>
```


- 具名插槽



```html
// 定义  <slot> 元素有一个特殊的 attribute：name，可以用来定义额外的插槽
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

// 使用  在一个 <template> 元素上使用 v-slot 指令
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>

// 渲染结果
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```


-  作用域插槽 
-  独占默认插槽的缩写语法 



```javascript
<todo-list v-slot="slotProps">
  <i class="fas fa-check"></i>
  <span class="green">{{ slotProps.item }}</span>
</todo-list>
```


- 解构插槽 Prop



```javascript
<todo-list v-slot="{ item }">
  <i class="fas fa-check"></i>
  <span class="green">{{ item }}</span>
</todo-list>
```


- 动态插槽名



```javascript
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
```


<a name="6af5f6a1"></a>
### [Provide / Inject](https://v3.cn.vuejs.org/guide/component-provide-inject.html)

<br />层次示例<br />

```javascript
Root
└─ TodoList
   ├─ TodoItem
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```


```javascript
const app = Vue.createApp({})

app.component('todo-list', {
  data() {
    return {
      todos: ['Feed a cat', 'Buy tickets']
    }
  },
  provide: {
    user: 'John Doe'
  },
  template: `
    <div>
      {{ todos.length }}
      <!-- 模板的其余部分 -->
    </div>
  `
})

app.component('todo-list-statistics', {
  inject: ['user'],
  created() {
    console.log(`Injected property: ${this.user}`) // > 注入 property: John Doe
  }
})


// 响应式
app.component('todo-list', {
  // ...
  provide() {
    return {
      todoLength: Vue.computed(() => this.todos.length)
    }
  }
})

app.component('todo-list-statistics', {
  inject: ['todoLength'],
  created() {
    console.log(`Injected property: ${this.todoLength.value}`) // > Injected property: 5
  }
})
```

<br />组合式<br />

```javascript
<!-- src/components/MyMap.vue -->
<template>
  <MyMarker />
</template>

<script>
import { provide, reactive, readonly, ref } from 'vue'
import MyMarker from './MyMarker.vue'

export default {
  components: {
    MyMarker
  },
  setup() {
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })

    const updateLocation = () => {
      location.value = 'South Pole'
    }

    provide('location', readonly(location))
    provide('geolocation', readonly(geolocation))
    provide('updateLocation', updateLocation)
  }
}
</script>


<!-- src/components/MyMarker.vue -->
<script>
import { inject } from 'vue'

export default {
  setup() {
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    const updateUserLocation = inject('updateLocation')

    return {
      userLocation,
      userGeolocation,
      updateUserLocation
    }
  }
}
</script>
```


<a name="f909368a"></a>
### [动态组件 & 异步组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)

<br />动态<br />

```javascript
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

<br />异步<br />

```javascript
const { createApp, defineAsyncComponent } = Vue

const app = createApp({})

const AsyncComp = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      resolve({
        template: '<div>I am async!</div>'
      })
    })
)

app.component('async-example', AsyncComp)
```


<a name="f5a845b3"></a>
### [模板引用](https://v3.cn.vuejs.org/guide/component-template-refs.html)


```javascript
// 组件挂载后聚焦
const app = Vue.createApp({})

app.component('base-input', {
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
      this.$refs.input.focus()
    }
  },
  mounted() {
    this.focusInput()
  }
})
```

<br />响应式[模板引用](https://v3.cn.vuejs.org/guide/composition-api-template-refs.html)<br />

```javascript
<template> 
  <div ref="root">This is a root element</div>
</template>

<script>
  import { ref, onMounted } from 'vue'

  export default {
    setup() {
      const root = ref(null)

      onMounted(() => {
        // DOM 元素将在初始渲染后分配给 ref
        console.log(root.value) // <div>This is a root element</div>
      })

      return {
        root
      }
    }
  }
</script>
```

<br />[v-for 中的用法](https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#v-for-%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95)<br />

```javascript
<template>
  <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }">
    {{ item }}
  </div>
</template>

<script>
  import { ref, reactive, onBeforeUpdate } from 'vue'

  export default {
    setup() {
      const list = reactive([1, 2, 3])
      const divs = ref([])

      // 确保在每次更新之前重置ref
      onBeforeUpdate(() => {
        divs.value = []
      })

      return {
        list,
        divs
      }
    }
  }
</script>
```

<br />[侦听模板引用](https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#%E4%BE%A6%E5%90%AC%E6%A8%A1%E6%9D%BF%E5%BC%95%E7%94%A8)<br />
<br />[处理边界情况](https://v3.cn.vuejs.org/guide/component-edge-cases.html)<br />
<br />**过渡 & 动画**<br />

-  过渡 & 动画概述 
-  进入过渡 & 离开过渡 
-  列表过渡 
-  状态过渡 



<a name="6ce28aa7"></a>
## [过渡](https://cn.vuejs.org/v2/guide/transitions.html)

<br />[过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D)<br />

1.  v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。 
1.  v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 
1.  v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。 
1.  v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。 
1.  v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 
1.  v-leave-to：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/动画完成之后移除。 


<br />![](https://v3.vuejs.org/images/transitions.svg#crop=0&crop=0&crop=1&crop=1&id=WZBuK&originHeight=150&originWidth=295&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />
<br />![](https://v3.vuejs.org/images/transitions.svg#crop=0&crop=0&crop=1&crop=1&id=mrrbS&originHeight=150&originWidth=295&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />

```javascript
<div id="example-1">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
</div>


new Vue({
  el: '#example-1',
  data: {
    show: true
  }
})



/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
```

<br />[JavaScript 钩子](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90)<br />

```javascript
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>



// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```


<a name="fa66863b"></a>
## [混入](https://vue3js.cn/docs/zh/guide/mixins.htm)(mixin)

<br />当组件和混入对象含有同名选项时，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。<br />
<br />同名钩子函数将合并为一个数组，混入对象的钩子将在组件自身钩子**之前**调用。<br />

```javascript
const myMixin = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

const app = Vue.createApp({
  mixins: [myMixin],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created() {
    console.log(this.$data) // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

<br />[全局混入](https://cn.vuejs.org/v2/guide/mixins.html#%E5%85%A8%E5%B1%80%E6%B7%B7%E5%85%A5)<br />

```javascript
const app = Vue.createApp({
  myOption: 'hello!'
})

// 为自定义的选项 'myOption' 注入一个处理器。
app.mixin({
  created() {
    const myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

// 将myOption也添加到子组件
app.component('test-component', {
  myOption: 'hello from component!'
})

app.mount('#mixins-global')

// => "hello!"
// => "hello from component!"
```


<a name="613cf536"></a>
## 组件通信

<br />父子组件通信<br />
<br />props/v-model/ref 父到子	$emit 子到父<br />

- props/emit



```javascript
//Parent.vue
<template>
  <div>
    当前选中：{{ current }}
    <Child :list="list" @change="changeCurrent"></Child>
  </div>
</template>
<script>
import Child from "./child";
export default {
  data() {
    return {
      current: 0,
      list: ["红楼梦", "水浒传", "三国演义", "西游记"]
    };
  },
  components: { Child },
  methods: {
    changeCurrent(num) {
      this.current = num;
    }
  }
};
</script>


//Child.vue
<template>
  <div>
    <template v-for="(item, index) in list">
      <div @click="clickItem(index)" :key="index">{{ item }}</div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    clickItem(index) {
      this.$emit("change", index);    // 通过$emit()触发父组件中的自定义事件
    }
  }
};
</script>
```


- v-model/emit



```javascript
// Parent.vue
<template>
  <Child
    v-model:user-name="userInfo.name"
  />
</template>

// Child.vue
export default defineComponent({
  // ...
  setup (props, { emit }) {

    setTimeout(() => {
      emit('update:userName', 'Tom')
    }, 1000);

  },
  props: {
    userName: String,
  },
  emits: ['update:userName']
})
```

<br />多层级父子组件通信<br />
<br />provide、inject 父到子 或者 子到父<br />
<br />非关系组件通信(EventBus, **事件总线**)<br />
<br />[mitt](https://github.com/developit/mitt)<br />

```javascript
// main.js
import mitt from 'mitt'

let app = createApp(App)
app.config.globalProperties.$myhub = new mitt()


// ParentComponent.vue
 export default {    
   // .....
    methods: {
      getattrs() {
        this.$myhub.emit('myhub', 'abc')  // emit 调用方法发起数据传递
      }
  }
  
  
// ChildComponent.vue
export default {
        // .....
    mounted() {
      this.$myhub.on('myhub', (data) => {  // on 注册一个监听事件，用于接收数据
        console.log(data) // abc
      })
    },
  }
```

<br />Vuex<br />

```javascript
//store/count.js
export default {
  namespaced: true,
  state: { num: 1 },
  mutations: {
    ADD_NUM(state) {
      state.num = state.num + 1;
    },
    SUB_NUM(state) {
      state.num = state.num - 1;
    }
  },
  actions: {
    ADD_SYNC({ commit }) {
      setTimeout(() => {
        commit("ADD_NUM");
      }, 1000);
    },
    SUB_SYNC({ commit }) {
      setTimeout(() => {
        commit("SUB_NUM");
      }, 1000);
    }
  }
};
//store/index.js
import count from "./count";
export default new Vuex.Store({
  modules: {
    count
  },
});

//child.vue
<template>
  <div>
    <div>当前：{{ num }}</div>
    <div class="opt" @click="clickAdd">+</div>
    <div class="opt" @click="clickSub">-</div>
    <div class="opt" @click="clickAddSync">a+</div>
    <div class="opt" @click="clickSubSync">a-</div>
  </div>
</template>
<script>
export default {
  name: "Child",
  computed: {
    num() {
      return this.$store.state.count.num;
    }
  },
  methods: {
    clickAdd() {
      this.$store.commit("count/ADD_NUM");
    },
    clickSub() {
      this.$store.commit("count/SUB_NUM");
    },
    clickAddSync() {
      this.$store.dispatch("count/ADD_SYNC");
    },
    clickSubSync() {
      this.$store.dispatch("count/SUB_SYNC");
    }
  }
};
</script>
```


<a name="f8e253bf"></a>
# [Vue CLI](https://cli.vuejs.org/zh/)

<br />CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令<br />
<br />CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。<br />

```javascript
npm install -g @vue/cli
npm update -g @vue/cli

# 最新稳定版
npm install vue@next
```

<br />preset：一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。 (~/.vuerc)<br />
<br />**vue  [options]**<br />

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


<br />[模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)<br />
<br />在项目根目录中放置下列文件来指定环境变量：<br />

```javascript
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略


一个环境文件只包含环境变量的“键=值”对：
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

<br />只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。<br />
<br />使用	process.env.VUE_APP_SECRET<br />

<a name="57eeae77"></a>
# [Vue Router](https://next.router.vuejs.org/zh/)

<br />HTML<br />

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

<br />JavaScript<br />

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

<br />[动态路由匹配](https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html)<br />
<br />动态路径参数(dynamic segment)<br />
<br />[path-to-regexp](https://github.com/pillarjs/path-to-regexp)<br />

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

<br />[嵌套路由](https://next.router.vuejs.org/zh/guide/essentials/nested-routes.html)<br />

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

<br />[编程式导航](https://next.router.vuejs.org/zh/guide/essentials/navigation.html)

| 声明式 | 编程式 |
| --- | --- |
| <router-link :to="..."> | router.push(...) |
| <router-link :to="..." replace> | router.replace(...) |



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

<br />[命名路由](https://next.router.vuejs.org/zh/guide/essentials/named-routes.html)<br />

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

<br />[命名视图](https://next.router.vuejs.org/zh/guide/essentials/named-views.html)<br />

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

<br />[重定向和别名](https://next.router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)<br />

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

<br />[路由组件传参](https://next.router.vuejs.org/zh/guide/essentials/passing-props.html)<br />

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

<br />[不同的历史记录模式](https://next.router.vuejs.org/zh/guide/essentials/history-mode.html)<br />
<br />[导航守卫](https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html)<br />
<br />导航解析流程<br />

1.  导航被触发。 
1.  在失活的组件里调用 beforeRouteLeave 守卫。 
1.  调用全局的 beforeEach 守卫。 
1.  在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。 
1.  在路由配置里调用 beforeEnter。 
1.  解析异步路由组件。 
1.  在被激活的组件里调用 beforeRouteEnter。 
1.  调用全局的 beforeResolve 守卫(2.5+)。 
1.  导航被确认。 
1.  调用全局的 afterEach 钩子。 
1.  触发 DOM 更新。 
1.  调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。 


<br />[路由元信息](https://next.router.vuejs.org/zh/guide/advanced/meta.html)<br />
<br />[数据获取](https://next.router.vuejs.org/zh/guide/advanced/data-fetching.html)<br />
<br />[组合式 API](https://next.router.vuejs.org/zh/guide/advanced/composition-api.html)<br />

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

<br />[过渡动效](https://next.router.vuejs.org/zh/guide/advanced/transitions.html)<br />
<br />[滚动行为](https://next.router.vuejs.org/zh/guide/advanced/scroll-behavior.html)<br />

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

<br />[路由懒加载](https://next.router.vuejs.org/zh/guide/advanced/lazy-loading.html)<br />

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
[扩展 RouterLink](https://next.router.vuejs.org/zh/guide/advanced/extending-router-link.html)<br />[导航故障](https://next.router.vuejs.org/zh/guide/advanced/navigation-failures.html)<br />[动态路由](https://next.router.vuejs.org/zh/guide/advanced/dynamic-routing.html)<br />
<br />
<br />**API**

- [<router-link> Props](https://next.router.vuejs.org/zh/api/#router-link-props)
   - [to](https://next.router.vuejs.org/zh/api/#to)	目标路由的链接
   - [replace](https://next.router.vuejs.org/zh/api/#replace)
   - [active-class](https://next.router.vuejs.org/zh/api/#active-class)	链接激活时，应用于渲染的 <a> 的 class
   - [aria-current-value](https://next.router.vuejs.org/zh/api/#aria-current-value)	当链接激活时，传递给属性 aria-current 的值
   - [custom](https://next.router.vuejs.org/zh/api/#custom)	<router-link> 是否应该将其内容包裹在 <a> 元素中
```javascript
<router-link to="/home" custom v-slot="{ navigate, href, route }">
  <a :href="href" @click="navigate">{{ route.fullPath }}</a>
</router-link>

渲染成 <a href="/home">/home</a>。
```

- [exact-active-class](https://next.router.vuejs.org/zh/api/#exact-active-class)	链接精准激活时，应用于渲染的 <a> 的 class
   - [v-slot](https://next.router.vuejs.org/zh/api/#router-link-%E7%9A%84-v-slot)
- [<router-view> Props](https://next.router.vuejs.org/zh/api/#router-view-props)
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
   - [push](https://next.router.vuejs.org/zh/api/#push)(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>
   - [removeRoute](https://next.router.vuejs.org/zh/api/#removeroute)(name: string | symbol): void
   - [replace](https://next.router.vuejs.org/zh/api/#replace-1)(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>
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



<a name="34164fff"></a>
# [Vuex](https://next.vuex.vuejs.org/zh/)

<br />为 Vue.js 应用程序开发的状态管理模式。<br />
<br />采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。<br />

```javascript
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>

npm install vuex --save
npm install vuex@next --save
```


-  状态存储是响应式的 
-  改变 store 中的状态的唯一途径就是显式地提交 (commit) mutations 


<br />![](https://next.vuex.vuejs.org/vuex.png#crop=0&crop=0&crop=1&crop=1&id=C3Lh5&originHeight=551&originWidth=701&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />

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

<br />**核心概念**<br />

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

<br />命名空间<br />

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

<br />简化使用<br />

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

<br />require.context(directory, useSubdirectories, regExp, mode = 'sync')<br />
<br />**API**

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

<br />表单处理——双向绑定的计算属性<br />

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


<a name="cae0fa92"></a>
# [Vue Loader](https://vue-loader.vuejs.org/zh/)

<br />一个 [webpack](https://webpack.js.org/) 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件<br />

<a name="ac2cd4e9"></a>
## Scoped CSS

<br />当 <style> 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。父组件的样式将不会渗透到子组件中
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

<br />转换结果：<br />

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

<br />深度选择器<br />

```javascript
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>


<style scoped>
:deep(<inner-selector>)
</style>
```

<br />编译成：<br />

```javascript
.a[data-v-f3f3eg9] .b { /* ... */ }
```

<br />**插槽选择器**<br />

```javascript
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```

<br />**全局选择器**<br />

```javascript
<style scoped>
:global(.red) {
  color: red;
}
</style>
```


<a name="8b129b4b"></a>
## [CSS Modules](https://vue-loader.vuejs.org/zh/guide/css-modules.html)


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

<br />Vue SFC Style CSS 变量<br />

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



<a name="1cf2ca4f"></a>
# [项目配置](https://cli.vuejs.org/zh/config/)

<br />[browserslist](https://github.com/browserslist/browserslist)<br />
<br />vue.config.js<br />
<br />一个可选的配置文件，在项目的根目录中<br />

```javascript
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
}
```

<br />**设置目录别名 alias**<br />

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

<br />**代理配置**<br />

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

<br />**环境配置**<br />

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

<br />**多页面**<br />

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


<a name="3f3a4e00"></a>
# —— 组件


<a name="3a7d011f"></a>
# [Vue I18n](https://vue-i18n.intlify.dev/)


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

<br />API

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



<a name="50d03e1e"></a>
# [Vue Test Utils](https://next.vue-test-utils.vuejs.org/)


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

<br />API

- [mount](https://next.vue-test-utils.vuejs.org/api/#mount)
   - [attachTo](https://next.vue-test-utils.vuejs.org/api/#attachto)
   - [attrs](https://next.vue-test-utils.vuejs.org/api/#attrs)
   - [data](https://next.vue-test-utils.vuejs.org/api/#data)
   - [props](https://next.vue-test-utils.vuejs.org/api/#props)
   - [slots](https://next.vue-test-utils.vuejs.org/api/#slots)
   - [global](https://next.vue-test-utils.vuejs.org/api/#global)
   - [shallow](https://next.vue-test-utils.vuejs.org/api/#shallow)
- [Wrapper methods](https://next.vue-test-utils.vuejs.org/api/#wrapper-methods)
   - [attributes](https://next.vue-test-utils.vuejs.org/api/#attributes)
   - [classes](https://next.vue-test-utils.vuejs.org/api/#classes)
   - [emitted](https://next.vue-test-utils.vuejs.org/api/#emitted)
   - [exists](https://next.vue-test-utils.vuejs.org/api/#exists)
   - [find](https://next.vue-test-utils.vuejs.org/api/#find)
   - [findAll](https://next.vue-test-utils.vuejs.org/api/#findall)
   - [findComponent](https://next.vue-test-utils.vuejs.org/api/#findcomponent)
   - [findAllComponents](https://next.vue-test-utils.vuejs.org/api/#findallcomponents)
   - [get](https://next.vue-test-utils.vuejs.org/api/#get)
   - [getComponent](https://next.vue-test-utils.vuejs.org/api/#getcomponent)
   - [html](https://next.vue-test-utils.vuejs.org/api/#html)
   - [isVisible](https://next.vue-test-utils.vuejs.org/api/#isvisible)
   - [props](https://next.vue-test-utils.vuejs.org/api/#props-1)
   - [setData](https://next.vue-test-utils.vuejs.org/api/#setdata)
   - [setProps](https://next.vue-test-utils.vuejs.org/api/#setprops)
   - [setValue](https://next.vue-test-utils.vuejs.org/api/#setvalue)
   - [text](https://next.vue-test-utils.vuejs.org/api/#text)
   - [trigger](https://next.vue-test-utils.vuejs.org/api/#trigger)
   - [unmount](https://next.vue-test-utils.vuejs.org/api/#unmount)
- [Wrapper properties](https://next.vue-test-utils.vuejs.org/api/#wrapper-properties)
   - [vm](https://next.vue-test-utils.vuejs.org/api/#vm)
- [shallowMount](https://next.vue-test-utils.vuejs.org/api/#shallowmount)
- [flushPromises](https://next.vue-test-utils.vuejs.org/api/#flushpromises)
- [config](https://next.vue-test-utils.vuejs.org/api/#config)
   - [config.global](https://next.vue-test-utils.vuejs.org/api/#config-global)



<a name="aa7b71a3"></a>
# [SSR](https://v3.cn.vuejs.org/guide/ssr/introduction.html)

<br />![](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png#crop=0&crop=0&crop=1&crop=1&id=yZjUA&originHeight=892&originWidth=1946&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />

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


<a name="c8c2f9b6"></a>
# [nuxt.js](https://github.com/nuxt/nuxt.js)


<a name="760c2490"></a>
# [awesome-vue](https://github.com/vuejs/awesome-vue)


<a name="49a19866"></a>
# [vuepress](https://github.com/vuejs/vuepress)
