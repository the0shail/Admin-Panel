const users = {
    namespaced: true,
    state: {
        employee: {
            "1": {
                "name": "Альфред",
                "surname": "Маслов",
                "middleName": "Проклович",
                "email": "8yzvjwl5tl@gmailos.com",
                "phone": "+7 495 177-39-58",
                "ban": false
            },
            "2": {
                "name": "Ипполит",
                "surname": "Миронов",
                "middleName": "Семенович",
                "email": "patricklopez19@mmukmedia.net",
                "phone": "+7 425 117-59-24",
                "ban": false
            },
            "3": {
                "name": "Аркадий",
                "surname": "Волков",
                "middleName": "Сергеевич",
                "email": "wayav47135@etondy.com",
                "phone": "+7 495 127-29-45",
                "ban": false
            }
        },
    },
    getters: {
        getEmployee: ({ employee }) => employee,
        getEmpEdit: ({ employee }, id) => employee[id]

    },
    mutations: {
        PUSH_DATA_TO_STATE(state, data) {
            state.employee = data;
        },
        DELETE_TO_ID_STATE(state, id) {
            delete state.employee[id];
        },
        EDIT_DATA_USER(state, data) {
            let id = data["id"];
            delete data["id"];

            state.employee[id] = data
            // let id = String(Object.keys(data));
            // const employeesId = Object.keys(state.employee);
            // console.log(data);
            // console.log(id);

            // console.log(state.employee[id]);


            

            // employeesId.forEach((value, index) => {
            //     if (index == id) {
            //         state.employee[index] = data[1];
            //     }
            // })
        },
        ADD_USER_TO_STATE(state, data) {
            let idNewUser = Object.keys(state.employee).length + 1
            Object.assign(state.employee, {
                [idNewUser]: data
            });
        }
    },
    actions: {
        // async pushStateUser({ commit }) {
        //     try {
        //         let request = await axios.get("http://localhost:3000/employee");
        //         commit("PUSH_DATA_TO_STATE", request.data);
        //     } catch (error) {
        //         alert(`Ошибка ${error}`)
        //     }
        // },

        deleteEmployee({ commit }, id) {
            commit("DELETE_TO_ID_STATE", id);
        },

        vuexEmployeeEdit({ commit }, editUser) {
            // console.log(editUser);
            commit("EDIT_DATA_USER", editUser);
        },

        login({commit}, data){
            console.log(data);
        },

        saveNewUser({ commit }, newUser) {
            commit("ADD_USER_TO_STATE", newUser)
        }
    }
}

export default users;