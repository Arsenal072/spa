<template>
    <div>
        这是{{page}}页面
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            page: '首页'
        }
    }
}
</script>
<style lang='scss' scoped>
div{
    color: red;
}
</style>