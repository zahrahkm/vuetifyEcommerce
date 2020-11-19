<template>
  <v-main>


      <v-container>

          <v-layout row wrap justify-center>
              <v-flex lg12 md12 sm11 xs10>
                  <v-card>
                      <v-container>
                      <v-layout row wrap>

                          <v-flex  xl4 lg4 md12 sm11 xs12 >
                              <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false" @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
                                  <vueper-slide v-for="(img, i) in product.images" :key="i" :image="img.image">{{img.image}}</vueper-slide>
                              </vueper-slides>

                              <vueper-slides class="no-shadow thumbnails" ref="vueperslides2" @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="slides.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
                                  <vueper-slide v-for="(img, i) in product.images" :key="i" :image="img.image" @click.native="$refs.vueperslides2.goToSlide(i)">{{img.image}}</vueper-slide>
                              </vueper-slides>
                          </v-flex>













                          <v-flex xl8 lg8 md12 sm11 xs12>
                              <v-card-title>{{product.name}}</v-card-title>

                              <v-card-text >
                                  <v-row align="center" class="mx-0">
                                      <v-rating :value="product.value" color="amber" dense half-increments readonly size="14"></v-rating>
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
                                          Price: {{product.price}}
                                      </li>
                                  </ul>

                                  <v-divider class="my-4"></v-divider>
                                  About this item <br>
                                  {{product.about}}
                                  <v-chip-group

                                          active-class="deep-purple accent-4 white--text"
                                          column
                                  >
                                      <v-chip>5:30PM</v-chip>

                                      <v-chip>7:30PM</v-chip>

                                      <v-chip>8:00PM</v-chip>

                                      <v-chip>9:00PM</v-chip>
                                  </v-chip-group>
                                  <v-btn color="accent" large @click="addToCart">add to card</v-btn>

                              </v-card-text>
                          </v-flex>

                      </v-layout>
                      </v-container>
                  </v-card>
              </v-flex>
          </v-layout>

      </v-container>

<v-container>
    <v-layout row justify-center>
        <v-flex lg12 md12 sm11 xs11 >
            <h3>You may also like</h3>
            <v-slide-group class="mx-3">
                <v-slide-item v-for="product in allproducts" :key="product.id"  class="mx-2">
                    <product :product="product" class="mx-2"></product>
                </v-slide-item>
            </v-slide-group>
        </v-flex>


    </v-layout>
</v-container>




  </v-main>
</template>
<script>
    import product from "../components/Product";
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css';

    import  {mapGetters} from 'vuex';
    export default {
        name: 'singleproduct',
        components:{
            product, VueperSlides, VueperSlide
        },

        data() {
            return {
                product:'',
                model: null,
                slides: [
                    { image: require('@/assets/1.png') },
                    { image: require('@/assets/11.png') },
                    { image: require('@/assets/55.jpg') }
                ]
            };
        },
        computed:{
            ...mapGetters(['allproducts'])
        }
        ,
        methods:{
            getProduct(){
               this.product=this.allproducts.find(p => p.id === this.$route.params.product_id)
            },
            addToCart(){
                this.$store.dispatch('addProductToCart',{
                    product:this.product,
                        quantity:1
                })
                this.$router.replace('/shoppingcart')
            }
        },
        created() {
            this.getProduct()
        },
        mounted() {
            this.$store.dispatch('getCartItems')
        }
    }
</script>
<style>
    .thumbnails {
        margin: auto;
        max-width: 300px;
    }

    .thumbnails .vueperslide {
        box-sizing: border-box;
        border: 1px solid #fff;
        transition: 0.3s ease-in-out;
        opacity: 0.7;
        cursor: pointer;
    }

    .thumbnails .vueperslide--active {
        box-shadow: 0 0 3px #d9b2d1;
        opacity: 1;
        border-color: #f1d4d8;
    }
</style>