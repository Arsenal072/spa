export default {
    routes: [
        {
            path: '/index',
            component: ()=>import(/* webpackChunkName: "ddd" */'./views/index.vue')
        }
    ]
}