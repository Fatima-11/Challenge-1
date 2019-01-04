v-<template>
    <v-app>
        <v-navigation-drawer temporary fixed app v-model="sideNav" class="hidden-sm-and-up">
            <v-list>
                <v-list-tile :to="{name: 'Signup'}" v-if="!user">
                    <v-list-tile-action>
                        <v-icon>face</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Sign Up</v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'Login'}" v-if="!user">
                    <v-list-tile-action>
                        <v-icon>lock_open</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Login</v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-if="user" @click="onlogout">
                    <v-list-tile-action>
                        <v-icon>input</v-icon>
                    </v-list-tile-action >
                    <v-list-tile-content >Log Out</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar dark class="blue-grey darken-1">
            <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>Phood Challenge</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
            
            <v-btn flat :to="{name: 'Signup'}" v-if="!user">
                <v-icon left>face</v-icon>
                Sign Up</v-btn>
            
            <v-btn flat :to="{name: 'Login'}" v-if="!user">
                <v-icon left>lock_open</v-icon>
                Login</v-btn>
                <v-btn flat  v-if="user" @click="onlogout">
                <v-icon left>input</v-icon>
                Log Out</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <main>
            <router-view></router-view>
        </main>
    </v-app>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      sideNav: false
    }  
  },
  methods: {
      onlogout() {
          this.$store.dispatch('logout')
          this.$router.push({name: 'Login'})
      }
      
  },
  computed: {
      user () {
          return this.$store.getters.isauthenticated
      }
  }

}
</script>
