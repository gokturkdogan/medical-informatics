<template>
    <div class="header">
        <router-link class="header__logoLink" tag="a" to="/">
            <div class="header__logoArea">
                <svg-icon icon-name="logo-icon" width="70" height="70" fill="#8F40E8"></svg-icon>
                <span class="header__title">HEALTHCARE</span>
            </div>
        </router-link>
        <nav class="header__navBar">
            <div class="header__content">
                <ul class="header__list">
                    <li class="header__item">
                        <router-link class="header__link" to="/" tag="a">Anasayfa</router-link>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#">İstatistiklerim</a>
                        <div class="header__dropContent">
                            <ul class="header__dropdown">
                                <li><router-link class="header__dropLink" to="/health" tag="a">Sağlık</router-link></li>
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
    z-index: 1;
    display: flex;
    justify-content: center;
    background-color: $white;
    position: fixed;
    width: 100%;
    padding: 20px 0;
    box-shadow: 0 -6px 10px 5px $black;

    &__logoLink {
        text-decoration: none;
    }

    &__logoArea {
        width: 50px;
        display: flex;
    }

    &__logo {
        width: 100%;
    }

    &__title {
        font-weight: 900;
        padding-top: 20px;
        letter-spacing: 2px;
        font-size: 25px;
        margin-left: 10px;
        text-decoration: none;
        color: $black;
    }

    &__navBar {
        width: 40%;
        margin-left: 500px;
    }

    &__content {
        padding-top: 20px;
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
        color: $black;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            color: $themePurple
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
        background-color: $white;
    }

    &__dropLink {
        text-decoration: none;
        font-weight: 600;
        color: $dropLinkFontColor;
        display: block;
        padding: 10px 20px;
        width: 200px;
        border-bottom: 1px solid $dropLinkBorder;
        transition: 0.5s;

        &:hover {
            background-color: $dropLinkHoverBg;
            padding: 10px 25px;
        }
    }
}
</style>