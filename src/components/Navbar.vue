<template>
<div>
    <v-app-bar app flat fixed color="grey lighten-5">
        <div class="d-flex align-center">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink ml-10"
                    contain
                    :src="require(`@/assets/zhlogo.png`)"
                    transition="scale-transition"
                    width="60"
            />

            <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    :src="require(`@/assets/zhlogo1.png`)"
                    width="150"
            />

            <v-btn icon class="ml-5">
                <v-icon class="mdi  mdi-cart-outline "></v-icon>
            </v-btn>




            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon class="mdi mdi-account"></v-icon>
                    </v-btn>
                </template>
                <v-list dense v-model="item">
                    <v-list-item-group v-model="item" color="purple">
                        <v-list-item v-for="(item, index) in items" :key="index" router :to="item.link">
                            <v-list-item-icon style="margin-right: 5px!important;">
                                <v-icon small v-text="item.icon"></v-icon>
                            </v-list-item-icon >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>

        </div>

        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up "></v-app-bar-nav-icon>
        <v-toolbar-items class="hidden-sm-and-down ">
            <v-btn right text v-for="item in menu" :key="item.icon" router :to="item.link" >{{ item.title }}</v-btn>
        </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list class="mt-5">
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item  v-for="item in menu" :key="item.icon" :to="item.link">
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    </div>
</template>



<script>
    import {mdiAccount, mdiCartOutline, mdiDelete, mdiShareVariant} from "@mdi/js";

    export default {
        name: "Navbar",
        data() {
            return {
                icons: {
                    mdiAccount,
                    mdiCartOutline,
                    mdiShareVariant,
                    mdiDelete,
                },
                menu: [
                    {icon: 'home', title: 'Home' , link: "/home"},
                    {icon: 'info',title:'Products', link: '/products'},
                    {icon: 'warning', title: 'Link C'}
                ],
                item: 1,
                items: [
                    {icon: 'mdi-account-plus', title: 'Sign Up',link: '/register'},
                    {icon: 'mdi-account-box', title: 'Login' , link: '/login'},
                    {icon: 'mdi-account-box', title: 'Logout' , link: '/logout'},
                ],
                drawer: false,
                group: null,
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
            }
        }
    }

</script>
<style>
    .menuable__content__active{
        width: 120px!important;
    }
</style>