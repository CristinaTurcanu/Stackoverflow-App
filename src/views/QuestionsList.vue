<template>
  <div>
    <div class="d-flex justify-space-between mb-3">
      <h1 class="headline">Questions</h1>
      <v-btn color="primary" @click="navigate">Ask a Question</v-btn>
    </div>
    <v-layout column wrap>
      <v-flex v-for="question in questions" :key="question.id">
        <v-card flat>
          <v-row>
            <v-col class="col-sm-12 col-md-3 col-lg-2">
              <QuestionStatistics :question="question" />
            </v-col>
            <v-col class="col-md-9 col-lg-10">
              <v-card flat>
                <v-card-title class="app-title">
                  <router-link
                    class="link"
                    :to="{ name: 'question', params: { id: question.id } }"
                  >
                    <span v-html="question.title"></span>
                  </router-link>
                </v-card-title>
                <v-card-text v-html="question.body"></v-card-text>
                <v-card-actions class="d-flex justify-space-between">
                  <div md6>
                    <v-btn
                      v-for="tag in question.tags"
                      :key="tag"
                      x-small
                      depressed
                      >{{ tag }}</v-btn
                    >
                  </div>
                  <div md6>
                    <UserInfo
                      :user="question.owner"
                      :date="question.creation_date"
                    />
                  </div>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
        <v-divider />
      </v-flex>
    </v-layout>
    <v-pagination
      v-model="page"
      :visible="limit"
      :length="20"
      @input="getQuestions"
    ></v-pagination>
  </div>
</template>
<script>
import UserInfo from "../components/UserInfo";
import QuestionStatistics from "../components/QuestionStatistics";
export default {
  components: { UserInfo, QuestionStatistics },
  filters: {
    truncate: function(value) {
      if (value.length > 210) {
        value = value.substring(0, 209) + "...";
      }
      return value;
    }
  },
  props: {
    questions: {
      type: Array,
      default: null
    },
    page: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    navigate() {
      this.$emit("navigate");
    },
    getQuestions() {
      this.$emit("get-questions");
    }
  }
};
</script>
