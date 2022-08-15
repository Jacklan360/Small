<template>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  <div @click="changenum(222)">{{num}}</div>
  {{message}}
  <!--<div>{{name}}</div>-->
  <!--<div>{{arr}}</div>-->
</template>

<script>
// @ is an alias to /src
import {defineComponent,ref,reactive,toRefs} from 'vue'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import NavMain from '@/components/NavMain'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavHeader,
    NavFooter,
    NavMain
  },
  provide(){
    return {
      message: '放肆'
    }
  },
  setup(props, ctx){
    let num = ref(10)
    let name = ref('jack')
    let arr = ref(['a','b','c'])
    let data = reactive({
      name: 'tony',
      age: 20,
      obj: {
        prive: 15
      },
      arr: ['csd','one']
    })
    let changenum = (v) => {
      console.log(v, '查看')
    }
    let store = useStore()
    console.log(store,'-=-=')
    return {
      num,
      name,
      arr,
      ...toRefs(data),
      changenum
    }
  }
})
</script>
