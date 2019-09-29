<template>
  <div class="my-5 pa-5">
    <v-card max-width="700">
      <v-row class="pa-4">
        <v-col class="shrink">
          <v-list-item class="text-center">
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                user.display_name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img height="200" width="200" :src="user.profile_image"></v-img>
        </v-col>
        <v-col class="text-center">
          <v-container class="pa-0">
            <v-row>
              <v-col>
                <v-btn outlined color="success">
                  <span>
                    <v-icon>mdi-star</v-icon>
                  </span>
                  {{ user.reputation }}
                </v-btn>
              </v-col>
              <v-col>
                <v-btn outlined text color="yellow">{{
                  user.badge_counts.gold
                }}</v-btn>
              </v-col>
              <v-col>
                <v-btn outlined text>{{ user.badge_counts.silver }}</v-btn>
              </v-col>
              <v-col>
                <v-btn outlined text color="brown">{{
                  user.badge_counts.bronze
                }}</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-list disabled dense>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-email</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ user.website ? user.website : "-" }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{
                        user.location ? user.location : "-"
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Member since:
                        {{ user.creation_date | moment }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-clock</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Last access date:
                        {{ user.last_access_date | moment }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "UserDetails",
  filters: {
    moment: function(date) {
      return moment(date).format("MMM Do YYYY");
    }
  },
  props: {
    id: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters({
      getUserById: "users/getUserById"
    })
  },
  async created() {
    this.user = this.getUserById(this.id);
  }
};
</script>
