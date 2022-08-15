<template>
  <div class="about">
    <h1>This is an about page{{message}}--</h1>
  </div>
</template>
<script>
  import {defineComponent,ref,reactive,toRefs} from 'vue'
  export default defineComponent({
    name: 'aboutview',
    inject: ['message'],
    setup() {
      let list = ref([
        {
          title: '吃饭',
          complete: false
        },
        {
          title: '睡觉',
          complete: false
        },
        {
          title: '喝水',
          complete: false
        },
      ])
      let keyupChange = () => {
        console.log('查看')
      }
      return {
        list,
        keyupChange
      }
    }
  })
</script>
