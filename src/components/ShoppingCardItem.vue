<template>
   <div>
       <v-card flat align-center class="my-3 mx-3" v-for="item in cart" :key="item.product.id">
           <v-layout row>
               <v-flex lg3 class="mx-3">
                   <v-img height="210" :src="require(`@/assets/${item.product.name}.png`)" aspect-ratio="1"></v-img>
               </v-flex>
               <v-flex lg8>
                   <v-card-title class="titlebottom" align="center" >{{item.product.modelName}}</v-card-title>
                   <v-list>
                       <v-list-item v-for="(icon,i) in icons" :key="i">
                           <v-list-item-icon>
                               <v-icon >
                                   {{icon.icon}}
                               </v-icon>
                           </v-list-item-icon>
                           <v-list-item-title class="titlesize">{{icon.title}}</v-list-item-title>
                       </v-list-item>
                   </v-list>
                   <v-container>
                       <v-layout>
                           <v-flex lg8>
                               <v-btn class="my-3">
                                   <btn @click="increaseQuantity(item.product)"><v-icon x-small class="mr-3">mdi-plus</v-icon></btn>
                                   <small>{{item.quantity}}</small>
                                   <btn @click="decreaseQuantity(item.product)"><v-icon x-small class="ml-3" >mdi-minus</v-icon></btn>
                               </v-btn>
                               <v-btn icon color="pink" class="ml-2" @click.prevent="removeProductFromCart(item.product)">
                                   <v-icon>mdi-delete</v-icon>
                               </v-btn>
                           </v-flex>
                           <v-flex lg4>
                               <v-card-text>price: ${{item.product.price * item.quantity}}</v-card-text>
                           </v-flex>
                       </v-layout>
                   </v-container>
               </v-flex>
           </v-layout>
           <v-divider></v-divider>

       </v-card>
   </div>
</template>

<script>
    export default {
        name:'ShoppingCardItem',
        props:{
            cart:Array,
            increaseQuantity:Function,
            decreaseQuantity:Function,
            removeProductFromCart:Function
        }
    }
</script>