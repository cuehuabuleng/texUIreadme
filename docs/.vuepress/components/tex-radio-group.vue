<template>
    <div class="tex-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TexRadiogroup',
    props:{
        // tex-radio-group接收到了value的值
        // 将来还要触发当前组件的input事件
        // provide 与 inject  
        value:null
    },
    provide(){
        return{
            RadioGroup:this
        }
    }
}
</script>
<style lang="less" scoped>

</style>