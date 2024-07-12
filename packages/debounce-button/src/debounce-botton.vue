<script>
import debounce from 'lodash/debounce';

export default {
  name: 'DebounceButton',
  props: {
    delay: {
        type: Number,
        default: 300,
    },
  },
  methods: {
    handlerClick(e) {
      this.$emit('click', e);
    },
  },
  render() {
    return (
      <el-button
        {...{
          props: this.$props,
          attrs: this.$attrs,
          on: {
            ...this.$listeners,
            click: debounce(this.handlerClick, this.$props.delay),
          },
        }}
      >
        {this.$slots.default}
      </el-button>
    );
  },
};
</script>
