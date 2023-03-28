<template>
    <main class="container-fluid">
        <div class="main row">
            <asideMenu />
            <terminalTable />
        </div>
    </main>
</template>
<script>
import terminalTable from '@/components/terminalTable.vue';
import asideMenu from '@/components/asideMenu.vue';

export default {
    name: "TerminalView",
    components: {
        terminalTable, asideMenu
    }
}
</script>
