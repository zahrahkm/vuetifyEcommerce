<template>
    <div>
    <v-card-title>Sort by</v-card-title>
    <v-card-actions class="pb-5">
        <v-btn @click="ascending"><v-icon left  color="purple lighten-1">mdi-sort-ascending</v-icon>ascending</v-btn>
        <v-btn @click="decending"><v-icon left  color="purple lighten-1" >mdi-sort-descending</v-icon>decending</v-btn>
    </v-card-actions>
    </div>
</template>


<script>
    export default {
        name:'SortBy',
        props: {
            ascending: {
                type: Function,
                required: true
            },
            decending: {
                type: Function,
                required: true
            }
        }
    }

</script>