<template>
    <v-card width="200" flat class="mx-auto">
        <v-img max-height="120" max-width="120" :src="require(`@/assets/boxes/${box.title}.png`)" class="mx-auto"></v-img>
        <v-card-title class="center">{{box.title}}</v-card-title>
        <v-card-text class="center">{{box.text}}</v-card-text>
    </v-card>
</template>

<script>
    export default {
        name:'HomeBox',
        props:['box']
    }
</script>