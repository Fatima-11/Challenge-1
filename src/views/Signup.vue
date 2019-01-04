<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="signup">
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="signup"> 
                                <v-layout row>
                                    <v-flex>
                                        <v-text-field name="email" label="Email" id="email" type="email"  v-model="email"></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex>
                                        <v-text-field name="password" label="Password" id="password" type="password" v-model="password" ></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                <v-flex xs12>
                                    <v-text-field name="confirmpassword" label="Confirm Password" id="confirmpassword" type="password" v-model="confirmpassword"></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs12>
                                    <div class="text-xs-center">
                                    <p v-if="feedback" class="red--text">{{ feedback }}</p>
                                    <v-btn type="submit" large class="text-xs-center">Sign Up</v-btn>
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
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      confirmpassword: null,
      
      user: null
    }  
  },
  
  computed: {
        feedback (){
            return this.$store.getters.feedback
        }
  },
  methods: {
      
      signup() {
          this.$store.dispatch('Usersignup', {email: this.email, password: this.password, confirmpassword: this.confirmpassword})
      }
  },
  created() {
        this.$store.state.feedback = null
    }  
}
</script>

<style>
.signup{
    margin-top: 60px; 
}

</style>
