<template>
  <div>
    <div
      v-if="user"
      class="rounded p-3 flex items-center space-x-3 bg-white"
    >
      <img
        class="rounded-full w-12 h-12 border-2 border-blue-400"
        :src="profile"
      />
      <div class="text-right">
        <div class="font-medium">{{ name }}</div>
        <button
          class="text-sm underline pr-2 text-slate-500"
          @click="navHome"
        >
          Home
        </button>
        <button
          class="text-sm underline text-slate-500"
          @click="logout"
        >
          Log out
        </button>
      </div>
    </div>
    <div
      v-if="!user"
      class="rounded p-3 flex items-center space-x-3 bg-white"
    >
      <div class="text-right">
        <button
          class="text-sm underline text-slate-500"
          @click="navHome"
        >
          Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const navHome = async () => {
  await navigateTo('/');
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo('/');
};

const name = computed(
  () => user.value?.user_metadata.full_name
);
const profile = computed(
  () => user.value?.user_metadata.avatar_url
);
</script>
