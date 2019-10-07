<template>
  <div class="pa-5 my-5">
    <h1 class="headline">
Users
</h1>
    <v-text-field
      v-model="search"
      solo
      hide-details
      label="Filter by user"
      prepend-inner-icon="mdi-magnify"
    />
    <v-layout row wrap>
      <v-flex v-for="user in filteredUsers" :key="user.id" xs6 sm4 md3>
        <v-card class="ma-2" outlined>
          <v-list-item>
            <v-list-item-avatar tile size="60">
              <img :src="user.profile_image" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="app-title mb-1">
                <router-link class="link" :to="{ name: 'user', params: { id: user.id } }">
                  <span v-html="user.display_name"></span>
                </router-link>
              </v-list-item-title>
              <v-list-item-subtitle v-if="user.location" v-html="user.location"></v-list-item-subtitle>
              <v-list-item-subtitle v-else>
No location
</v-list-item-subtitle>
              <div class="mb-2">
{{ user.reputation }}
</div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Users",
  data () {
    return {
      search: ""
    };
  },
  computed: {
    ...mapGetters({
      users: "users/getUsers"
    }),
    filteredUsers () {
      return this.users.filter(user => {
        return (
          user.display_name.toLowerCase().indexOf(this.search.toLowerCase()) >
          -1
        );
      });
    }
  },
  async created () {
    await this.getUsersAction();
  },
  methods: {
    ...mapActions({
      getUsersAction: "users/getUsersAction"
    })
  }
};
</script>
