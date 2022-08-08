<template>
  <div>
    <input type="text"  @keydown.enter="keyupChange">
  </div>
</template>

<script>
import {defineComponent,ref,reactive,toRefs} from 'vue'
  export default defineComponent({
      name: 'NavHeader',
      setup() {
        let keyupChange = () => {
          console.log('查看')
        }
        return {
          keyupChange
        }
      }
  })
</script>

<style scoped>

</style>
