<template>
    <div>
        这是{{page}}页面
        <button @click="reverse">按钮</button>
        <div>{{message}}</div>
        <counter></counter>
    </div>
</template>
<script>
    // import Vue from "vue"
    // Vue.component('counter',{
    //     data() {
    //         return {
    //             count: 0
    //         }
    //     },
    //     template: '<span>{{count}}</span>'
    // })
export default {
    data: function () {
        return {
            page: '首页',
            message: 'hello vue!'
        }
    },
    methods:{
        reverse(){
            this.message = this.message.split('').reverse().join('-')
        }
    }
}
</script>
<style lang='scss' scoped>
div{
    color: #fff;
    background-color: #3978ff;
}
</style>