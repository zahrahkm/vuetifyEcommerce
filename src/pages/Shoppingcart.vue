<template>
    <v-main>
        <v-container v-if="cartItemCount > 0 ">
            <v-layout row wrap justify-center>

                <v-flex xs12 md8 lg8>
                    <v-card class="mt-5 mb-5">
                       <v-container>
                            <v-layout row justify-center>
                                <v-flex lg12 md4 sm5 xs12 class="mb-5" justify-space-around>
                                <h3 style="text-align: center" class="mb-8">Shopping cart<v-badge :content="cartItemCount" color="pink darken-2" class="ml-3"></v-badge></h3>

                                    <v-divider></v-divider>




                                <shopping-card-item :cart="cart" :increaseQuantity="increaseQuantity" :decreaseQuantity="decreaseQuantity" :removeProductFromCart="removeProductFromCart"></shopping-card-item>

                           </v-flex>
                        </v-layout>
                    </v-container> 
                        <v-btn class="mx-auto" block @click="clearCartItems">clear</v-btn>
                    </v-card>
                </v-flex>


                <v-flex xs12 md3 lg3>
                    <v-card class="mx-3 mt-5 mb-5 mr-1" align-center>
                        <v-card-title>products price</v-card-title>
                        <v-card-text>total price: ${{cartTotalPrice}}</v-card-text>
                        <v-btn class="mx-auto my-5" block>continue</v-btn>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
        <v-container v-else>
            <v-layout row justify-center>
                <v-flex>
                    <v-img width="500" class="mx-auto" :src="require(`@/assets/emptycart.png`)"></v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </v-main>

</template>



<script>
    import {mdiBasketOutline, mdiCheckboxMarkedCircleOutline, mdiStoreOutline} from "@mdi/js";
    import {mapGetters} from "vuex";
    import ShoppingCardItem from "../components/ShoppingCardItem";

    export default {
        name:'Shoppingcart',
        components:{ShoppingCardItem},
        data(){
            return{

                icons: [
                    {icon: mdiBasketOutline, title: 'avalible'},
                    {icon: mdiCheckboxMarkedCircleOutline,title:'warranty'},
                    {icon: mdiStoreOutline, title: 'offer shop'}
                ],


            }

        },

        methods:{
            removeProductFromCart(product){
                this.$store.dispatch('removeProductFromCart',product)
            },
            clearCartItems(){
                 this.$store.dispatch(('clearCartItems'))
            },
            increaseQuantity(product){
                    this.$store.dispatch('increaseQuantity', product)
                console.log(product)
            },
            decreaseQuantity(product){
                this.$store.dispatch('decreaseQuantity',product)
            }

        },
        computed:{

            ...mapGetters(['cart','cartItemCount','cartTotalPrice']),

        }
    }
</script>


<style>
    .v-list-item{
        margin-bottom: -18px!important;
        color: #adacac;
    }
    .v-list-item__title {
        color: #adacac;
    }
    .v-list-item__icon svg{
        color: #adacac;
    }
    .v-application--is-ltr .v-list-item__icon:first-child {
        margin-right: 5px!important;
    }
    .titlesize{
        font-size: 10px;

    }
    .titlebottom{
        margin-bottom: -22px!important;
    }
</style>