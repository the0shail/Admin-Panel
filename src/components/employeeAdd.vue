<template>
    <article class="profile col-9">
        <section class="form-profile">
            <div class="my-profile">
                <h2>Добавить сотрудника</h2>
                <!-- {{ this.getEmployee() }} -->
                <form action="">
                    <fieldset class="profileName">
                        <label for="profileName">Имя</label>
                        <input type="text" id="profileName" v-model="this.name">
                        <!-- <div class="alert alert-danger" role="alert">
                            A simple danger alert—check it out!
                        </div> -->
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
                        <input type="email" id="profileEmail" v-model="this.email">

                    </fieldset>
                    <fieldset class="profilePhone">
                        <label for="profilePhone">Телефон</label>
                        <input type="number" id="profilePhone" placeholder="+7 (495) 387 37 15" v-model="this.phone">
                    </fieldset>
                    <fieldset class="profileNewPassword">
                        <label for="profileNewPassword">Пароль</label>
                        <input type="password" id="profileNewPassword">
                    </fieldset>
                    <fieldset class="profileRepeatNewPassword">
                        <label for="profileRepeatNewPassword">Повторить пароль</label>
                        <input type="password" id="profileRepeatNewPassword">
                    </fieldset>
                    <button type="submit" @click.prevent="userSaveNew()">Сохранить</button>

                </form>
            </div>
        </section>
    </article>
</template>

<script>

import ValidateField from '@/service/validate'
import { mapActions } from 'vuex'

export default {
    name: "employeeAdd",
    data() {
        return {
            name: "Муроджонaa",
            surname: "фывфывфыв",
            middleName: "Андреевичфывфыв",
            email: "tagaevaziz179@gmail.com",
            phone: "123123123123123",
            ban: false
        }
    },
    methods: {
        ...mapActions("storeUsers", ["saveNewUser"]),
        userSaveNew() {
            const result = new ValidateField(this.name, this.surname, this.middleName, this.email, this.phone, this.ban)
            if (!result.validate().includes('fail')) {
                let objUser = {
                    name: this.name,
                    surname: this.surname,
                    middleName: this.middleName,
                    email: this.email,
                    phone: this.phone,
                    ban: this.ban
                }

                this.$router.push('/employee')
                this.saveNewUser(objUser);
            } else alert('Неверный ввод данных!')
        }
    }
}
</script>
<style scoped>
.alert {
    margin-top: 10px;
    font-size: 10px;
    padding: 10px 10px;
}

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
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #1F1F1F;
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