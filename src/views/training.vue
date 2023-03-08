<template>
    <div class="training">
        <div class="banner">
            <h2 class="banner__title">
                Antrenman Bilgilerim
            </h2>
        </div>
        <div class="training__content">
            <div class="training__module">
                <img class="training__image" src="../assets/images/exercises/weight-training.jpg" alt="">
            </div>
            <div class="training__information">
                <div class="training__informaitonBar">
                    <h4 class="training__informaitonBartitle">Event Information</h4>
                    <ul class="training__informaitonBarList">
                        <li class="training__informaitonBarListItem">
                            <span>Tarih: </span>07 03 2023
                        </li>
                        <li class="training__informaitonBarListItem">
                            <span>Saat: </span>16:00 18:00
                        </li>
                        <li class="training__informaitonBarListItem">
                            <span>Lokasyon: </span>İstanbul
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Training",
};
</script>
<style lang="scss" scoped>
.training {
    &__content {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        padding: 0 600px;
    }

    &__module {}

    &__image {
        border-radius: 20px;
    }

    &__information {
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 5%);
        height: fit-content;
        padding: 35px 20px;
    }

    &__informaitonBartitle {
        font-size: 20px;
        letter-spacing: .3px;
        text-transform: capitalize;
        color: #666;
        font-weight: 600;
        margin-bottom: 25px;
    }

    &__informaitonBarList {
        padding-left: 0;
        list-style-type: none;
    }
}
</style>
