<template>
    <div class="home">
        <div class="home__information">
            <h5 class="home__title">Health Care Uygulamasına Hoşgeldiniz</h5>
            <h1 class="home__largeTitle">Sağlık Takibi</h1>
            <p class="home__description">Spor aktivitelerinizi ve vucüdunuzun sağlığını takip edin.</p>
            <div class="home__buttons">
                <router-link class="home__button" to="/health" tag="a">Sağlık</router-link>
                <a class="home__button" href=""><span>Antrenman</span></a>
            </div>
        </div>
        <div class="home__image">
            <img src="../assets/images/figures/homeBanner.png" alt="figure" class="home__figure">
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
    background-image: linear-gradient(-45deg, $linearPurple 0%, $linearBlue 100%);
    display: flex;
    justify-content: space-between;
    padding: 34vh 20vw;

    @include headerXLarge {
        padding: 34vh 10vw;
    }

    @include mobile {
        flex-direction: column-reverse;
        padding: 15vh 20vw;
    }

    &__information {
        padding-top: 100px;
        margin: auto;

        @include headerXLarge {
            padding-top: 50px;
        }

        @include mobile {
            max-width: 100%;
        }
    }

    &__title {
        color: $white;
        text-align: left;
        font-size: 22px;
        font-weight: 600;

        @include mobile {
            text-align: center;
            font-size: 16px;
        }
    }

    &__largeTitle {
        color: $white;
        text-align: left;
        font-size: 65px;
        font-weight: 700;

        @include mobile {
            text-align: center;
            font-size: 45px;
        }
    }

    &__description {
        color: $white;
        text-align: left;
        line-height: 1.6;
        letter-spacing: .3px;
        margin-bottom: 30px;

        @include mobile {
            text-align: center;
            font-size: 14px;
        }
    }

    &__buttons {
        display: flex;
        justify-content: space-between;
    }

    &__button {
        background: linear-gradient(-45deg, $linearPurple 0%, $linearBlue 100%);
        border: none;
        box-shadow: 0 2px 4px $boxShadow1;
        text-decoration: none;
        color: $white;
        min-width: 150px;
        border-radius: 4px;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1.1px;
        text-align: center;
        padding: 15px 20px;
        outline: none;
        cursor: pointer;

        &:hover {
            opacity: 70%;
        }

        @include headerSmall {
            padding: 15px 0;
        }

        @include mobile {
            font-size: 12px;
            min-width: 48%;
        }
    }

    &__image {
        width: 635px;

        @include mobile {
            width: 100%;
            margin-top: 50px;
            margin: auto;
        }
    }

    &__figure {
        width: 100%;
    }
}
</style>