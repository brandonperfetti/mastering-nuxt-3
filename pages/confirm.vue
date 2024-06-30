<template>
  <div>Waiting for login...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { query } = useRoute();
const firstLesson = await useFirstLesson();

watch(
  user,
  () => {
    if (user.value) {
      const to =
        (query.redirectTo as string) ?? firstLesson.path;
      return navigateTo(to, {
        replace: true,
      });
    }
  },
  { immediate: true }
);
</script>
