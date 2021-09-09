import Layout from '@/components/layout/Layout.vue'
import LayoutSecond from '@/components/layout/LayoutSecond.vue'
import { RouteConfig } from 'vue-router'

const homeRouters: RouteConfig[] = [
    {
        path: '/trang-chu',
        component: Layout,
        children: [
            {
                path: '/',
                components: {
                    default: LayoutSecond
                },
                children: [
                    {
                        path: '/',
                        name: 'Home',
                        component: () => import('../view/Home.vue')
                    },
                ]
            },
            {
                path: '*',
                redirect: '/'
            }
        ]
    }
]

export default homeRouters
