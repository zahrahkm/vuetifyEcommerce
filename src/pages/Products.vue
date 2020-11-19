<template>


<v-main>
    <v-container>
        <v-layout row wrap justify-center>
            <v-flex xs12 md3 lg3 class="hidden-sm-and-down ">
                <v-card class=" mt-5 mb-5 mr-1" >
                    <v-card-title>sidebar</v-card-title>
                    <v-text-field class="mx-3 mb-3" v-model="search" clearable flat hide-details prepend-inner-icon="mdi-magnify" label="Search">
                    </v-text-field>
                    <v-card-title>category</v-card-title>
                </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md8 lg8>
                <v-layout row justify-center>
                    <v-flex xs12 sm5 md4 lg-3 v-for="product in resultQuery " :key="product.id" class="mb-5" justify-space-around>
                        <product :product="product"></product>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>

</v-main>







</template>
<script>
    import {mapGetters} from "vuex";
    import product from "../components/Product";
    export default {
        name: "products",
        components:{product},

        data(){
            return{search:''}
        },
        computed:{
            ...mapGetters(['allproducts']),
            resultQuery(){
                if(this.search){
                    return this.allproducts.filter((item)=>{
                        return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                    })
                }else{
                    return this.allproducts;
                }
            }


        },
    }
</script>


<style>
    .v-text-field--solo-inverted.v-input--is-focused > .v-input__control>.v-input__slot input {
        caret-color: red!important;
    }
</style>