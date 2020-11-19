import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)


export const store=new Vuex.Store({
    state:{
        allproducts:[
            {
                id: 1,
                name: "airpod",
                price: 39.99 ,
                value:3,
                about:"Active noise cancellation for immersive sound\n" +
                    "Transparency mode for hearing and connecting with the world around you\n" +
                    "Three sizes of soft, tapered silicone tips for a customizable fit\n" +
                    "Sweat and water resistant\n" +
                    "Adaptive EQ automatically tunes music to the shape of your ear\n" +
                    "Easy setup for all your Apple devices\n" +
                    "Quick access to Siri by saying “Hey Siri”\n" +
                    "The Wireless Charging Case delivers more than 24 hours of battery life"
                ,
                brand:"Apple",
                modelName:"Apple AirPods Pro",
                Color:"White",
                images: [
                    { image: require('@/assets/airpod/airpod.png') },
                    { image: require('@/assets/airpod/airpod2.png') },
                    { image: require('@/assets/airpod/airpod3.png') },
                    { image: require('@/assets/airpod/airpod4.png') },
                ]


            },
            {
                id: 2,
                name: "macbook",
                price:2079.00 ,
                value:2.1,
                about:"Ninth-generation 6-Core Intel Core i7 Processor\n" +
                    "Stunning 16-inch Retina Display with True Tone technology\n" +
                    "Touch Bar and Touch ID\n" +
                    "AMD Radeon Pro 5300M Graphics with GDDR6 memory\n" +
                    "Ultrafast SSD\n" +
                    "Intel UHD Graphics 630\n" +
                    "Six-speaker system with force-cancelling woofers\n" +
                    "Four Thunderbolt 3 (USB-C) ports\n" +
                    "Up to 11 hours of battery life\n" +
                    "802.11AC Wi-Fi"
                ,
                brand:"Apple",
                modelName:"MacBook Pro 16-inch",
                Color:"Space Gray",
                images: [
                    { image: require('@/assets/macbook/macbook.png') },
                    { image: require('@/assets/macbook/macbook2.png') },
                    { image: require('@/assets/macbook/macbook3.png') },
                    { image: require('@/assets/macbook/macbook4.png') },

                ]


            },
            {
                id: 3,
                name: "watch",
                price:385.00,
                value:5,
                about:"GPS + Cellular\n" +
                    "Always-On Retina display\n" +
                    "30% larger screen\n" +
                    "Swimproof\n" +
                    "Electrical and optical heart sensors",
                brand:"Apple",
                modelName:"Apple Watch Series 5 (GPS + Cellular, 40MM) - Gold Aluminum Case with Pink Sand Sport Band (Renewed)",
                color:"Gold Aluminum Case",
                images: [
                    { image: require('@/assets/watch/watch.png') },
                    { image: require('@/assets/watch/watch2.png') },
                    { image: require('@/assets/watch/watch3.png') },
                    { image: require('@/assets/watch/watch4.png') },
                ]


            },
            {
                id: 4,
                name: "iphone",
                price:679.32,
                value:4.99,
                about: "OFFER INCLUDES: An Apple iPhone and a wireless plan with unlimited data/talk/text\n" +
                    "WIRELESS PLAN: Unlimited talk, text, and data with mobile hotspot, nationwide coverage, and international reach. No long-term contract required.\n" +
                    "PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription\n" +
                    "5.8-inch Super Retina XDR OLED display, water and dust resistant, with Face ID\n" +
                    "Triple-camera system with 12MP Ultra Wide camera, 12MP TrueDepth front camera with Portrait mode\n" +
                    "Fast-charge and wireless charging capable\n",
                brand:"Apple",
                modelName:"Apple iPhone 11 Pro (64GB, Midnight Green)",
                color:"Midnight Green",
                images: [
                    { image: require('@/assets/iphone/iphone.png') },
                    { image: require('@/assets/iphone/iphone2.png') },
                    { image: require('@/assets/iphone/iphone3.png') },
                    { image: require('@/assets/iphone/iphone4.png') },
                ]

            },
            {
                id: 5,
                name: "ipad",
                price:1035.93,
                value:5,
                about: "12.9-inch edge-to-edge Liquid Retina display with ProMotion, True Tone, and P3 wide color\n" +
                    "A12Z Bionic chip with Neural Engine\n" +
                    "12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner\n" +
                    "7MP TrueDepth front camera\n" +
                    "Face ID for secure authentication and Apple Pay\n" +
                    "Four speaker audio and five studio-quality microphones\n" +
                    "802.11ax Wi-Fi 6\n" +
                    "Up to 10 hours of battery life\n" +
                    "USB-C connector for charging and accessories\n" +
                    "Support for Magic Keyboard, Smart Keyboard Folio, and Apple Pencil",
                brand:"Apple",
                modelName:"Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)",
                color:"Silver",
                images: [
                    { image: require('@/assets/ipad/ipad.png') },
                    { image: require('@/assets/ipad/ipad2.png') },
                    { image: require('@/assets/ipad/ipad3.png') },
                    { image: require('@/assets/ipad/ipad4.png') },

                ]

            },
            {
                id: 6,
                name: "wireless charging",
                price:1035.93,
                value:5,
                about: "Updated 3 IN 1 WIRELESS CHARGING STAND: According recent customer's comment about \"bright light for nightstand, charging with noise and could not charge well\", our manufacture has updated our products and solved these issues. Now you can use it smoothly, and the charging process is quiet and the light is lower, which will not disturb you when you sleep or working. Also with 24 month warranty, if you have any problems with it, please feel free to contact us.\n" +
                    "MORE USER-FRIENDLY DESIGN: SLEEP-FRIENDLY DESIGN With silicone coatings cover. The GREEN LED indicator will flash for 3s if power source is connected, then turn on for 16s if recognizes your phone well. Entering charging mode, light will turn on but very dim and keep the whole charging process SLEEP-FRIENDLY. Besides that, silicone coatings cover makes this wireless charging dock be electrostatic-proof and makes you have the feelings of touching skin.\n" +
                    "HIGH-QUALITY WIRELESS CHARGER: Wireless charger does not scratch iPhone/iwatch/airpods to block the screen or the edges when charging the device. The charging stand hides the iWatch and AirPods Pro cables, saving you space on your desk. (The charging distance is 0-3mm, please don't wear protective case which is over 3mm thick)\n" +
                    "MULTIPLE SMART SAFETY PROTECTIONS: GEEKERA triple fast charging mat uses multiple-devices-charging and non-fixed charging part, LED indicators design (light green LED light for comfortable sleep). Non-slip thread for more efficiently charging. Also multi-protect technology like temperature control, over-current protection, over-voltage protection… make sure your devices wouldn’t be damaged.\n" +
                    "“U”-PLATE DESIGN 3 IN 1 WIRELESS CHARGER: Only 0.47 inch thickness size with “U”-plate design and 4.8 oz weight, you can put it to the pocket. Also GEEKERA wireless charger dock can charge iPhone 11 pro/8/X/XR/XS or Samsung phone, apple watch 5/4/3/2 and AirPods pro 2/1 or Galaxy earbuds simultaneously(Note: Not suitable for Airpod gen 1). Different from other wireless charging dock. Wireless charging dock haven’t the issue of” toggling between charging/not charging non stop”.",
                brand:"Apple",
                modelName:"Wireless Charging Stand, GEEKERA 3 in 1 Wireless Charger Charging Station Dock for Apple Watch 5 4 3 2, Airpods Pro, iPhone 11/11 Pro/X/Xr/Xs/8 Plus, Qi-Certified Phones(with QC3.0 Adapter)",
                color:"Black",
                images: [
                    { image: require('@/assets/wireless-charging/wireless-charging2.png') },
                    { image: require('@/assets/wireless-charging/wireless-charging3.png') },
                    { image: require('@/assets/wireless-charging/wireless-charging4.png') },
                ]

            },
            {
                id: 7,
                name: "imac",
                price:649.99,
                value:4.1,
                about: "Intel Iris Pro Graphics\n" +
                    "2.7 GHz Quad-Core Intel Core i5 Processor (Turbo Boost up to 3.2 GHz) with 6MB L3 cache\n" +
                    "21.5-inch (Diagonal) LED-backlit Display with IPS Technology; 1920-by-1080 Resolution\n" +
                    "1TB Hard Drive, 8 GB (Two 4 GB) of 1600MHz DDR3 Memory\n" +
                    "This Certified Refurbished product has been tested and certified to work and look like new, with minimal to no signs of wear, by a specialized third-party seller approved by Amazon. The product is backed by a minimum 90-day warranty, and may arrive in a generic brown or white box. Accessories may be generic and not directly from the manufacturer",
                brand:"Apple",
                modelName:"Apple iMac 21.5in 2.7GHz Core i5 (ME086LL/A) All In One Desktop, 8GB Memory, 1TB Hard Drive, Mac OS X Mountain Lion (Renewed)",
                color:"Silver",
                images: [
                    { image: require('@/assets/imac/imac.png') },
                    { image: require('@/assets/imac/imac2.png') },
                    { image: require('@/assets/imac/imac3.png') },
                    { image: require('@/assets/imac/imac4.png') },

                ]

            },
            {
                id: 8,
                name: "Apple TV",
                price:439.9,
                value:3.3,
                about: "1080p HD for high-quality video\n" +
                    "Dolby Digital Plus 7.1 surround sound\n" +
                    "Watch original stories from the most creative minds in TV and film on Apple TV+; included for one year when you buy an Apple TV HD\n" +
                    "Play groundbreaking, new original games from Apple Arcade\n" +
                    "Use AirPlay to view photos and videos from your iPhone and iPad on your TV\n" +
                    "Ask Siri to search for movies, shows, and games with the Siri Remote",
                brand:"Apple",
                modelName:"Apple TV (32GB, 4th Generation)",
                color:"Black",
                images: [

                    { image: require('@/assets/appleTV/Apple TV.png') },
                    { image: require('@/assets/appleTV/appleTV2.png') },
                    { image: require('@/assets/appleTV/appleTV3.png') },
                    { image: require('@/assets/appleTV/appleTV4.png') },
                ]

            },
            {
                id: 9,
                name: "Apple Pencil",
                price:94.88,
                value:2,
                about: "Apple Pencil features the precision, responsiveness, and natural fluidity of a traditional writing instrument and the versatility to become so much more.\n" +
                    "With Apple Pencil, you can turn iPad into your notepad, canvas, or just about anything else you can imagine.\n" +
                    "Compatible with iPad (6th, 7th, and 8th generation), iPad Air (3rd generation), iPad mini (5th generation), iPad Pro 12.9-inch (1st and 2nd generation), iPad Pro 10.5-inch, iPad Pro 9.7-inch",
                brand:"Apple",
                modelName:"Apple Pencil",
                color:"white",
                images: [

                    { image: require('@/assets/pencil/Apple Pencil.png') },
                    { image: require('@/assets/pencil/pencil2.png') },
                    { image: require('@/assets/pencil/pencil3.png') },
                ]

            },


        ],
        status: '',
        token: localStorage.getItem('token') || '',
        user : {},
        cart:[]
    },
    getters:{
      allproducts :state => {
          return state.allproducts
      },
      cart:state=>{
          return state.cart
      },
      cartItemCount:state=>{
          return state.cart.length
      },
      cartTotalPrice:state=>{
          let total=0;
          state.cart.forEach(item=>{
              total += item.product.price * item.quantity
          })
          return total;
      },
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },






    actions:{
        login({commit}, user){
            console.log(user)
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:3000/login', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            console.log(user)
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://localhost:3000/register', data: user, method: 'POST'

                    })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },

        addProductToCart({commit},{product,quantity}){
            {commit('ADD_TO_CART',{product,quantity})}
            axios.post('http://localhost:3000/cart',{
                product_id :product.id,
                quantity
            })
        },


        getCartItems({commit}){
            axios.get('http://localhost:3000/cart')
                .then(resp=>{
                    commit('SET_CART',resp.data)
                })
        }
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
        ADD_TO_CART(state,{product,quantity}){
            let productInCart=state.cart.find(item=> item.product.id=== product.id);
            if(productInCart){
                productInCart.quantity += quantity
                return;
            }
            state.cart.push({product,quantity})
        },
        SET_CART(state,cartItems){
            state.cart=cartItems;
        }

    },

})



