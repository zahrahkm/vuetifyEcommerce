<template>
    <div class="cardLoader">
        <div class="row">
            <div class="col-md-3" v-for="loop in loopCount" v-bind:key="loop">
                <instagram-loader :width="320" :height="550" style="padding: 20px"></instagram-loader>
            </div>
        </div>
    </div>
</template>
<script>

    import { InstagramLoader } from 'vue-content-loader';

    export default {
        name: "cardLoader",
        props: ["loopCount","loadingStatus"],
        components: { InstagramLoader },
    };
</script>

<style >
</style>