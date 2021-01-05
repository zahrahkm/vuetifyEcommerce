<template>
    <v-container fluid class="py-5" style="background-color: #fafafa;">
        <v-container>
            <v-layout row wrap justify-center>
                <v-flex lg12 md12 sm12 xs12 class="my-5">
                    <h2 style="text-align: center">Trend in this month</h2>
                </v-flex>

                <!-- loading-->
                <v-flex lg12 v-if="loadingStatus">
                    <card-loader :loopCount=4 />
                </v-flex>
                <!-- endloading-->

                <v-flex v-else v-for="product in trend " :key="product.id"  class="mt-2 mb-2" lg3 md4 sm6>
                    <product :product="product"></product>
                </v-flex>
                <v-flex lg12 md12 sm12 xs12  style="text-align: center" class=" my-4">
                    <v-btn router to="/products">see more</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
    import CardLoader from "./CardLoader";
    import Product from "./Product";
    export default {
        name:'TrendProduct',
        components: {CardLoader,Product},
        props:['trend','loadingStatus']
    }
</script>