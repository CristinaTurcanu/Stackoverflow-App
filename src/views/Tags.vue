<template>
  <div class="pa-5 my-5">
    <QuestionTags :tags="tags" />
  </div>
</template>

<script>
import QuestionTags from "./QuestionTags";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Tags",
  components: { QuestionTags },
  data () {
    return {};
  },
  computed: {
    ...mapGetters({
      tags: "tags/getTags"
    })
  },
  async created () {
    await this.getTagsAction();
  },
  methods: {
    ...mapActions({
      getTagsAction: "tags/getTagsAction"
    })
  }
};
</script>
