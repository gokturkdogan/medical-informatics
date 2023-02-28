import API from '@/api';
import Services from '@/config/_axios';

const cart = {

    state: () => ({
        health: {},
        bodyMass: {
            bodyMassRate: null
        },
        notify: {
            isOpen: false
        }
    }),
    mutations: {
        SET_HEALTH(state, payload) {
            state.health = payload;
        },
        SET_BODY_MASS(state, payload) {
            state.bodyMass = {
                ...state.bodyMass,
                ...payload
            };
        },
    },
    actions: {
        async getHealth({ commit, state }) {
            await Services.get(API.Health).then((res) => {
                if (res.data) {
                    commit('SET_HEALTH', res.data);
                    let bodyMassRate = 0;
                    bodyMassRate += (state.health.weight / ((state.health.height / 100) * (state.health.height / 100)))
                    commit('SET_BODY_MASS', {
                        bodyMassRate: bodyMassRate,
                    });
                }
            }).catch((err) => {
                alert(err)
            });
        },
        async updateHealth({ state, dispatch }, message) {
            await Services.put(API.Health, state.health).then((res) => {
                if (res.data) {
                    dispatch('getHealth');
                    dispatch('notify', { title: "Başarılı", message: message + ' ' + 'başarı ile güncellenmiştir.', status: "success", isOpen: true });
                }
            }).catch((err) => {
                alert(err)
            });
        },
        notify({ state }, payload) {
            state.notify.isOpen = true;
            state.notify = payload;
            setTimeout(() => {
                state.notify.isOpen = false;
            }, 3000);
        },
    },
    namespaced: true
}

export default cart;