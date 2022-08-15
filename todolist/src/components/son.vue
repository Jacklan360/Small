<template>
    <div>螳臂挡驹 {{message}}</div>
</template>

<script>
import {defineComponent,ref,reactive,toRefs} from 'vue'
export default  defineComponent({
  name: 'son',
  inject: ['message']
})
</script>

<style scoped>

</style>
