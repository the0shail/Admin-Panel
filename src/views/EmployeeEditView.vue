<template>
    <main class="container-fluid">
        <div class="main row">
            <asideMenu />
            <EmployeeEdit />
        </div>
    </main>
</template>

<script>
import asideMenu from '@/components/asideMenu.vue';
import EmployeeEdit from '@/components/employeeEdit.vue';

export default {
    name: "Employee",
    components: {
        asideMenu,
        EmployeeEdit
    }
}
</script>
