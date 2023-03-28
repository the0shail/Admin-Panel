<template>
  <main class="container-fluid">
    <div class="main row">
      <asideMenu />
      <contentProfile />

    </div>
  </main>
</template>

<script>

import asideMenu from '@/components/asideMenu.vue';
import contentProfile from '@/components/contentProfile.vue';




export default {
  name: "ProfileView",
  components: {
    asideMenu,
    contentProfile,
  }
}

</script>
