<template>
    <article class="profile col-9">
        <section class="form-profile">
            <div class="my-profile">
                <h2>Мой профиль</h2>
                <form action="">
                    <fieldset class="profileName">
                        <label for="profileName">Имя</label>
                        <input type="text" id="profileName" value="Анатолий">
                    </fieldset>
                    <fieldset class="profileSurname">
                        <label for="profileSurname">Фамилия</label>
                        <input type="text" id="profileSurname" value="Карпенко">
                    </fieldset>
                    <fieldset class="profileFatherName">
                        <label for="profileFatherName">Отчество</label>
                        <input type="text" id="profileFatherName" value="Петрович">
                    </fieldset>
                    <fieldset class="profileEmail">
                        <label for="profileEmail">Email</label>
                        <input type="text" id="profileEmail">
                    </fieldset>
                    <fieldset class="profileFatherName">
                        <label for="profileFatherName">Телефон</label>
                        <input type="text" id="profileFatherName" placeholder="+7 (495) 387 37 15">
                    </fieldset>
                    <button type="submit">Сохранить</button>

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