<template>
  <div>
    <v-card flat>
      <v-row>
        <v-col cols="2">
          <QuestionStatistics :question="question" />
        </v-col>
        <v-col cols="10">
          <v-card flat>
            <v-card-title class="app-title">
              {{ question.title }}
            </v-card-title>
            <v-card-text>{{ question.body }}</v-card-text>
            <v-card-actions class="d-flex justify-space-between">
              <div md6>
                <v-btn
                  v-for="tag in question.tags"
                  :key="tag"
                  x-small
                  depressed
                >
                  {{ tag }}
                </v-btn>
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
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import QuestionStatistics from "./QuestionStatistics";
export default {
  components: { UserInfo, QuestionStatistics },
  props: {
    question: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>
