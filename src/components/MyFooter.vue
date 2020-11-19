<template>
    <v-footer dark padless>

        <v-card flat tile class="purplecolor white--text text-center" width="100%">
            <div class="elementor-background-overlay1">
                <div class="elementor-shape1 elementor-shape-top" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" /> <path class="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
                        <path class="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
                    </svg>
                </div>
            </div>



            <v-card-text class="white--text pt-0" style="margin-top: 12%">
                risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>
            <v-card-text >
                <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-text class="white--text" >
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>


<script>
    export default {
        name:'MyFooter',
        data(){
            return{
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ]
            }
        }
    }
</script>
<style>
    .purplecolor{
        background-color: #c5a5c1!important;
    }
    .elementor-shape1 svg {
        display: block;
        width: calc(100% + 1.3px);
        position: relative;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .elementor-2 .elementor-element.elementor-element-c85066d>.elementor-shape-top svg {
        width: calc(150% + 1.3px);
        height: 190px;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    .elementor-shape1 .elementor-shape-fill {
        fill: #fff;
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    .elementor-shape1[data-negative=false].elementor-shape-top, .elementor-shape1[data-negative=true] {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    .elementor-shape-top{
        top: -1px;
    }

    .elementor-shape1 {
        overflow: hidden;
        position: absolute;
        left: 0;
        width: 100%;
        line-height: 0;
        direction: ltr;
    }
</style>