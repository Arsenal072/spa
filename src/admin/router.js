export default {
    routes: [
        {
            path: '/index',
            component: ()=>import(/* webpackChunkName: "async" */'./views/index.vue')
        }
    ]
}

