<template>
  <div v-for="(item,index) in list" :key="index">
    <div>
      <input type="checkbox" v-model="item.complete">
      {{item.title}}
      <button>删除</button>
    </div>
  </div>
</template>

<script>
import {defineComponent,ref,reactive,toRefs} from 'vue'
export default defineComponent({
    name: 'NavMain',
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

<style scoped>

</style>
