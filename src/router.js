import index from './views/index.vue'
export default {
    routes: [
        {
            path: '/index',
            component: ()=>import(/* webpackChunkName: "async" */'./views/index.vue')
        }
    ]
}