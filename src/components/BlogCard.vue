<template>
    <v-card >
        <v-img
                height="250"
                :src="require(`@/assets/${post.image}.jpg`)"
        ></v-img>
        <v-card-title>{{post.title}}</v-card-title>
        <v-card-text>{{post.text}}</v-card-text>
        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text class="mx-auto mb-3">read more</v-btn>
        </v-card-actions>

    </v-card>
</template>


<script>
    export default {
        name:"BlogCard",
        props:["post"]
    }
</script>