<template>
    <v-container fluid style="background-color: #fafafa;" class="py-8" >
        <v-container>
            <v-layout row wrap>
                <v-flex lg12 md12 sm12 xs12 class="my-3">
                    <h2 style="text-align: center">Best products</h2>
                </v-flex>

                <!-- loading-->
                <v-flex lg12 v-if="loadingStatus">
                    <card-loader :loopCount=4 />
                </v-flex>
                <!-- endloading-->

                <v-flex v-else v-for="product in bestProducts " :key="product.id"  class="mt-2 mb-2" lg3 md4 sm6>
                    <product :product="product"></product>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
    import CardLoader from "./CardLoader";
    import Product from "./Product";
    export default {
        name:'BestProduct',
        components: {CardLoader,Product},
        props:['bestProducts','loadingStatus'],

    }
</script>