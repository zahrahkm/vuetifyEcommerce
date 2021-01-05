<template>
    <v-container class="mt-9">
        <v-layout justify-center row >
            <v-flex lg12 md12 sm12 xs12 class="mb-5">
                <h2 style="text-align: center">our blog</h2>
            </v-flex>
            <v-flex lg3 md3 sm10 xs10 v-for="post in posts" :key="post.title" class="mx-2 mb-3">
                <blog-card :post="post"></blog-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import BlogCard from "./BlogCard";

    export default {
        name:'BlogSection',
        components: {BlogCard},
        props:['posts']
    }
</script>