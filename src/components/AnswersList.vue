<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>{{ answers.length }} answers</v-card-title>
            <v-row>
              <v-col>
                <v-card v-for="answer in answers" :key="answer.id" flat>
                  <v-card-text>
                    <div>Answered {{ answer.creation_date | moment }}</div>
                    <div>
                      <router-link
                        :to="{
                          name: 'user',
                          params: { id: answer.owner.user_id }
                        }"
                      >
                        <v-chip pill>
                          <v-avatar left>
                            <v-img :src="answer.owner.profile_image"></v-img>
                          </v-avatar>
                          {{ answer.owner.reputation }}
                        </v-chip>
                      </router-link>
                    </div>

                    <div class="answer-body" v-html="answer.body"></div>
                  </v-card-text>
                  <v-divider></v-divider>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import moment from "moment";
export default {
  filters: {
    moment: function(date) {
      return moment(date).format("MMM Do YYYY");
    }
  },
  props: {
    answers: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.answer-body {
  color: #222;
}
</style>
