<template>
  <main class="container-fluid">
    <div class="main row">
      <asideMenu />
      <contentMain />
    </div>
  </main>
</template>

<script>
import asideMenu from '@/components/asideMenu.vue';
import contentMain from '@/components/contentMain.vue';

export default {
  name: 'HomeView',
  components: {
    asideMenu, contentMain
  }
}
</script>

<style>
body {
  background-color: #FCFDFF;
}

.main{
  justify-content: space-between;
}
</style>
