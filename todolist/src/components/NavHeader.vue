<template>
  <div>
    <input type="text"  @keydown.enter="keyupChange">
    <son></son>
  </div>
</template>

<script>
import {defineComponent,ref,reactive,toRefs} from 'vue'
import son from '@/components/son'
  export default defineComponent({
      name: 'NavHeader',
      components: {
        son
      },
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
