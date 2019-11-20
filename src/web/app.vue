<!--  -->
<template>
    <div>
        <router-link to="/index">Home</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},

    data() {
        return {};
    },

    methods: {}
};
</script>
<style lang='scss' scoped>
*{
    width: 400px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    background-color: #999;
    color: blue;
}
</style>