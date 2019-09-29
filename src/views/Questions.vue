<template>
  <div class="pa-5 my-5">
    <v-row>
      <v-col class="col-sm-12 col-md-9">
        <QuestionsList
          :questions="questions"
          :page="page"
          :limit="limit"
          @navigate="goToQuestionForm"
          @get-questions="getQuestions"
        />
      </v-col>
      <v-col class="col-md-3">
        <QuestionTags :tags="tags" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import QuestionTags from "./QuestionTags";
import QuestionsList from "./QuestionsList";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { QuestionsList, QuestionTags },
  data() {
    return {
      page: 1,
      limit: 7
    };
  },
  computed: {
    ...mapGetters({
      questions: "questions/getQuestions",
      tags: "tags/getTags",
      answers: "answers/getAnswersByQuestionId"
    })
  },
  async created() {
    await this.getQuestionsAction({ _limit: this.limit, _page: this.page });
    await this.getTagsAction({ _limit: this.limit });
    await this.getAnswersAction();
  },
  methods: {
    ...mapActions({
      getQuestionsAction: "questions/getQuestionsAction",
      getTagsAction: "tags/getTagsAction",
      getAnswersAction: "answers/getAnswersAction"
    }),
    async getQuestions() {
      await this.getQuestionsAction({ _limit: this.limit, _page: this.page });
    },
    goToQuestionForm() {
      this.$router.push({ name: "questionForm" });
    }
  }
};
</script>
