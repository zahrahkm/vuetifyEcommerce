<template>
  <v-main v-if="product">
      <v-container>
          <v-layout row wrap justify-center>
              <v-flex lg12 md12 sm11 xs10>
                   <product-info-card :product="product.product" ></product-info-card>
              </v-flex>
          </v-layout>

      </v-container>

      <!--similar product-->
      <v-container>
          <v-layout row justify-center>
              <v-flex lg12 md12 sm12 xs12 class="mt-5">
                  <h3 style="color: #b37cac">OTHER PRODUCTS</h3>
              </v-flex>

              <v-flex lg12 md12 sm10 xs10 class="my-3 py-5">
                  <vueper-slides class="no-shadow" fixed-height="370px" :visible-slides="4" slide-multiple :gap="3" :slide-ratio="1 / 4" :dragging-distance="100" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }" >
                      <vueper-slide v-for="product in otherproduct" :key="product.id" >
                          <template v-slot:content>
                              <product :product="product" class="mx-2"></product>
                          </template>

                      </vueper-slide>
                  </vueper-slides>
              </v-flex>
          </v-layout>
      </v-container>
  </v-main>
</template>
<script>
    import product from "../components/Product";
    import ProductInfoCard from "../components/ProductInfoCard";
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css';
    import  {mapGetters} from 'vuex';
    export default {
        name: 'singleproduct',
        components:{
            product, VueperSlides, VueperSlide,ProductInfoCard
        },
        props:['id'],

        data() {
            return {


            };
        },
        computed:{
            ...mapGetters(['allproducts','product','otherproduct']),

        }
        ,
        methods:{

        },
        created() {

            this.unwatch = this.$store.watch(
                (state, getters) => getters.product,
                (newValue, oldValue) => {
                    this.product=product
                    console.log(`Updating from ${oldValue} to ${newValue}`);

                    // Do whatever makes sense now
                    if (newValue === 'success') {
                        this.complex = {
                            deep: 'some deep object',
                        };
                    }
                }
            )





        }, beforeDestroy() {
            this.unwatch();
        },
        mounted() {
            this.$store.dispatch('getCartItems')
            this.$store.dispatch(('getproducts'))
            this.$store.dispatch(('otherproduct'))
            this.$store.dispatch("getSingleProduct",this.id);
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
    #custombtn{
        color: white;
        background-color: #b37cac;
    }
</style>