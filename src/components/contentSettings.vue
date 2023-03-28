<template>
    <article class="settings col-9">
        <section class="settings-key">
            <div class="switch-password">
                <h2>Настройки</h2>
                <form action="">
                    <fieldset class="keyValidActivation">
                        <label for="keyValidActivation">Срок истечения ключа активации</label>
                        <input type="number" id="keyValidActivation" value="90">
                    </fieldset>
                    <button type="submit">Сохранить</button>
                </form>
            </div>
        </section>
    </article>
</template>
<style scoped>
.settings-key {
    width: 300px;
    padding: 0 30px;
}

h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
    margin-top: 58px;
}

fieldset {
    display: flex;
    flex-direction: column;
}

fieldset label {
    margin-bottom: 9px;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #898D98;

    margin-top: 20px;
}

fieldset input {
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
    margin-top: 30px;
    margin-bottom: 40px;
}
</style>