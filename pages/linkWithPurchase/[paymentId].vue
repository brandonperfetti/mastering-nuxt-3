<script setup>
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    const route = useRoute();
    await useFetch(
      `/api/user/linkWithPurchase/${route.params.paymentId}`,
      {
        headers: useRequestHeaders(['cookie']),
      }
    );

    await navigateTo('/landing', {
      replace: true,
    });
  }
});

const render = () => {};
</script>