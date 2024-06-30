<template>
  <Section class="space-y-12 flex flex-col items-center">
    <h1
      class="text-7xl font-black text-blue-500 m-0 p-0 text-center"
    >
      Log in to access course materials
    </h1>
    <button
      class="bg-blue-400 hover:bg-blue-500 transition px-8 py-4 w-80 text-xl font-bold rounded-lg"
      @click="login"
    >
      Log in with Github
    </button>
    <button
      class="bg-green-400 hover:bg-green-500 transition px-8 py-4 w-80 text-xl font-bold rounded-lg"
      @click="navHome"
    >
      Go Home
    </button>
  </Section>
</template>

<script setup lang="ts">
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const navHome = async () => {
  await navigateTo('/');
};

const login = async () => {
  const queryParams =
    query.redirectTo !== undefined
      ? `?redirectTo=${query.redirectTo}`
      : '';
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  });

  if (error) {
    console.error(error);
  }
};
</script>
