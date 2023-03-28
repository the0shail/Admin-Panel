<template>
    <article class="content col-9">
        <section class="event-content">
            <h2 class="event-title">Общая информация</h2>
            <div class="event-list">
                <div class="event-item">
                    <font-awesome-icon icon="fa-solid fa-network-wired" />
                    <p>Всего групп <br>терминалов</p>
                    <b>5863</b>
                </div>
                <div class="event-item">
                    <font-awesome-icon icon="fa-solid fa-window-restore" />
                    <p>Всего <br>терминалов</p>
                    <b>8562</b>
                </div>
                <div class="event-item">
                    <font-awesome-icon icon="fa-solid fa-tower-broadcast" />
                    <p>Количество <br>терминалов онлайн</p>
                    <b><span></span> 2174</b>
                </div>
                <div class="event-item">
                    <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                    <p>Просроченна<br>активация</p>
                    <b>0</b>
                </div>
                <div class="event-item">
                    <font-awesome-icon icon="fa-solid fa-bolt" />
                    <p>В ожидании<br>активации</p>
                    <b>28</b>
                </div>
            </div>
        </section>
        <section class="request-content">
            <div class="request-title">
                <h2>Запросы подключения</h2>
                <button class="request-button">Посмотреть все</button>
            </div>
            <p class="request-date">Сегодня</p>
            <div class="request-list">
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>

            </div>
            <p class="request-date">Сегодня</p>
            <div class="request-list">
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>
                <div class="request-item">
                    <div class="req-brand">
                        <font-awesome-icon icon="fa-solid fa-link" class="req-link" />
                        <div class="req-text">
                            <h4>АКХ №57153</h4>
                            <p>Москва, Бауманская 47</p>
                        </div>
                    </div>
                    <div class="req-contact">
                        <font-awesome-icon icon="fa-solid fa-gear" class="req-gear" />
                        <button class="req-button">Привязать</button>
                    </div>
                </div>

            </div>
        </section>
    </article>
</template>


<style scoped>
.content {
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
    /* flex-wrap: wrap; */
    align-items: flex-start;

}

.event-title {
    padding: 0 30px;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
    margin-bottom: 35px;
}

.event-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    padding: 0 30px;
}


.event-content {
    border-right: 1px solid #e7eaf0;
    height: 80vh;
    width: 60%;
}

.event-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    text-align: center;

    min-width: 140px;
    min-height: 140px;

    /* card-shadow */
    /*  */
    box-shadow: 0px 0px 10px #EBECED;
    border-radius: 5px;
    padding: 1em 0;

    /* box-sizing: content-box; */



}

.event-item p {
    color: #62646A;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 15px;
    margin-bottom: 12px;
    margin-top: 12px;

}

.event-item b {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 15px;
    color: black;
}

.event-item svg {
    height: 40px;
    width: 40px;
    color: #4F78E0;
}





.request-content {
    padding: 0px 30px;
    width: 40%;
}



.request-content .req-contact {
    display: flex;
    align-items: center;
}

.request-content .req-contact .req-button {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;

    color: #4F78E0;
    background-color: transparent;
    border: 1px solid #4F78E0;
    padding: 8px 14px;
    transition: all 300ms;
}

.request-content .req-contact .req-button:hover {
    color: #fff;
    background-color: #4F78E0;
    border: 1px solid #4F78E0;
    padding: 8px 14px;
}


.request-content .req-contact svg {
    color: #4F78E0;
    height: 17px;
    width: 17px;
    margin-right: 13px;
}

.request-content .request-list .request-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7eaf0;
    padding: 17px 0;
}

.request-content .req-brand {
    display: flex;
    align-items: center;
}

.request-content .req-brand svg {
    color: #F62D52;
    height: 19px;
    width: 19px;
    margin-right: 6px;
}

.request-content .req-text h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
    margin: 0;
}

.request-content .req-text p {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.05em;

    color: #A4ACBF;
    margin: 0;
}

.request-content .request-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.request-content .request-title h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
}

.request-content .request-title .request-button {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;

    color: #FFFFFF;

    background: #4F78E0;
    box-shadow: 0px 1px 4px rgba(79, 120, 224, 0.5);
    border-radius: 2px;
    padding: 10px 15px;
    border: transparent 1px solid;
}

.request-content .request-date {
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.02em;
    margin: 30px 0 0 0;
    color: #898D98;
}


@media screen and (max-width: 1200px) {
    .event-content {
        width: 50%;
    }

    .request-content {
        width: 50%;
    }
}

@media screen and (max-width: 998px) {
    .content {
        flex-wrap: wrap;
    }
    .event-content {
        width: 100%;
    }

    .request-content {
        width: 100%;
    }
}

</style>