
# —— [Vue.js](https://vuejs.org) ——
一套构建用户界面的渐进式框架。  <br />  Vue 只关注视图层， 采用自底向上增量开发的设计。
```html
<html>
<head>
    <title>VueJs HelloWorld</title>
    <script src="https://unpkg.com/vue@3"></script>
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


# 生命周期
![](https://v3.vuejs.org/images/lifecycle.svg#crop=0&crop=0&crop=1&crop=1&id=Q7xGM&originHeight=1388&originWidth=838&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  [生命周期钩子](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html)

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



# Global API

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


## [Application](https://vuejs.org/api/application.html) API

- [createApp](https://v3.cn.vuejs.org/api/global-api.html#createapp)
- [createSSRApp()](https://vuejs.org/api/application.html#createssrapp)
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

- [app.mount()](https://vuejs.org/api/application.html#app-mount)
- [app.unmount()](https://vuejs.org/api/application.html#app-unmount)
- [app.provide()](https://vuejs.org/api/application.html#app-provide)
- [app.component()](https://vuejs.org/api/application.html#app-component)
- [app.directive()](https://vuejs.org/api/application.html#app-directive)		注册或检索全局指令
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

- [app.use()](https://vuejs.org/api/application.html#app-use)	安装 Vue.js 插件
- [app.mixin()](https://vuejs.org/api/application.html#app-mixin)
- [app.version](https://vuejs.org/api/application.html#app-version)
- [app.config](https://vuejs.org/api/application.html#app-config)
- [app.config.errorHandler](https://vuejs.org/api/application.html#app-config-errorhandler)
- [app.config.warnHandler](https://vuejs.org/api/application.html#app-config-warnhandler)
- [app.config.performance](https://vuejs.org/api/application.html#app-config-performance)
- [app.config.compilerOptions](https://vuejs.org/api/application.html#app-config-compileroptions)
- [app.config.globalProperties](https://vuejs.org/api/application.html#app-config-globalproperties)
- [app.config.optionMergeStrategies](https://vuejs.org/api/application.html#app-config-optionmergestrategies)

[  <br />  ](https://v3.cn.vuejs.org/api/global-api.html#version)

## [General](https://vuejs.org/api/general.html) API

- [version](https://vuejs.org/api/general.html#version)
- [nextTick()](https://vuejs.org/api/general.html#nexttick)
- [defineComponent()](https://vuejs.org/api/general.html#definecomponent)
- [defineAsyncComponent()](https://vuejs.org/api/general.html#defineasynccomponent)
- [defineCustomElement()](https://vuejs.org/api/general.html#definecustomelement)




# 选项式 API

## [Options: State](https://vuejs.org/api/options-state.html)

- [data](https://staging-cn.vuejs.org/api/options-state.html#data)

vm.a === vm.$data.a  <br />  以`_`或 `$` 开头的 property 不会被 Vue 实例代理
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

- [props](https://staging-cn.vuejs.org/api/options-state.html#props)	用于从父组件接收数据的数组或对象
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

- computed	`{ [key: string]: Function | { get: Function, set: Function } }`

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
```javascript
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

- watch	侦听器	`{ [key: string]: string | Function | Object | Array}`
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

- emits	`{ [key: string]: string | Function | Object | Array}`
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

