import{d as m,a5 as c,b as s,o as f,c as y,C as r,t as i,G as g,u,_ as C,D as w,E as p,I as _,a as A,J as P,Q as l,a6 as b,q as x,k as D,a7 as T,a8 as E,a9 as L,aa as R,ab as V,ac as O,ad as S,ae as k,af as B,ag as N,ah as j,ai as I,aj as $,M as F}from"./chunks/framework.46d50e86.js";import{t as h}from"./chunks/theme.2d04b583.js";const M={key:0},G={class:"title"},U={class:"date"},q=m({__name:"Title",setup(e){const t=c(()=>u().page.value),a=c(()=>u().frontmatter.value),n=c(()=>new Date(a.value.updated_at).toLocaleString());return(d,Y)=>s(a).word_count?(f(),y("div",M,[r("h1",G,i(s(t).title),1),r("div",U,[r("div",null,"🕒 lastUpdated: "+i(s(n)),1),r("div",null,"✍ word count "+i(s(a).word_count),1)])])):g("",!0)}});const H=C(q,[["__scopeId","data-v-e28ea91c"]]),J={__name:"MyLayout",setup(e){const{Layout:t}=h;return(a,n)=>{const d=P("ClientOnly");return f(),w(s(t),null,{"doc-before":p(()=>[_(d,null,{default:p(()=>[_(H)]),_:1})]),"aside-bottom":p(()=>[A(" ᕙ(`▽´)ᕗ ")]),_:1})}}};const Q={...h,Layout:J};function v(e){if(e.extends){const t=v(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=v(Q),z=m({name:"VitePressApp",setup(){const{site:e}=u();return x(()=>{D(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),T(),E(),L(),o.setup&&o.setup(),()=>R(o.Layout)}});async function K(){const e=X(),t=W();t.provide(V,e);const a=O(e.route);return t.provide(S,a),t.component("Content",k),t.component("ClientOnly",B),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:N}),{app:t,router:e,data:a}}function W(){return j(z)}function X(){let e=l,t;return I(a=>{let n=$(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),l&&(e=!1),F(()=>import(n),[])},o.NotFound)}l&&K().then(({app:e,router:t,data:a})=>{t.go().then(()=>{b(t.route,a.site),e.mount("#app")})});export{K as createApp};
