###### 基于 Element-ui 扩展

##### 安装

    npm install hl-element-ui-extend -D

##### 代码中引入

> 由于依赖于 element-ui, 在 main.js 中，必须先引入 element-ui

    {
      import Vue from 'vue';
      import ElementUI from 'element-ui';
      import 'element-ui/lib/theme-chalk/index.css';
      Vue.use(ElementUI)
    }

###### 1.完整引入

> 在 main.js 中

    {
      import Vue from 'vue';
      import ElementUI from 'element-ui';
      import 'element-ui/lib/theme-chalk/index.css';
      Vue.use(ElementUI)

      import ElementUiExtend from 'hl-element-ui-extend';
      Vue.use(ElementUiExtend)
    }

###### 2.部分引入业务组件

    {
      import debunceButton from 'hl-element-ui-extend/lib/debunce-botton';
      export default {
        components: {
          debunceButton
        }
      }
    }
