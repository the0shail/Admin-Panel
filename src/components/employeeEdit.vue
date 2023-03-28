<template>
    <article class="profile col-9">
        <!-- {{ getEmployee()[$route.params.id] }} -->
        <section class="form-profile">
            <div class="my-profile">
                <h2>Редактировать данные</h2>
                <form action="">
                    <fieldset class="profileName">
                        <label for="profileName">Имя</label>
                        <input type="text" id="profileName" v-model="this.name">
                    </fieldset>
                    <fieldset class="profileSurname">
                        <label for="profileSurname">Фамилия</label>
                        <input type="text" id="profileSurname" v-model="this.surname">
                    </fieldset>
                    <fieldset class="profileFatherName">
                        <label for="profileFatherName">Отчество</label>
                        <input type="text" id="profileFatherName" v-model="this.middleName">
                    </fieldset>
                    <fieldset class="profileEmail">
                        <label for="profileEmail">Email</label>
                        <input type="text" id="profileEmail" v-model="this.email">
                    </fieldset>
                    <fieldset class="profileFatherName">
                        <label for="profileFatherName">Телефон</label>
                        <input type="text" id="profileFatherName" v-model="this.phone">
                    </fieldset>
                    <button type="submit" @click.prevent="employeeEdit()">Сохранить</button>
                </form>
            </div>
            <div class="switch-password">
                <h2>Сменить пароль</h2>
                <form action="">
                    <fieldset class="profileNewPassword">
                        <label for="profileNewPassword">Новый пароль</label>
                        <input type="text" id="profileNewPassword">
                    </fieldset>
                    <fieldset class="profileRepeatNewPassword">
                        <label for="profileRepeatNewPassword">Повторить новый пароль</label>
                        <input type="text" id="profileRepeatNewPassword">
                    </fieldset>
                    <button type="submit">Изменить</button>
                </form>
            </div>
        </section>
    </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ValidateField from '@/service/validate';

export default {

    name: "employeeEdit",
    data() {
        return {
            name: this.info("name"),
            surname: this.info("surname"),
            middleName: this.info("middleName"),
            email: this.info("email"),
            phone: this.info("phone"),
        }
    },

    methods: {
        ...mapActions("storeUsers", ["vuexEmployeeEdit"]),
        ...mapGetters("storeUsers", ["getEmployee"]),

        info(item) {
            return this.getEmployee()[this.$route.params.id][item];
        },
        employeeEdit() {
            const result = new ValidateField(this.name, this.surname, this.middleName, this.email, this.phone, this.ban)
            let userId = this.$route.params.id;
            if (!result.validate().includes('fail')) {
                let dataUser = {
                    id: userId,
                    name: this.name,
                    surname: this.surname,
                    middleName: this.middleName,
                    email: this.email,
                    phone: this.phone,
                    ban: this.ban
                }

                this.$router.push('/employee')
                this.vuexEmployeeEdit(dataUser);
            } else alert('Неверный ввод данных!')
            
        }
    }
}
</script>

<style scoped>
.profile .form-profile {
    width: 300px;
    padding: 0 30px;
}

.profile .form-profile .my-profile h2,
.profile .form-profile .switch-password h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
}

.profile .form-profile .my-profile h2 {
    margin-top: 58px;
}

.profile .form-profile fieldset {
    display: flex;
    flex-direction: column;
}

.profile .form-profile fieldset label {
    margin-bottom: 9px;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #898D98;

    margin-top: 20px;
}

.profile .form-profile fieldset input {
    background: #FFFFFF;
    opacity: 0.8;
    border: 1px solid #D0D3DB;
    border-radius: 2px;
    padding: 14px 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;

    color: #000;
}

.profile .form-profile button {
    background: #4F78E0;
    border-radius: 2px;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;

    color: #FFFFFF;

    padding: 14px 39px;
    margin-top: 30px;
    margin-bottom: 40px;
}
</style>