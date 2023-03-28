<template>
    <main class="container-fluid">
        <div class="main row">
            <asideMenu />
            <EmployeeTable />
        </div>
    </main>
</template>

<script>
import asideMenu from '@/components/asideMenu.vue';
import EmployeeTable from '@/components/employeeTable.vue';

export default {
    name: "Employee",
    components: {
        asideMenu,
        EmployeeTable
    }
}
</script>
