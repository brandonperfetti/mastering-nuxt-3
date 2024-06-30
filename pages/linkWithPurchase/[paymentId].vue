<script setup>
const user = useSupabaseUser();
const firstLesson = await useFirstLesson();

watchEffect(async () => {
  if (user.value) {
    const route = useRoute();
    await useFetch(
      `/api/user/linkWithPurchase/${route.params.paymentId}`,
      {
        headers: useRequestHeaders(['cookie']),
      }
    );

    await navigateTo(firstLesson.path, {
      replace: true,
    });
  }
});

const render = () => {};
</script>
