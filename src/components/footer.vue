<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__item">
                <router-link class="footer__logoLink" tag="a" to="/">
                    <div class="footer__logoArea">
                        <svg-icon icon-name="logo-icon" width="70" height="70" fill="#8F40E8"></svg-icon>
                        <span class="footer__title">HEALTHCARE</span>
                    </div>
                </router-link>
                <ul class="footer__list">
                    <li>İstanbul, Pendik</li>
                    <li>gokturk.dogan@hotmail.com</li>
                    <li>+90 553 481 5110</li>
                </ul>
            </div>
            <div class="footer__item">
                <div class="footer__social">
                    <a href="" class="footer__link"><svg-icon fill="#ffffff" icon-name="linkedln-icon" width="70"
                            height="70"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="github-icon" width="70" height="70"
                            fill="#8F40E8"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="twitter-icon" width="70" height="70"
                            fill="#8F40E8"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="instagram-icon" width="70" height="70"
                            fill="#8F40E8"></svg-icon></a>
                </div>
                <div class="footer__socialMobile">
                    <a href="" class="footer__link"><svg-icon fill="#ffffff" icon-name="linkedln-icon" width="50"
                            height="50"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="github-icon" width="50" height="50"
                            fill="#8F40E8"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="twitter-icon" width="50" height="50"
                            fill="#8F40E8"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="instagram-icon" width="50" height="50"
                            fill="#8F40E8"></svg-icon></a>
                </div>
                <div class="footer__socialMobileSmall">
                    <a href="" class="footer__link"><svg-icon fill="#ffffff" icon-name="linkedln-icon" width="30"
                            height="30"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="github-icon" width="30" height="30"
                            fill="#8F40E8"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="twitter-icon" width="30" height="30"
                            fill="#8F40E8"></svg-icon></a>
                    <a href="" class="footer__link"><svg-icon icon-name="instagram-icon" width="30" height="30"
                            fill="#8F40E8"></svg-icon></a>
                </div>
            </div>
        </div>
        <div class="footer__bottom">

        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
    background-color: $footerBg;
    padding: 10vh 15vw;
    margin-top: 5px;

    @include mobile {
        padding: 5vh 15vw;
    }

    &__top {
        display: flex;
        justify-content: space-between;

        @include mobile {
            flex-direction: column;
            justify-content: center;
        }
    }

    &__item {
        width: 100%;
    }

    &__logoLink {
        text-decoration: none;
    }

    &__logoArea {
        display: flex;
    }

    &__title {
        font-weight: 900;
        padding-top: 20px;
        letter-spacing: 2px;
        font-size: 25px;
        margin-left: 10px;
        text-decoration: none;
        color: $white;
    }

    &__list {
        list-style-type: none;
        color: $white;

        @include mobile {
            text-align: center;
        }

        li {
            margin-top: 20px;
            font-weight: 500;
            letter-spacing: 1px;
            font-size: 16px;
        }
    }

    &__social {
        display: flex;
        width: 100%;
        justify-content: space-between;

        @include headerMedium {
            display: none;
        }
    }

    &__socialMobile {
        display: flex;
        width: 100%;
        justify-content: space-between;
        display: none;

        @include headerMedium {
            display: flex;
        }

        @include mobile {
            display: none;
        }
    }

    &__socialMobileSmall {
        display: flex;
        width: 100%;
        justify-content: space-between;
        display: none;

        @include mobile {
            display: flex;
        }
    }

    &__link {
        background: linear-gradient(-45deg, $linearPurple 0%, $linearBlue 100%);
        padding: 20px;
        border-radius: 55px;

        &:hover {
            @include unhealthy-shadow
        }

        @include mobile {
            margin-top: 40px;
            padding: 10px;
        }
    }
}
</style>