<template>
    <v-main class="gradient">
        <v-row>
            <v-col cols="12" class="mx-auto" lg="4" md="6" sm="8" sx="10">
                <v-card class="mx-auto my-12 col-10" >
                    <v-img :src="require(`@/assets/zhlogo.png`)" width="100" class="mx-auto"></v-img>
                    <v-card-title class="mx-auto justify-center">SIGN UP</v-card-title>
                    <v-divider></v-divider>


                    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">
                        <v-col cols="12" md="10" class="mx-auto">
                            <v-text-field v-model="name" :counter="10" :rules="nameRules" clearable color="purple lighten-1" label="Name" required></v-text-field>

                            <v-text-field v-model="email" :rules="emailRules" label="E-mail"  clearable color="purple lighten-1"  required></v-text-field>


                            <ValidationObserver ref="observer">
                                <ValidationProvider  vid="password" name="Password" >
                                    <div slot-scope="{ valid, errors }">
                                         <v-text-field
                                                  label="Password"
                                                  hint="At least 8 characters"
                                                  counter color="purple lighten-1"
                                                  v-model="password"
                                                  :state="errors[0] ? false : (valid ? true : null)"
                                                  name="input-10-1"
                                                  :type="show1 ? 'password' : 'text'"
                                                  @click:append="show1 = !show1"
                                                  :append-icon="!show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                  :rules="[rules.required, rules.min]"
                                         ></v-text-field>
                                        <span id="inputLiveFeedback">
                                          {{ errors[0] }}
                                        </span>
                                    </div>
                            </ValidationProvider>
                                <ValidationProvider rules="confirmed:password" name="Password confirmation">
                                     <div slot-scope="{ valid, errors }" label="Confirm Password:" label-for="exampleInput1">
                                         <v-text-field label="Password, Again"
                                                       hint="At least 8 characters"
                                                       counter
                                                       color="purple lighten-1"
                                                       v-model="confirmation"
                                                       :state="errors[0] ? false : (valid ? true : null)"
                                                       name="input-10-1"
                                                       :type="show1 ? 'password' : 'text'"
                                                       @click:append="show1 = !show1"
                                                       :append-icon="!show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                       :rules="[rules.required, rules.min]"
                                         ></v-text-field>
                                         <span id="inputLiveFeedback">
                                              {{ errors[0] }}
                                         </span>
                                     </div>
                                </ValidationProvider>
                            </ValidationObserver>


                            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" color="purple lighten-1" required></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="6" class="mx-auto">
                            <v-btn class=" btnstyle" type="submit"  width="100%" :disabled="!valid" @click="validate">
                                submit
                            </v-btn>
                        </v-col>
                    </v-form>

                    <v-card-actions>

                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-main>


</template>


<script>
    import { ValidationObserver, ValidationProvider } from "vee-validate";
    export default {
        name:'register',
        components: {
            ValidationProvider,
            ValidationObserver
        },
        data(){
            return{
                show1: true,
                valid: true,
                password: "",
                confirmation: "",
                email: '',
                checkbox:false,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => (`The email and password you entered don't match`),
                },
            }
        },
        methods: {
            register: function () {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    chechbox: this.chechbox
                }

                this.$store.dispatch('register', data)
                    .then(() => this.$router.push('/home'))
                    .catch(err => console.log(err))
            },
            validate () {
                this.$refs.form.validate()
            }
        }



    }
</script>
<style>
    .btnstyle{
        background: #6A2C70!important;
        color:#fefdfe!important;
    }
    .v-application .error--text {
        color: #b93232 !important;
        caret-color: #ff5252 !important;
    }

    .v-icon.v-icon {
        font-size: 18px!important;
    }
    .v-icon__svg {
        height: 18px!important;
        width: 18px!important;
        fill: currentColor;
    }


    .gradient{
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        /*background: -webkit-linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5), rgba(117, 19, 93, 0.73));*/
        /*background: -webkit-linear-gradient(left, rgb(95 217 221 / 72%),rgb(0 168 255 / 38%), rgba(185,0,255,0.5), rgb(117 19 93 / 78%));*/
        background: -webkit-linear-gradient(left, rgba(0,168,255,0.5), rgb(185 0 255 / 33%), rgb(239 57 133 / 56%));
        /*background: -webkit-linear-gradient(left, rgb(239 57 133 / 56%), rgb(255 0 247 / 22%), rgb(117 19 93 / 78%));*/
    }
    .v-messages__message ,#inputLiveFeedback{
        font-size: 12px;
        line-height: 12px;
        word-break: break-word;
        overflow-wrap: break-word;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
    }
    .v-application .error--text ,#inputLiveFeedback{
        color: #ff5252 !important;
        caret-color: #ff5252 !important;
    }
</style>