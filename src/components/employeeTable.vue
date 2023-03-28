<template>

    <article class="employee col-9">
        <section>
            <div class="tableCaption">
                <div>
                    <h2>Сотрудники</h2>
                    <span>Управление сотрудниками и администраторами портала</span>
                </div>

                <router-link to="/employee/add/">
                    <button type="button">Добавить</button>
                </router-link>

            </div>
            <table>
                <thead>
                    <tr>
                        <th data-table-class="table_id">Фамилия</th>
                        <th data-table-class="table_name">Имя</th>
                        <th data-table-class="table_address">Отчество</th>
                        <th data-table-class="table_config">Email</th>
                        <th data-table-class="table_key">Телефон</th>
                        <th data-table-class="table_endKey">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table_item" v-for="(item, index) in getEmployee()">
                        <td class="tbold">{{ item["surname"] }}</td>
                        <td class="tbold">{{ item["name"] }}</td>
                        <td class="tbold">{{ item["middleName"] }}</td>
                        <td class="tregular">{{ item["email"] }}</td>
                        <td class="tregular">{{ item["phone"] }}</td>
                        <td class="tflex">
                            <!-- FIXME v-if="item['ban'] == false" -->
                            <div class="form-check form-switch">
                                <input class="form-check-input" :checked="item['ban']" type="checkbox" role="switch">

                                <label class="form-check-label" v-if="!item['ban']">Разблокирован</label>
                                <label class="form-check-label" v-else>Заблокирован</label>
                            </div>
                            <div class="changes">
                                <font-awesome-icon @click="deleteEmp(index)" class="icon delete" icon="fa-solid fa-trash-can" />
                                <router-link :to="{name: 'employeeEdit', params: {id: index}}" class="link">

                                    <font-awesome-icon class="icon edit" icon="fa-solid fa-user-pen" />
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </article>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "employeeTable",
    methods: {
        ...mapGetters('storeUsers', ['getEmployee']),
        ...mapActions('storeUsers', ['deleteEmployee']),
        checkedInputs() {
            let inputs = document.querySelectorAll(".form-check input");

            inputs.forEach(input => {
                input.addEventListener("click", () => {
                    let checked = input.checked;
                    checked == true ? input.nextElementSibling.textContent = "Заблокирован" : input.nextElementSibling.textContent = "Разблокирован";
                })
            })
        },

        deleteEmp(id) {
            this.deleteEmployee(id)
        }
    },
    mounted() {
        this.checkedInputs();
    }


}
</script>

<style scoped>
section {
    padding: 0 30px;
}

tbody tr {
    border-bottom: 1px solid #B8BBC3;
}

td {
    padding-top: 7px;
    padding-bottom: 7px;
}


table {
    width: 100%;
}

th,
td {
    padding: 16px 15px;
}


table thead {
    background: #B8BBC3;
}

table thead th {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;

    color: #FFFFFF;
}

.tableCaption {
    margin: 65px 0 35px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tableCaption h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    /* identical to box height */
    color: #000000;
    margin: 0;

}



.tableCaption span {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #898D98;
}


.tbold {
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.04em;

    color: #000000;
}


.tregular {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #000000;
}

.tflex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-check {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #000000;
}

.form-check label {
    margin-left: 5px;
    margin-top: 5px;
}

.icon {
    width: 14px;
    height: 14px;
    padding: 0 3px;
}

.delete {
    color: #F62D52;
}

.edit {
    color: #4F78E0;
}

button {
    background: #4F78E0;
    border-radius: 2px;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;

    color: #FFFFFF;

    padding: 14px 39px;
}
</style>