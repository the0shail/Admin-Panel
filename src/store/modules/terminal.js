import axios from "axios"

const terminal = {
    namespaced: true,
    state: {
        terminal: {
            "1": {
                "terminalId": "№4716",
                "groupName": "ТЦ “Аврора”",
                "address": {
                    "street": "ул. Москвоская 64/8",
                    "country": "Санкт-Петерург",
                    "city": "Россия"
                },
                "config": "Консьерж",
                "terminalKey": "Ajhg64hQ5",
                "date": "28.06.2020",
                "active": true
            },
            "2": {
                "terminalId": "№14",
                "groupName": "ИП Михайлов",
                "address": {
                    "street": "ул. Академов 26",
                    "country": "Рязань",
                    "city": "Россия"
                },
                "config": "АКХ",
                "terminalKey": "Ajhg64hQ5",
                "date": "16.09.2020",
                "active": false
            }
        }
    },
    getters: {
        getTerminal: ({ terminal }) => terminal
    },
    mutations: {
        PUSH_DATA_TO_STATE(state, data) {
            state.terminal = data;
        }
    },
    actions: {
        // async pushStateTerminal({ commit }) {
        //     let request = await axios.get("http://localhost:3000/terminal");
        //     commit("PUSH_DATA_TO_STATE", request.data);
        // }
    }
}

export default terminal;