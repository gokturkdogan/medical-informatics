<template>
    <div class="health">
        <div class="banner">
            <h2 class="banner__title">
                Sağlık
            </h2>
        </div>
        <div class="health__content">
            <div class="health__stats">
                <h2 class="health__title">
                    Değerleriniz
                </h2>
                <div class="health__statsContent">
                    <div class="health__statsLine">
                        <div class="health__view">
                            <div :class="{ '-active': isWeightModal.isOpen }" class="health__statsItem"
                                @click="openWeightModal()">
                                <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="weight-icon" />
                                <h4 class="health__statsItemTitle">
                                    Kilonuz
                                </h4>
                                <p class="health__statsItemDesc">Girmiş olduğunuz vücut ağırlığınız (Kullanıcı tarafından
                                    girilmesi ve güncellenmesi
                                    gerekmektedir.)</p>
                                <span class="health__statsItemValue">{{ health.weight }} Kg</span>
                            </div>
                            <div v-if="isWeightModal.isOpen" class="health__updateModal">
                                <input v-model="health.weight" class="health__updateInput" type="number">
                                <button class="health__updateBtn" @click="update(isWeightModal.message)">Güncelle</button>
                                <button class="health__updateBtn" @click="closeAllModals()">Vazgeç</button>
                            </div>
                        </div>
                        <div class="health__view">
                            <div :class="{ '-active': isHeightModal.isOpen }" class="health__statsItem"
                                @click="openHeightModal()">
                                <svg-icon class="icon" width="70" height="70" fill="#FFFFFF" icon-name="height-icon" />
                                <h4 class="health__statsItemTitle">
                                    Boyunuz
                                </h4>
                                <p class="health__statsItemDesc">Girmiş olduğunuz boy uzunluğunuz (Kullanıcı tarafından
                                    girilmesi ve güncellenmesi
                                    gerekmektedir.)</p>
                                <span class="health__statsItemValue">{{ health.height }} Cm</span>
                            </div>
                            <div v-if="isHeightModal.isOpen" class="health__updateModal">
                                <input v-model="health.height" class="health__updateInput" type="number">
                                <button class="health__updateBtn" @click="update(isHeightModal.message)">Güncelle</button>
                                <button class="health__updateBtn" @click="closeAllModals()">Vazgeç</button>
                            </div>
                        </div>
                        <div class="health__view">
                            <div :class="{ '-active': isBodyFatModal.isOpen }" class="health__statsItem"
                                @click="openBodyFatModal()">
                                <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="fat-icon" />
                                <h4 class="health__statsItemTitle">
                                    Yağ Oranınız
                                </h4>
                                <p class="health__statsItemDesc">Girmiş olduğunuz vücut yağ oranınız (Kullanıcı tarafından
                                    girilmesi ve güncellenmesi
                                    gerekmektedir.)</p>
                                <span class="health__statsItemValue">{{ health.bodyFat }}%</span>
                            </div>
                            <div v-if="isBodyFatModal.isOpen" class="health__updateModal">
                                <input v-model="health.bodyFat" class="health__updateInput" type="number">
                                <button class="health__updateBtn" @click="update(isBodyFatModal.message)">Güncelle</button>
                                <button class="health__updateBtn" @click="closeAllModals()">Vazgeç</button>
                            </div>
                        </div>
                    </div>
                    <div class="health__statsOveralLine">
                        <div v-if="bodyMass.bodyMassRate < 18.99" class="health__statsItem mass thin" @click="openModal()">
                            <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="plus-icon-red" />
                            <h4 class="health__statsItemTitle">
                                Vücut Kitle İndeksiniz
                            </h4>
                            <p class="health__statsItemDesc">Girmiş olduğunuz veriler hesaplanarak bulunur. (ZAYIF)</p>
                            <span class="health__statsItemValue">{{ parseFloat(bodyMass.bodyMassRate).toFixed(1) }}</span>
                        </div>
                        <div v-if="bodyMass.bodyMassRate < 24.99 && bodyMass.bodyMassRate > 19"
                            class="health__statsItem mass normal" @click="openModal()">
                            <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="plus-icon-green" />
                            <h4 class="health__statsItemTitle">
                                Vücut Kitle İndeksiniz
                            </h4>
                            <p class="health__statsItemDesc">Girmiş olduğunuz veriler hesaplanarak bulunur. (NORMAL)</p>
                            <span class="health__statsItemValue">{{ parseFloat(bodyMass.bodyMassRate).toFixed(1) }}</span>
                        </div>
                        <div v-if="bodyMass.bodyMassRate < 29.99 && bodyMass.bodyMassRate > 25"
                            class="health__statsItem mass slightlyFat" @click="openModal()">
                            <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="plus-icon-yellow" />
                            <h4 class="health__statsItemTitle">
                                Vücut Kitle İndeksiniz
                            </h4>
                            <p class="health__statsItemDesc">Girmiş olduğunuz veriler hesaplanarak bulunur. (HAFİF ŞİŞMAN)
                            </p>
                            <span class="health__statsItemValue">{{ parseFloat(bodyMass.bodyMassRate).toFixed(1) }}</span>
                        </div>
                        <div v-if="bodyMass.bodyMassRate < 34.99 && bodyMass.bodyMassRate > 30"
                            class="health__statsItem mass obese" @click="openModal()">
                            <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="plus-icon-orange" />
                            <h4 class="health__statsItemTitle">
                                Vücut Kitle İndeksiniz
                            </h4>
                            <p class="health__statsItemDesc">Girmiş olduğunuz veriler hesaplanarak bulunur. (SAĞLIK
                                AÇISINDAN RİSKLİ!)</p>
                            <span class="health__statsItemValue">{{ parseFloat(bodyMass.bodyMassRate).toFixed(1) }}</span>
                        </div>
                        <div v-if="bodyMass.bodyMassRate > 35" class="health__statsItem mass extremelyObese"
                            @click="openModal()">
                            <svg-icon width="70" height="70" fill="#FFFFFF" icon-name="plus-icon-red" />
                            <h4 class="health__statsItemTitle">
                                Vücut Kitle İndeksiniz
                            </h4>
                            <p class="health__statsItemDesc">Girmiş olduğunuz veriler hesaplanarak bulunur. (SAĞLIK
                                AÇISINDAN ÇOK RİSKLİ!)</p>
                            <span class="health__statsItemValue">{{ parseFloat(bodyMass.bodyMassRate).toFixed(1) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "Health",
    data() {
        return {
            isWeightModal: {
                message: 'Kilonuz',
                isOpen: false
            },
            isHeightModal: {
                message: 'Boyunuz',
                isOpen: false
            },
            isBodyFatModal: {
                message: 'Yağ Oranınız',
                isOpen: false
            },
        }
    },
    methods: {
        ...mapActions("health", [
            "getHealth", "updateHealth"
        ]),
        openWeightModal() {
            this.isWeightModal.isOpen = !this.isWeightModal.isOpen
            this.isHeightModal.isOpen = false
            this.isBodyFatModal.isOpen = false
        },
        openHeightModal() {
            this.isHeightModal.isOpen = !this.isHeightModal.isOpen
            this.isWeightModal.isOpen = false
            this.isBodyFatModal.isOpen = false
        },
        openBodyFatModal() {
            this.isBodyFatModal.isOpen = !this.isBodyFatModal.isOpen
            this.isHeightModal.isOpen = false
            this.isWeightModal.isOpen = false
        },
        closeAllModals() {
            this.isWeightModal.isOpen = false
            this.isBodyFatModal.isOpen = false
            this.isHeightModal.isOpen = false
        },
        async update(message) {
            await this.updateHealth(message);
            this.closeAllModals();
        },
    },
    created() {
        this.getHealth();
    },
    computed: {
        ...mapState({
            health: (state) => state.health.health,
            bodyMass: (state) => state.health.bodyMass,
        }),
    },
};
</script>
<style lang="scss" scoped>
.health {
    &__content {
        margin-top: 100px;
        text-align: center;
        padding: 0 300px;
        margin-bottom: 200px;

        @include headerMedium {
            padding: 0 100px;
        }

        @include mobile {
            padding: 0;
        }
    }

    &__stats {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    &__title {
        margin: auto;
        font-size: 28px;
        letter-spacing: 2.8px;
        line-height: 2;
        color: $footerBg;
        font-weight: 700;
        border-bottom: 3px solid $itemBorder1;
        text-transform: uppercase;

        @include mobile {
            font-size: 20px;
        }
    }

    &__statsContent {
        margin-top: 50px;
    }

    &__statsLine {
        display: flex;
        justify-content: space-between;

        @include mobile {
            flex-direction: column;
        }

        &:not(:first-child) {
            margin-top: 30px;
        }
    }

    &__statsOveralLine {
        display: flex;
        justify-content: center;
        margin-top: 30px;

        @include headerLarge {
            font-size: 14px;
            margin-top: 100px;
        }

        @include mobile {
            margin-top: 30px;
        }
    }

    &__view {
        max-width: 30%;
        height: 460px;

        @include mobile {
            max-width: 100%;
        }
    }

    &__statsItem {
        border: 1px solid $itemBorder1;
        @include section-item;
        max-width: 100%;

        @include mobile {
            max-width: 70%;
            margin: auto;
            height: fit-content;
        }

        &:hover {
            background: linear-gradient(-45deg, $linearPurple 0%, $linearBlue 100%);
            color: $white;
        }
    }

    &__statsItemTitle {
        margin-top: 30px;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 500;
        margin: 15px 0;
        letter-spacing: .2px;
        text-transform: capitalize;

        @include headerSmall {
            font-size: 16px;
        }

    }

    &__statsItemDesc {
        font-size: 15px;
        line-height: 1.7;
        margin-bottom: 30px;

        @include headerSmall {
            font-size: 13px;
        }
    }

    &__statsItemValue {
        font-weight: 700;
        font-size: 45px;

        @include headerSmall {
            font-size: 35px;
        }
    }

    &__updateModal {
        margin-top: 20px;
        background: $modalBg;
        height: 100px;
        position: relative;
        border-radius: 20px;
        @include modal-shadow;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $itemBorder1;

        @include mobile {
            max-width: 85%;
            margin: auto;
            margin-top: 10px;
        }
    }

    &__updateInput {
        height: fit-content;
        padding: 0;
        width: 100px;
        font-size: 40px;
        border-radius: 10px;
        margin-right: 15px;

        @include headerXLarge {
            width: 80px;
            font-size: 25px;
            margin-right: 10px;
        }

        @include headerLarge {
            width: 70px;
            font-size: 22px;
            margin-right: 5px;
        }
    }

    &__updateBtn {
        height: fit-content;
        cursor: pointer;
        margin-left: 5px;
        color: $white;
        background: linear-gradient(-45deg, $linearPurple 0%, $linearBlue 100%);
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        font-size: 16px;

        &:hover {
            background: $linearBlue;
        }

        @include headerXLarge {
            padding: 10px 15px;
        }

        @include headerLarge {
            font-size: 14px;
            padding: 10px 10px;
        }
    }

    .mass {
        width: 700px;
        border-width: 3px;

    }

    .thin {
        border-color: $unHealthy;
        @include unhealthy-shadow;
    }

    .normal {
        border-color: $healthy;
        @include healthy-shadow;
    }

    .slightlyFat {
        border-color: $slightlyFat;
        @include fat-shadow;
    }

    .obese {
        border-color: $obese;
        @include obese-shadow;
    }

    .extremelyObese {
        border-color: $unHealthy;
        @include unhealthy-shadow;
    }

    .-active {
        background: linear-gradient(-45deg, $linearPurple 0%, $linearBlue 100%);
        color: $white;
    }
}
</style>