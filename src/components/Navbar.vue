<template>
<div>
    <v-app-bar app flat fixed color="grey lighten-5">

        <!--drawer menu in mobile-->
            <v-navigation-drawer v-model="drawer" absolute  temporary>
                <v-list nav dense style="height: 100%">
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" v-for="item in menu" :key="item.icon" >
                        <v-list-item :to="item.link" class="mb-3">
                              <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-img alt="Vuetify Logo" class="shrink ml-10 hidden-md-and-up" contain :src="require(`@/assets/zhlogo.png`)" transition="scale-transition" width="50"/>
            <v-spacer class="shrink ml-10 hidden-md-and-up"></v-spacer>



        <!--drawer menu in mobile-->

        <!--menu in desktop left side-->
        <v-toolbar-items class="hidden-sm-and-down" >
             <v-btn right text v-for="item in menu" :key="item.icon" router :to="item.link" >{{ item.title }}</v-btn>
        </v-toolbar-items>


        <v-spacer></v-spacer>

        <!--menu in desktop rigth side-->
        <div class="d-flex align-center">
            <router-link to="/shoppingcart">
                <v-btn icon class="ml-5">
                    <v-icon class="mdi  mdi-cart-outline" ></v-icon>
                    <v-badge v-if="cartItemCount > 0" :content="cartItemCount" depressed color="pink darken-2" style="margin-right: 10px"></v-badge>
                </v-btn>

            </router-link>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon class="mdi mdi-account"></v-icon>
                    </v-btn>
                </template>
                <v-list v-model="item">
                    <v-list-item-group v-model="item" color="purple">


                        <v-list-item router to="/register" v-if="!isLoggedIn" class="mb-1 pr-5">
                            <v-list-item-icon style="margin-right: 5px!important;">
                                <v-icon small>mdi-account-plus</v-icon>
                            </v-list-item-icon >
                            <v-list-item-title>Sign Up</v-list-item-title>
                        </v-list-item>

                        <v-list-item router to="/login" v-if="!isLoggedIn" class="mb-1 pr-5">
                            <v-list-item-icon style="margin-right: 5px!important;">
                                <v-icon small>mdi-account-box</v-icon>
                            </v-list-item-icon >
                            <v-list-item-title>Login</v-list-item-title>
                        </v-list-item>

                        <v-list-item class="grow my-3 pr-10" v-if="isLoggedIn">
                            <v-list-item-avatar color="grey darken-3">
                                <v-img
                                        class="elevation-6"
                                        alt=""
                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title >{{user.username}}</v-list-item-title>
                            </v-list-item-content>


                        </v-list-item>


                        <v-list-item @click="logout" v-if="isLoggedIn"  class="mb-1 pr-5">
                            <v-list-item-icon style="margin-right: 5px!important;">
                                <v-icon small>mdi-account-box</v-icon>
                            </v-list-item-icon >
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>


                    </v-list-item-group>
                </v-list>
            </v-menu>
            <!--logo-->
            <v-img
                    alt="Vuetify Logo"
                    class="shrink ml-10 hidden-sm-and-down"
                    contain
                    :src="require(`@/assets/zhlogo.png`)"
                    transition="scale-transition"
                    width="50"


            />

            <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    :src="require(`@/assets/zhlogo1.png`)"
                    width="150"
            />

        </div>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up "></v-app-bar-nav-icon>



    </v-app-bar>

    </div>
</template>



<script>
    import {mdiAccount, mdiCartOutline, mdiDelete, mdiShareVariant} from "@mdi/js";
    import {mapGetters} from "vuex";
    import {mapState} from "vuex";

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
                    {icon: 'home', title: 'Home', link: "/home"},
                    {icon: 'info', title: 'Products', link: '/products'},
                    {icon: 'warning', title: 'About us'}
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
                item:''

            }
        },
        computed: {
            ...mapGetters(['cartItemCount', 'isLoggedIn']),
            ...mapState(['user'])

        },
        methods: {
            logout() {
                this.$store.dispatch('logout').then(() => {
                    this.$router.push("/login");
                });
            }
        },
        watch: {
            group() {
                this.drawer = false
            }
        },
        mounted() {
            this.$store.dispatch('getCartItems')
        }

    }

</script>
<style>

    a{
        text-decoration: none;
    }
    .v-navigation-drawer{
        height: 170px!important;
    }


</style>