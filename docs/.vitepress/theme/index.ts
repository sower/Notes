import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: MyLayout,

    // this is a Vue 3 functional component
    // NotFound: () => 'custom 404',
}
