<template>
  <v-main>
    <!--slider -->
    <slider :slides="slides"></slider>

    <!--boxes -->
    <box-section :boxes="boxes"></box-section>

    <!--best products -->
    <best-product
      :bestProducts="bestProducts"
      :loadingStatus="loadingStatus"
    ></best-product>

    <!--categoriesImage -->
    <home-category-img></home-category-img>

    <!--trend products -->
    <trend-product
      :trend="trend"
      :loadingStatus="loadingStatus"
    ></trend-product>

    <!-- blog-->
    <blog-section :posts="posts"></blog-section>
  </v-main>
</template>

<script>
import Slider from "../components/Slider";
import BlogSection from "../components/BlogSection";
import { mapGetters } from "vuex";
import BestProduct from "../components/BestProduct";
import TrendProduct from "../components/TrendProduct";
import BoxSection from "../components/BoxSection";
import HomeCategoryImg from "../components/HomeCategoryImg";
export default {
  name: "home",
  components: {
    BoxSection,
    TrendProduct,
    BestProduct,
    BlogSection,
    Slider,
    HomeCategoryImg
  },
  data() {
    return {
      slides: [
        {
          title: "First"
        },
        {
          title: "Second"
        },
        {
          title: "Third"
        }
      ],
      boxes: [
        {
          title: "Honesty",
          text:
            "Nullam arcu felis – lorem ipsum dolor tristique eget malesuada sed, viverra at sapien.",
          image: ""
        },
        {
          title: "Responsibility",

          text:
            " Nunc ut – for dictum purus lorem vel ante dictum ipsum eget ex convallis from dolor.",
          image: ""
        },
        {
          title: "obligation",
          text:
            "Tristique eget malesuada sed arcu felis, viverra viverra at sapien at sapien dolor.",
          image: ""
        },

        {
          title: "Quality",
          text:
            "Lorem ipsum dolor – glavrida tristique gravida lacus nec dolor suscipit dlavrida.",
          image: ""
        }
      ],
      posts: [
        {
          title: "How New Technology E-Commerce Industry Worldwide?",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mi",
          image: "1"
        },
        {
          title: "We Launched Regular Drone Delivery in California",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mi",
          image: "322"
        },
        {
          title: "Google Pay is Now Available in All Outlets",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad mi",
          image: "55"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("product", ["allproducts"]),
    ...mapGetters("product", ["filterCategories"]),
    ...mapGetters("account", ["loadingStatus"]),
    bestProducts() {
      if (this.allproducts === null) {
        return;
      } else {
        return this.allproducts.filter(p => {
          return p.value >= 4;
        });
      }
    },
    trend() {
      if (this.allproducts === null) {
        return;
      } else {
        return this.allproducts.filter(p => {
          return p.value < 4 && p.price > 300;
        });
      }
    },
    loadingStatus() {
      return this.$store.getters["product/loadingStatus"];
    }
  },
  methods: {},
  watch: {
    group() {
      this.drawer = false;
    }
  },
  mounted() {
    this.$store.dispatch("product/getproducts");
  }
};
</script>
<style>
.small {
  font-size: 12px;
}
.center {
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
.elementor-2
  .elementor-element.elementor-element-c85066d
  > .elementor-shape-bottom
  svg {
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
.elementor-shape[data-negative="false"].elementor-shape-bottom,
.elementor-shape[data-negative="true"].elementor-shape-top {
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
