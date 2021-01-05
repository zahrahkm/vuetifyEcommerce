<template>
        <v-card class="mx-auto" max-width="270px" max-height="450px" >
            <router-link :to="{name:'singleproduct', params:{ id : product.id}}">
                <v-img :src="require(`@/assets/${product.name}.png`)" ratio="2.75" class="mx-auto"></v-img>
            </router-link>
            <v-card-title>
                <h4>{{product.name}}</h4>
                <v-spacer></v-spacer>

                <v-row justify="end">
                    <v-rating :value="parseInt(product.value)" color="amber" dense half-increments readonly size="14"></v-rating>
                    <div class="grey--text small ">
                        {{product.value }}
                    </div>
                </v-row>
            </v-card-title>
            <v-card-subtitle>
                ${{product.price}}
            </v-card-subtitle>
        </v-card>

</template>


<script>


    export default {
        name:'product',
        props:{
            product:Object
        }

    }
</script>

<style>

</style>