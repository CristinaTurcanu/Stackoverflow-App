<template>
  <div class="pa-5 my-5">
    <h1 class="title">{{ question.title }}</h1>
    <v-row>
      <v-col class="col-sm-12 col-md-9">
        <v-card flat>
          <v-row>
            <v-col cols="10">
              <v-card flat>
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
          <v-divider></v-divider>
          <v-row>
            <AnswersList :answers="answers" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserInfo from "@/components/UserInfo";
import AnswersList from "@/components/AnswersList";
export default {
  name: "QuestionDetails",
  components: { UserInfo, AnswersList },
  props: {
    id: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      question: {},
      answers: {}
    };
  },
  computed: {
    ...mapGetters({
      getQuestionById: "questions/getQuestionById",
      getAnswersByQuestionId: "answers/getAnswersByQuestionId"
    })
  },
  async created() {
    this.question = this.getQuestionById(this.id);
    this.answers = this.getAnswersByQuestionId(this.id);
  }
};
</script>
