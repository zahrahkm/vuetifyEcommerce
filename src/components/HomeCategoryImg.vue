<template>
    <v-container class="py-12">
        <v-layout row justify-center>
            <v-flex lg6 md6 sm6 xs11>
                <v-layout column justify-center >
                    <v-flex lg6 xs4>
                        <v-img :src="require(`@/assets/1.jpg`)" height="270" class="mx-3 mb-5"></v-img>
                    </v-flex>
                    <v-flex lg6 xs4>
                        <v-img :src="require(`@/assets/322.jpg`)" height="160" class="mx-3 mb-5"></v-img>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex lg6 md6 sm6 xs11>
                <v-layout column justify-center>
                    <v-flex lg6 xs4>
                        <v-img :src="require(`@/assets/55.jpg`)" height="200" class="mx-3 mb-5"></v-img>

                    </v-flex>
                    <v-flex lg6 xs4>
                        <v-img :src="require(`@/assets/11.png`)" height="230" class="mx-3"></v-img>
                    </v-flex>
                </v-layout>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>

</script>