<template>
  <nav>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="d-none d-lg-block">
        <img class="logo" src="../assets/images/logo.png" />
      </v-toolbar-title>
      <v-chip-group multiple row>
        <v-chip
          v-for="chip in chips"
          :key="chip.text"
          color="warning"
          class="mx-3 d-none d-md-block"
          >{{ chip.text }}</v-chip
        >
      </v-chip-group>
      <b-form-input
        size="sm"
        class="col-md-3 d-none d-flex"
        placeholder="Search"
      ></b-form-input>
      <v-spacer />
      <div class="my-2">
        <v-btn text small color="primary">
Log in
</v-btn>
      </div>
      <div class="my-2">
        <router-link router :to="{ name: 'signup' }">
          <span>
            <v-btn small color="primary">Sign in</v-btn>
          </span>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <template v-for="(link, i) in links">
          <v-list-item :key="i" router :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { text: "Home", route: "/home" },
        { text: "Stack Overflow", route: "/questions" },
        { text: "Tags", route: "/tags" },
        { text: "Users", route: "/users" },
        { text: "Jobs", route: "/about" }
      ],
      chips: [
        { text: "Products" },
        { text: "Customers" },
        { text: "Use cases" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.logo {
  height: 60px;
}
</style>
