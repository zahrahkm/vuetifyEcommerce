<template>
  <v-main>
    <!--slider -->
    <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-img height="100%" :src="require(`@/assets/slide/${slide.title}.png`)">
            <div class="elementor-background-overlay">
              <div class="elementor-shape elementor-shape-bottom" data-negative="false">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                     <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" /> <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
                     <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
                  </svg>
              </div>
            </div>
            <v-row class="fill-height" align="center" justify="center">
                 <div class="display-3">{{ slide.title }} Slide</div>
            </v-row>
          </v-img>

      </v-carousel-item>
    </v-carousel>



      <!--boxes -->
            <v-container class="mb-5">
              <v-layout row>
                <v-flex lg3 md3 sm6 v-for="box in boxes " :key="box.id" justify-center>
                    <home-box :box="box"></home-box>
                </v-flex>
              </v-layout>
            </v-container>




      <!--best products -->
        <v-container fluid style="background-color: #fafafa;" class="py-8" >
            <v-container>
                <v-layout row wrap>
                    <v-flex lg12 md12 sm12 xs12 class="my-3">
                        <h2 style="text-align: center">Best products</h2>
                    </v-flex>

                    <!-- loading-->
                    <v-flex lg12 v-if="loadingStatus">
                        <card-loader :loopCount=4 />
                    </v-flex>
                    <!-- endloading-->

                    <v-flex v-else v-for="product in bestProducts " :key="product.id"  class="mt-2 mb-2" lg3 md4 sm6>
                        <product :product="product"></product>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>


      <!--categoriesImage -->
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


      <!--products -->

            <v-container fluid class="py-5" style="background-color: #fafafa;">
                <v-container>
                     <v-layout row wrap justify-center>
                  <v-flex lg12 md12 sm12 xs12 class="my-5">
                      <h2 style="text-align: center">Trend in this month</h2>
                  </v-flex>

                  <!-- loading-->
                  <v-flex lg12 v-if="loadingStatus">
                      <card-loader :loopCount=4 />
                  </v-flex>
                  <!-- endloading-->

                <v-flex v-else v-for="product in trend " :key="product.id"  class="mt-2 mb-2" lg3 md4 sm6>
                  <product :product="product"></product>
                </v-flex>
                  <v-flex lg12 md12 sm12 xs12  style="text-align: center" class=" my-4">
                      <v-btn router to="/products">see more</v-btn>
                  </v-flex>
              </v-layout>
                </v-container>
            </v-container>




      <!-- blog-->

          <v-container>
              <v-layout justify-center row >
                  <v-flex lg12 md12 sm12 xs12 class="mb-5">
                      <h2 style="text-align: center">our blog</h2>
                  </v-flex>
                  <v-flex lg3 md3 sm10 xs10 v-for="post in posts" :key="post.title" class="mx-2 mb-3">
                     <blog-card :post="post"></blog-card>
                  </v-flex>
              </v-layout>
          </v-container>
  </v-main>




      </template>

      <script>

      import product from "../components/Product";
      import CardLoader from "../components/CardLoader";
      import BlogCard from "../components/BlogCard";
      import HomeBox from "../components/HomeBox";
      import {mapGetters} from "vuex";
        export default {
          name: 'home',
          components:{ product,CardLoader,BlogCard,HomeBox },
          data() {
            return {
              slides: [
                {
                  title:'First'
                },

                {
                  title:'Third'
                },
                {
                  title:'Fourth'
                }

              ],
              boxes:[
                {
                  title:"Honesty",
                  text:"Nullam arcu felis – lorem ipsum dolor tristique eget malesuada sed, viverra at sapien.",
                  image:""
                },
                {
                  title:"Responsibility" ,

                  text:" Nunc ut – for dictum purus lorem vel ante dictum ipsum eget ex convallis from dolor.",
                  image:""
                },
                {
                  title:"obligation",
                  text:"Tristique eget malesuada sed arcu felis, viverra viverra at sapien at sapien dolor.",
                  image:""
                },

                {
                  title:"Quality" ,
                  text:"Lorem ipsum dolor – glavrida tristique gravida lacus nec dolor suscipit dlavrida.",
                  image:""
                }
              ],
              posts:[
                  {
                      title: 'How New Technology E-Commerce Industry Worldwide?',
                      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mi',
                      image:'1'

                  },
                  {
                      title: 'We Launched Regular Drone Delivery in California',
                      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mi',
                      image:'322'

                  },
                  {
                      title: 'Google Pay is Now Available in All Outlets',
                      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mi',
                      image:'55'

                  },
              ]

            }


          },
          computed: {
              ...mapGetters("product", ["allproducts"]),
              ...mapGetters("product", ["filterCategories"]),
              ...mapGetters("account", ["loadingStatus"]),
              bestProducts(){
                if(this.allproducts === null){
                    return
                }
                else{
                     return this.allproducts.filter(p=>{
                        return p.value >= 4
                    } )
                }

              },
              trend(){
                  if(this.allproducts === null){
                      return
                  }
                  else{
                      return this.allproducts.filter(p => {
                          return (p.value < 4 && p.price > 300)
                      })
                  }



              },
              loadingStatus(){
                  return this.$store.getters["product/loadingStatus"]
              }
          },
          methods:{

          },
          watch: {
            group() {
              this.drawer = false
            }
          },
            mounted() {
                this.$store.dispatch('product/getproducts')
            }

        }

      </script>
      <style>
        .small{
          font-size: 12px;
        }
        .center{
          justify-content: center;
          text-align: center;
        }
        .elementor-shape svg {
          display: block;
          width: calc(100% + 1.3px);
          position: relative;
          left: 50%;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
        }
        .elementor-2 .elementor-element.elementor-element-c85066d>.elementor-shape-bottom svg {
          width: calc(150% + 1.3px);
          height: 190px;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        .elementor-shape .elementor-shape-fill {
          fill: #fff;
          -webkit-transform-origin: center;
          -ms-transform-origin: center;
          transform-origin: center;
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
        .elementor-shape[data-negative=false].elementor-shape-bottom, .elementor-shape[data-negative=true].elementor-shape-top {
          -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
        }

        .elementor-shape-bottom {
          bottom: -1px;
        }
        .elementor-shape {
          overflow: hidden;
          position: absolute;
          left: 0;
          width: 100%;
          line-height: 0;
          direction: ltr;
        }
      </style>