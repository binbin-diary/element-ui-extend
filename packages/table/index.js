import DebounceButton from './src/debounce-botton.vue';

DebounceButton.install = (Vue) => {
    Vue.component(DebounceButton.name, DebounceButton);
};

export default DebounceButton;
