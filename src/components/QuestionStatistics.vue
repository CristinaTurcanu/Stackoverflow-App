<template>
  <div>
    <v-card flat class="text-center">
      <v-card-text>
        <div class="grey--text">
          <div class="title">{{ question.score }}</div>
          <div>votes</div>
        </div>

        <div class="green--text">
          <div class="title">{{ question.answer_count }}</div>
          <div>answers</div>
        </div>

        <div class="caption orange--text my-3">
          {{ question.view_count }} views
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: null
    }
  }
};
</script>
<style lang="scss"></style>