- [expose](https://staging-cn.vuejs.org/api/options-state.html#expose)
```javascript
export default {
  // only `publicMethod` will be available on the public instance
  expose: ['publicMethod'],
  methods: {
    publicMethod() {
      // ...
    },
    privateMethod() {
      // ...
    }
  }
}
```

- [compilerOptions](https://v3.cn.vuejs.org/api/options-misc.html#compileroptions)


## [Options: Rendering](https://vuejs.org/api/options-rendering.html)

- template	字符串模板，用作 component 实例的标记。模板将会替换所挂载元素的 innerHTML
- render	一个编程式创建虚拟 DOM 树的函数，字符串模板的一种替代，优先级更高
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


## [Options: Composition](https://vuejs.org/api/options-composition.html)

- provide / inject	允许一个祖先组件向其所有子孙后代注入一个依赖
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


## [Options: Misc](https://vuejs.org/api/options-misc.html)

- [name](https://v3.cn.vuejs.org/api/options-misc.html#name)	允许组件模板递归地调用自身
- [inheritAttrs](https://v3.cn.vuejs.org/api/options-misc.html#inheritattrs)
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
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
  components: {
    // shorthand
    Foo,
    // register under a different name
    RenamedBar: Bar
  }
}
```


## [Component Instance](https://vuejs.org/api/component-instance.html)

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

**method**

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



# Built-ins

## 指令([Directives](https://vuejs.org/api/built-in-directives.html))
动态参数：用 [方括号] 括起来的 JavaScript 表达式作为一个指令的参数  <br />  修饰符 (modifier) ：以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定

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
   - .camel	将 kebab-case attribute 名转换为 camelCase。
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

限制于：

   - `<input>`
   - `<select>`
   - `<textarea>`
   - `components`

修饰符：

   - [.lazy](https://v3.cn.vuejs.org/guide/forms.html#lazy) - 监听 change 而不是 input 事件
   - [.number](https://v3.cn.vuejs.org/guide/forms.html#number) - 输入字符串转为有效的数字
   - [.trim](https://v3.cn.vuejs.org/guide/forms.html#trim) - 输入首尾空格过滤
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


## [Special Attributes](https://vuejs.org/api/built-in-special-attributes.html)

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

动态组件
```javascript
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

-  slot 
-  teleport 

[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)
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

[  <br />  ](https://v3.cn.vuejs.org/api/composition-api.html)

# [组合式 API](https://v3.cn.vuejs.org/api/composition-api.html)

- [setup()](https://vuejs.org/api/composition-api-setup.html)
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

-  Provide / Inject 
```javascript
import { InjectionKey, provide, inject } from 'vue'

const key: InjectionKey<string> = Symbol()

provide(key, 'foo') // 若提供非字符串值将出错

const foo = inject(key) // foo 的类型: string | undefined
```



组合式示例
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


[响应性基础 API](https://v3.cn.vuejs.org/api/basic-reactivity.html)

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


## [Reactivity: Core](https://vuejs.org/api/reactivity-core.html)

[Refs](https://v3.cn.vuejs.org/api/refs-api.html)

- [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref)
```typescript
interface Ref<T> {
  value: T
}

function ref<T>(value: T): Ref<T>
```

- unref	  `isRef(val) ? val.value : val`
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

[  <br />  ](https://v3.cn.vuejs.org/api/computed-watch-api.html)

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




# Advanced APIs
[Render Function](https://vuejs.org/api/render-function.html)  <br />  [Server-Side Rendering](https://vuejs.org/api/ssr.html)  <br />  [TypeScript Utility Types](https://vuejs.org/api/utility-types.html)  <br />  [Custom Renderer](https://vuejs.org/api/custom-renderer.html)





# 组件（Component）

扩展 HTML 元素，封装可重用的代码
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

组件名

-  kebab-case (短横线分隔命名) 	引用时使用 kebab-case `<my-component-name> `
-  PascalCase (首字母大写命名) 	引用时两种命名法都可以。`<MyComponentName>`


## [Props](https://v3.cn.vuejs.org/guide/component-props.html)
在组件上注册的一些自定义 attribute  <br />  单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。

验证
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

[非 Prop 的 Attribute](https://v3.cn.vuejs.org/guide/component-attrs.html)  <br />  一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 [props](https://v3.cn.vuejs.org/guide/component-props) 或 emits 定义的 attribute。常见的示例包括 class、style 和 id 属性。

[Attribute 继承](https://v3.cn.vuejs.org/guide/component-attrs.html#attribute-%E7%BB%A7%E6%89%BF)
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

[禁用 Attribute 继承](https://v3.cn.vuejs.org/guide/component-attrs.html#%E7%A6%81%E7%94%A8-attribute-%E7%BB%A7%E6%89%BF)
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

[多个根节点上的 Attribute 继承](https://v3.cn.vuejs.org/guide/component-attrs.html#%E5%A4%9A%E4%B8%AA%E6%A0%B9%E8%8A%82%E7%82%B9%E4%B8%8A%E7%9A%84-attribute-%E7%BB%A7%E6%89%BF)


## [自定义事件](https://v3.cn.vuejs.org/guide/component-custom-events.html)
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


## [插槽](https://v3.cn.vuejs.org/guide/component-slots.html)

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


## [Provide / Inject](https://v3.cn.vuejs.org/guide/component-provide-inject.html)
层次示例
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

组合式
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



## 组件通信

父子组件通信  <br />  props/v-model/ref 父到子	$emit 子到父

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

多层级父子组件通信  <br />  provide、inject 父到子 或者 子到父

非关系组件通信(EventBus, **事件总线**)  <br />  [mitt](https://github.com/developit/mitt)
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

Vuex
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


## [模板引用](https://v3.cn.vuejs.org/guide/component-template-refs.html)

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

响应式[模板引用](https://v3.cn.vuejs.org/guide/composition-api-template-refs.html)

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

[v-for 中的用法](https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#v-for-%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95)
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

[  <br />  ](https://v3.cn.vuejs.org/guide/component-edge-cases.html)


## [动态组件 & 异步组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)

动态
```javascript
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

异步
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





# [过渡](https://cn.vuejs.org/v2/guide/transitions.html)

[过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D)

1.  v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。 
1.  v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 
1.  v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。 
1.  v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。 
1.  v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 
1.  v-leave-to：离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/动画完成之后移除。 

![](https://v3.vuejs.org/images/transitions.svg#crop=0&crop=0&crop=1&crop=1&id=WZBuK&originHeight=150&originWidth=295&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](https://v3.vuejs.org/images/transitions.svg#crop=0&crop=0&crop=1&crop=1&id=mrrbS&originHeight=150&originWidth=295&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

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

[JavaScript 钩子](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90)

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




# [混入](https://vue3js.cn/docs/zh/guide/mixins.htm)(mixin)
当组件和混入对象含有同名选项时，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。  <br />  同名钩子函数将合并为一个数组，混入对象的钩子将在组件自身钩子**之前**调用。
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

[全局混入](https://cn.vuejs.org/v2/guide/mixins.html#%E5%85%A8%E5%B1%80%E6%B7%B7%E5%85%A5)
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
[  <br />  ](https://github.com/vuejs/vuepress)





