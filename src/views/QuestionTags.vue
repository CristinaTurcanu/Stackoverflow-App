<template>
  <div>
    <v-card class="mx-auto" flat>
      <v-card-title>Tags</v-card-title>
      <v-card-text>
        <v-list-item v-for="tag in tags" :key="tag.name">
          <v-list-item-content>
            <v-list-item-title>
              <v-btn small>{{ tag.name }}</v-btn>
              x {{ tag.count }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: null
    }
  }
};
</script>
