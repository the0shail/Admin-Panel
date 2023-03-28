<template>

    <article class="terminal col-9">
        <section>
            <div class="tableCaption">
                <h2>Терминалы</h2>
                <span>Список всех терминалов</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th data-table-class="table_id">Номер</th>
                        <th data-table-class="table_name">Название группы</th>
                        <th data-table-class="table_address">Адрес</th>
                        <th data-table-class="table_config">Конфигурация</th>
                        <th data-table-class="table_key">Ключ</th>
                        <th data-table-class="table_endKey">Окончание ключа</th>
                        <th data-table-class="table_status">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table_item" v-for="terminal in getTerminal()">
                        <td class="table_id">{{ terminal['terminalId'] }}</td>
                        <td class="table_name">{{ terminal['groupName'] }}</td>
                        <td class="table_address">
                            <p>{{ terminal['address']['street'] }}</p>
                            <span>{{ terminal['address']['country'] }}, {{ terminal['address']['city'] }}</span>
                        </td>
                        <td class="table_config">{{ terminal['config'] }}</td>
                        <td class="table_key">{{ terminal['terminalKey'] }}</td>
                        <td class="table_endKey">{{ terminal['date'] }}</td>
                        <td class="table_status">
                            <div class="form-check form-switch">
                                <input class="form-check-input" :checked="terminal['active']" type="checkbox" role="switch">
                                <label class="form-check-label" v-if="terminal['active']">Активирован</label>
                                <label class="form-check-label" v-else>Деактивирован</label>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </article>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: "terminalTable",
    methods: {
        ...mapGetters('storeTerminal', ['getTerminal']),
        checkedInputs() {
            let inputs = document.querySelectorAll(".form-check input");

            inputs.forEach(input => {
                input.addEventListener("click", () => {
                    let checked = input.checked;
                    checked == true ? input.nextElementSibling.textContent = "Активирован  " : input.nextElementSibling.textContent = "Деактивирован";
                })
            })
        }
    },
    mounted(){
        this.checkedInputs();
    }
}
</script>

<style scoped>
section {
    padding: 0 30px;
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
    margin-top: 2px;
}

.tableCaption {
    margin: 65px 0 35px 0;

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

.table_id {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #000000;
}

.table_name {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.04em;

    color: #000000;
}

.table_address p {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 0.01em;
    margin: 0;

    color: #000000;
}

.table_address span {
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    /* identical to box height */

    letter-spacing: 0.01em;

    color: #898D98;

}

.table_config {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #4F78E0;
}

.table_key {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #000000;
}

.table_endKey {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #000000;
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


tbody tr {
    border-bottom: 1px solid #B8BBC3;
}

td {
    padding-top: 7px;
    padding-bottom: 7px;
}


table tbody .table_status {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #000000;
}

table {
    width: 100%;
}
</style>