<template>
    <div class="header">
        <div class="header__logoArea">
            <img class="header__logo" src="../assets/images/logos/header-logo.jpg" alt="Logo">
        </div>
        <nav class="header__navBar">
            <div class="header__content">
                <ul class="header__list">
                    <li class="header__item">
                        <a class="header__link" href="#">Anasayfa</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#">İstatistiklerim</a>
                        <div class="header__dropContent">
                            <ul class="header__dropdown">
                                <li><a class="header__dropLink" href="">Sağlık Bilgilerim</a></li>
                                <li><a class="header__dropLink" href="">Antrenman Bilgilerim</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#">Antrenman Programım</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#">Diyet Programım</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="">Hesap Bilgilerim</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Header",
};
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 0 300px;

    &__logoArea {
        width: 7%;
    }

    &__logo {
        width: 100%;
    }

    &__navBar {
        width: 80%;
    }

    &__content {
        padding-top: 30px;
        font-size: 14px;
    }

    &__list {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }

    &__item {
        text-transform: uppercase;

        &:hover .header__dropContent {
            display: block;
        }
    }

    &__link {
        font-weight: 600;
        color: black;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            color: #9B33E7
        }
    }

    &__dropContent {
        display: none;
        position: absolute;
    }

    &__dropdown {
        list-style-type: none;
        margin-top: 40px;
        padding: 0;
        height: fit-content;
        background-color: white;
    }

    &__dropLink {
        text-decoration: none;
        font-weight: 600;
        color: #8E8D8D;
        display: block;
        padding: 10px 20px;
        width: 200px;
        border-bottom: 1px solid #c7c6c6;
        transition: 0.5s;
        &:hover {
            background-color: #F7F7FB;
            padding: 10px 25px;
        }
    }
}
</style>