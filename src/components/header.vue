<template>
    <div class="header">
        <router-link class="header__logoLink" tag="a" to="/">
            <div class="header__logoArea">
                <svg-icon icon-name="logo-icon" width="70" height="70" fill="#8F40E8"></svg-icon>
                <span class="header__title">HEALTHCARE</span>
            </div>
        </router-link>
        <svg-icon class="header__mobileMenuIcon" icon-name="bars-icon" height="70" weight="70"></svg-icon>
        <nav class="header__navBar">
            <ul class="header__list">
                <li class="header__item">
                    <router-link class="header__link" to="/" tag="a">Anasayfa</router-link>
                </li>
                <li class="header__item">
                    <a class="header__link" href="#">İstatistiklerim</a>
                    <div class="header__dropContent">
                        <ul class="header__dropdown">
                            <li><router-link class="header__dropLink" to="/health" tag="a">Sağlık</router-link></li>
                            <li><router-link class="header__dropLink" to="/training" tag="a">Antrenman Bilgilerim</router-link></li>  
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
    background-color: $white;
    position: fixed;
    min-width: 64%;
    display: flex;
    justify-content: space-between;
    padding-left: 18%;
    padding-right: 18%;
    padding-top: 10px;
    padding-bottom: 10px;
    @include header-shadow;

    @include headerXLarge {
        min-width: 70%;
        padding-left: 21%;
        padding-right: 21%;
    }

    @include headerLarge {
        min-width: 80%;
        padding-left: 10%;
        padding-right: 10%;
    }

    @include headerMedium {
        min-width: 90%;
        padding-left: 5%;
        padding-right: 5%;
    }

    @include headerSmall {
        min-width: 90%;
        padding-left: 5%;
        padding-right: 5%;
    }

    &__logoLink {
        text-decoration: none;
    }

    &__logoArea {
        display: flex;
        width: 20%;
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
        width: fit-content;
        padding-top: 25px;

        @include headerSmall {
            display: none;
        }
    }

    &__mobileMenuIcon {
        display: none;

        @include headerSmall {
            display: block;
        }
    }

    &__list {
        display: flex;
        list-style-type: none;

    }

    &__item {
        text-transform: uppercase;

        &:not(:first-child) {
            margin-left: 20px;
        }

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