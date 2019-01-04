<template>
<v-container >
    <v-layout row >
        <v-flex xs12 sm6 offset-sm3>
            
        </v-flex>
    </v-layout>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="login">
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="login">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field name="email" label="Mail" id="email" type="email" v-model="email" ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field name="password" label="Password" id="password" type="password" v-model="password" ></v-text-field>
                                </v-flex>
                            </v-layout>
                            
                            <v-layout row>
                                <v-flex xs12>
                                    <div class="text-xs-center">
                                    <p v-if="feedback" class="red--text">{{ feedback }}</p>
                                    <v-btn type="submit" large>Login</v-btn>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>

        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
export default {
    name: 'Login',
    data () {
      return {
        email: null,
        password: null,
      }  
    },
    computed: {
        feedback (){
            return this.$store.getters.feedback
        }
    },
    methods: {
      login(){
          this.$store.dispatch('Userlogin', {email: this.email, password: this.password})
      }   
      
    },
    created() {
        this.$store.state.feedback = null
    }
}
</script>

<style>
.login{
    margin-top: 60px; 
}

</style>

