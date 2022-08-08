<template>
  <div>
    <div>
      已完成{{isComplete}}/全部{{all}}
    </div>
    <div v-if="isComplete > 0">清除已完成</div>
  </div>
</template>

<script>
import {defineComponent,ref,reactive,toRefs} from 'vue'
export default defineComponent ({
    name: 'NavFooter',
    setup() {
      let isComplete = ref(1)
      let all = ref(3)
      return {
        isComplete,
        all
      }
    }
})
</script>

<style scoped>

</style>
