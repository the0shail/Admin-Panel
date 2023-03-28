<template>
    <aside class="left-menu col-3">
        <div class="content">
            <div class="title">
                <img src="@/assets/brand.svg" alt="logo">
            </div>
            <ul class="list">
                <li data-href="">
                    <font-awesome-icon icon="fa-solid fa-house" class="icon" />
                    <router-link to="/" class="link">Главная</router-link>
                </li>
                <li data-href="profile">
                    <font-awesome-icon icon="fa-solid fa-user" class="icon" />
                    <router-link to="/profile" class="link">Профиль</router-link>
                </li>
                <li data-href="employee">
                    <font-awesome-icon icon="fa-solid fa-user-tie" class="icon" />
                    <router-link to="/employee" class="link">Сотрудники</router-link>
                </li>
                <li data-href="terminal">
                    <font-awesome-icon icon="fa-solid fa-calendar-check" class="icon" />
                    <router-link to="/terminal" class="link">Терминалы</router-link>
                </li>
                <li data-href="settings">
                    <font-awesome-icon icon="fa-solid fa-gears" class="icon" />
                    <router-link to="/settings" class="link">Настройки</router-link>
                </li>
            </ul>
        </div>
        <div class="exit">
            <font-awesome-icon icon="fa-solid fa-power-off" />
            <router-link to="/" class="link">Выйти</router-link>
        </div>
    </aside>
</template>

<script>
export default {
    methods: {
        isLinkActive() {
            let links = document.querySelectorAll('li');
            links.forEach(li => {

                let locationWindow = window.location.pathname.split("/")[1];
                let datasetHref = li.dataset.href;
                datasetHref == locationWindow ? li.classList.add("active") : undefined
            });
        }
    },

    mounted() {
        this.isLinkActive();
    }
}
</script>

<style scoped>
.left-menu {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 45px #DFE7F4;
    height: 100vh;
    float: left;
    position: sticky;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    padding: 58px 0 67px 45px;
}

.list .link,
.exit .link {
    color: #898D98;
    font-size: 12px;
    text-decoration: none;
    font-weight: 500;
    line-height: 14px;
    margin-left: 8px;
}

.link.not-working {
    color: #F62D52;
}

li.active .link,
li.active svg {
    color: #4F78E0;
}


.link {
    padding: 15px 0;
}

.list li,
.exit {

    display: flex;
    align-items: center;
}

.list,
.exit {
    padding-left: 58px;
}

.exit {
    margin-bottom: 50px;
}

.list svg,
.exit svg {
    width: 16px;
    font-size: 20px;
    float: left;
    color: #898D98;
}

@media screen and (max-width: 992px) {
    .title {
        padding: 58px 0 67px 15px;
    }

    .list,
    .exit {
        padding-left: 18px;
    }

    .exit {
        margin-top: 10vh;
    }
}

@media screen and (min-height: 800px) {
    .exit {
        margin-bottom: 40vh;
    }

}
</style>