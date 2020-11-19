<template>
    <v-app>
            <navbar></navbar>
            <router-view></router-view>
            <my-footer></my-footer>
    </v-app>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import MyFooter from "@/components/MyFooter";

    export default {
        name: "MainLayout",
        data(){
            return{

            }
        },
        components: {
            MyFooter,
            Navbar,
        },
    };
</script>