import home from "@/pages/Home.vue";
import login from "@/pages/Login.vue";
import register from "@/pages/Register.vue";
import product from "@/pages/Singleproduct.vue"
import products from '@/pages/ProductsList.vue';
import MainLayout from "@/layouts/Mainlayout.vue";
import Authlayout from '@/layouts/Authlayout.vue'
import shoppingcart from '@/pages/Shoppingcart.vue'

export default [
    {
        path: "/",
        component: MainLayout,
        redirect: "/home",
        children: [
            {
                path: "home",
                name: "home",
                component: home,
                meta: {
                    guest: true
                }
            },
            {
                path: "product",
                name: "product",
                component: product,
                meta: {
                    guest: true
                }
            },
            {
                path: "products/:id",
                name: "singleproduct",
                component: product,
                meta: {
                    guest: true
                },
                props:true
            }
            ,
            {
                path: "products",
                name: "products",
                component: products,
                meta: {
                    guest: true
                }
            },
            {
                path: "shoppingcart",
                name: "Shoppingcart",
                component: shoppingcart,
                meta: {
                    guest: true
                }
            },

        ],
    },
    {
        path: '/auth',
        component: Authlayout ,
        children: [
            {name: 'login', path: '/login', component:login},
            {name: 'register', path: '/register', component:register}

        ]
    }
];
