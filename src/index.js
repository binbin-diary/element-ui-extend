// const components = [];
const componentFiles = require.context(
  '../packages',
  true,
  /\.\/[\w-]+\/index\.js$/
);
console.log('componentFiles', componentFiles);

// componentFiles.keys().reduce((component, componentPath) => {
//   const value = componentFiles(componentPath);
//   components.push(value.default);
// }, {});

import DebounceButton from '../packages/debounce-button/index.js';
const components = [
  DebounceButton
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
