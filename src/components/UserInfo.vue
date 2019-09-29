<template>
  <div>
    <div class="caption">asked {{ date | moment }}</div>
    <v-list-item>
      <v-list-item-avatar size="40" tile color="grey">
        <v-img :src="user.profile_image" />
      </v-list-item-avatar>
      <v-list-item-content class="align-self-start">
        <v-list-item-title
          class="app-title"
          v-html="user.display_name"
        ></v-list-item-title>
        <v-list-item-subtitle>
          <v-row>
            <v-col md4>{{ user.reputation }}</v-col>
          </v-row>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    moment: function(date) {
      return moment(date).format("MMM Do YYYY, h:mm a");
    }
  },
  props: {
    user: {
      type: Object,
      default: null
    },
    date: {
      type: Number,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.badge::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 7.5px;
  background-color: #ddd;
  margin: 4px;
}
</style>
