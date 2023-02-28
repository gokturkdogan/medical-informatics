<template>
    <div class="notify">
        <div class="notify__content">
            <svg-icon width="50" height="50" fill="#fff" :icon-name="`${notify.status}-icon`" />
            <div class="notify__detail">
                <h4 class="notify__title">{{ notify.title }}</h4>
                <p class="notify__message">{{ notify.message }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'Notify',
    props: {
        area: { type: String },
        target: { type: String }
    },
    computed: {
        ...mapState({
            notify: (state) => state.health.notify,
        }),
    },
}
</script>
<style lang="scss" scoped>
.notify {
    padding: 10px;
    max-width: 400px;
    background: rgb(243, 243, 243);
    position: fixed;
    top: 100px;
    right: 0;
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 30%);

    &__content {
        display: flex;
        padding: 20px;
    }

    &__detail {
        margin-left: 20px;
    }

    &__message {
        margin-top: 10px;
    }
}
</style>