<template>
  <div class="pa-5 my-5">
    <h1 class="headline">Ask a question</h1>
    <ValidationObserver v-slot="{ passes }">
      <b-form class="col-md-6" @submit.prevent="passes(onSubmit)" @reset.prevent="onReset">
        <ValidationProvider v-slot="{ valid, errors }" name="title" rules="required|min:10" persist>
          <b-form-group label="Question title:" label-for="title">
            <b-form-input
              id="title"
              v-model="form.title"
              type="text"
              :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider v-slot="{ valid, errors }" name="body" rules="required" persist>
          <b-form-group label="Question body:" label-for="body">
            <b-form-textarea
              id="body"
              v-model="form.body"
              rows="4"
              max-rows="20"
              :state="errors[0] ? false : (valid ? true : null)"
            ></b-form-textarea>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider>
          <b-form-group label="Question tags:" label-for="tag">
            <b-input-group>
              <b-form-input id="tag" v-model="questionTag"></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-success" @click="addTag(questionTag)">Add tag</b-button>
              </b-input-group-append>
            </b-input-group>
            <v-chip-group multiple row>
              <v-chip
                v-for="(tag, i) in form.tags"
                :key="i"
                close
                @click:close="deleteTag(i)"
              >{{ tag }}</v-chip>
            </v-chip-group>
          </b-form-group>
        </ValidationProvider>

        <b-button type="submit" class="mr-3" variant="outline-success">Submit</b-button>
        <b-button type="reset" variant="outline-primary">Reset</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapActions } from "vuex";

export default {
  name: "QuestionForm",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      questionTag: "",
      form: {
        title: "",
        body: "",
        tags: []
      }
    };
  },
  methods: {
    ...mapActions({
      addQuestionAction: "questions/addQuestionAction"
    }),
    addTag(questionTag) {
      this.form.tags.push(questionTag);
      this.questionTag = "";
    },
    deleteTag(index) {
      this.form.tags.splice(index, 1);
    },
    async onSubmit() {
      await this.addQuestionAction(this.form);
      this.$router.push({ name: "questions" });
    },
    onReset() {
      this.form.title = "";
      this.form.body = "";
      this.form.tags = [];
      this.questionTag = "";
    }
  }
};
</script>
<style lang="scss"></style>
