<template>


<v-main>
    <v-container>
        <v-layout row wrap justify-center>
            <!-- loading-->
            <v-flex lg12 v-if="loadingStatus">
            <card-loader :loopCount=8 />
            </v-flex>
            <!-- sidebar-->
            <v-flex xs12 md3 lg3 class="hidden-sm-and-down " v-else>
                <v-card class=" mt-5 mb-5 mr-1" >
                    <v-card-title>category</v-card-title>
                    <v-divider></v-divider>

                    <v-card-actions class="ml-2">
                        <v-layout column>
                            <v-radio-group column v-model="selectCategory">
                                <v-radio label="all" @click="filterCategories" color="purple lighten-1" value="all"></v-radio>
                            </v-radio-group>
                            <v-radio-group column v-for="cat in allproducts" :key="cat.category"  v-model="selectCategory">
                                <v-radio :label="cat.category" @click="filterCategories" color="purple lighten-1" :value="cat.category"></v-radio>
                            </v-radio-group>
                        </v-layout>
                    </v-card-actions>

                    <v-divider></v-divider>
                    <sort-by :decending="decending" :ascending="ascending"></sort-by>



                </v-card>

            </v-flex>
            <v-spacer></v-spacer>
            <!-- product list-->
            <v-flex xs12 md8 lg8 class="mt-5 ">
                <v-layout row justify-center>
                    <v-flex xs12 sm5 md4 lg-3 v-for="product in filterCategories " :key="product.id" class="mb-5" justify-space-around >
                        <product :product="product"></product>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

</v-main>







</template>
<script>
    import {mdiSortDescending, mdiSortAscending } from '@mdi/js';
    import {mapGetters} from "vuex";
    import product from "../components/Product";
    import CardLoader from "@/components/CardLoader";
    import SortBy from "@/components/SortBy";

    export default {
        name: "products",
        components: {product,CardLoader,SortBy },

        data() {
            return {
                search: '',
                selectCategory:"all",
                icons: {
                    mdiSortDescending,
                    mdiSortAscending
                }

            }
        },

        computed: {
            ...mapGetters(['allproducts']),

            filterCategories(){
                var category= this.selectCategory;
                if(category === "all"){
                    return this.allproducts
                }else{
                    return this.allproducts.filter(p=>{
                        return p.category ===category
                    })
                }
            },
            resultQuery() {
                if (this.search) {
                    return this.allproducts.filter((item) => {
                        return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                    })
                } else {
                    return null
                }
            },
            loadingStatus(){
                return this.$store.getters.loadingStatus
            }

        },
        methods:{
            ascending(){
                this.allproducts.sort((a,b)=>a.price> b.price? 1:-1)
            },
            decending(){
                this.allproducts.sort((a,b)=>a.price < b.price? 1:-1)
            }

        },
        mounted() {
            this.$store.dispatch(('getproducts'))
        }




    }
</script>


<style>
    .v-text-field--solo-inverted.v-input--is-focused > .v-input__control>.v-input__slot input {
        caret-color: red!important;
    }
    .v-input--selection-controls {
        margin-top: 1px;
        padding-top: 3px;
    }
</style>