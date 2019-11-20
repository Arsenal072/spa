<!--  -->
<template>
    <div>
        <router-link to="/index">Home页 app</router-link>
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
    height: 50px;
    width: 400px;
    margin: 0 auto;
    line-height: 50px;
    text-align: center;
    background-color: #999;
}
</style>