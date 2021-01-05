<template>
    <v-container class="mb-5">
        <v-layout row>
            <v-flex lg3 md3 sm6 v-for="box in boxes " :key="box.id" justify-center>
                <home-box :box="box"></home-box>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    import HomeBox from "./HomeBox";

    export default {
        name:'BoxSection',
        components: {HomeBox},
        props:['boxes']
    }
</script>