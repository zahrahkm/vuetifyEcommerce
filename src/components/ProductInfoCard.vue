<template>
    <v-card>
        <v-container>
            <v-layout>
                <v-flex  xl4 lg4 md12 sm11 xs12 >
                    <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false" @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
                        <vueper-slide v-for="(img, i) in product.images" :key="i" :image="require(`@/assets/${img.image}`)" >{{img.image}}</vueper-slide>
                    </vueper-slides>

                    <vueper-slides class="no-shadow thumbnails" ref="vueperslides2" @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="slides.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
                        <vueper-slide v-for="(img, i) in product.images" :key="i" :image="require(`@/assets/${img.image}`)"  @click.native="$refs.vueperslides2.goToSlide(i)"></vueper-slide>
                    </vueper-slides>
                </v-flex>
                <v-flex xl8 lg8 md12 sm11 xs12>
                    <v-card-title>{{product.name}}</v-card-title>

                    <v-card-text >
                        <v-row align="center" class="mx-0">
                            <v-rating :value="parseInt(product.value)" color="amber" dense half-increments readonly size="14"></v-rating>
                            <div class="grey--text ml-4">
                                {{product.value}}
                            </div>
                        </v-row>
                        <v-divider class="my-4"></v-divider>
                        <ul>
                            <li>
                                Model Name: {{product.modelName}}
                            </li>
                            <li>
                                Brand: {{product.brand}}
                            </li>
                            <li>
                                Color: {{product.color}}
                            </li>
                            <li>
                                Price: ${{product.price}}
                            </li>
                        </ul>

                        <v-divider class="my-4"></v-divider>
                        About this item :<br>
                        {{product.about}}
                        <br>



                        <v-btn class="mt-5 ml-5" x-large id="custombtn" large @click="addToCart">add to card</v-btn>

                    </v-card-text>
                </v-flex>

            </v-layout>
        </v-container>
    </v-card>



</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css';
    export default {
        name:'ProductInfoCard',
        components:{
                 VueperSlides, VueperSlide
            },
        props:['product'],
        data(){
            return{
                slides: [
                    { image: require('@/assets/1.png') },
                    { image: require('@/assets/11.png') },
                    { image: require('@/assets/55.jpg') }
                ],
            }
        },
        methods:{
            addToCart(){
                this.$store.dispatch('addProductToCart',{
                    product:this.product,
                    quantity:1
                })
                this.$router.replace('/shoppingcart')
            },
        }


    }
</script>