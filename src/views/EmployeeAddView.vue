<template>
  <main class="container-fluid">
    <div class="main row">
      <asideMenu />
      <employeeAdd />

    </div>
  </main>
</template>
  
<script>

import asideMenu from '@/components/asideMenu.vue';
import employeeAdd from '@/components/employeeAdd.vue';

export default {
  name: "ProfileView",
  components: {
    asideMenu,
    employeeAdd,
  }
}

</script>
  