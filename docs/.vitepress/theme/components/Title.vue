<template>
  <div v-if="frontmatter.word_count">
    <h1 class="title">{{ pageData.title }}</h1>
    <div class="date">
      <div>🕒 lastUpdated: {{ date }}
      </div>
      <div>✍ word count {{ frontmatter.word_count }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { useData } from "vitepress";


const pageData = computed(() => useData().page.value);
const frontmatter = computed(() => useData().frontmatter.value)
const date = computed(() => new Date(frontmatter.value.updated_at).toLocaleString())
</script>

<style scoped>
.title {
  color: #37463c;
  font-weight: 600;
  font-size: 2.25em;
  margin-top: 0.3em;
  margin-bottom: 0.5em;
  line-height: 1.3;
}

.date {
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;
}
</style>

