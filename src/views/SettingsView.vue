<template>
    <main class="container-fluid">
        <div class="main row">
            <asideMenu />
            <contentSettings />
        </div>
    </main>
</template>
<script>
import asideMenu from '@/components/asideMenu.vue';
import contentSettings from '@/components/contentSettings.vue';

export default {
    name: "SettingsView",
    components: {
        asideMenu, contentSettings
    }
}
</script>
