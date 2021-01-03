<template>
  <div>
    <router-view></router-view>

  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "App",

    computed : {
      ...mapGetters("account", ["isLoggedIn"]),
    },
    methods: {
      logout: function () {
        this.$store.dispatch('account/logout')
                .then(() => {
                  this.$router.push('/login')
                })
      }
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function ( ) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch('account/logout')
          }
          throw err;
        });
      });
    }
  };
</script>