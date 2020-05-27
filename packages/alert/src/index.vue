<template>
  <transition>
    <div class="alert">alert, 111</div>
  </transition>
</template>

<script>
export default {
  name: 'hl-alert',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      visible: true
    }
  },

  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>
