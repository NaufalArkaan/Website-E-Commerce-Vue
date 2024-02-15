import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            newRecipes: [],
            newRecipeDetail: {}
        };
    },
    getters: {},
    mutations: {
        setRecipeData1(state, payload) {
            state.recipes = payload;
        },
        setNewRecipeDetail(state, payload) {
            state.recipeDetail = payload;
        },
        setNewRecipeData(state, payload) {
            state.recipes.push.payload;
        }
    },
    actions: {
        async getNewRecipeData({
            commit
        }) {
            try {
                const {
                    data
                } = await axios.get(
                    "https://ecommerce-vin-default-rtdb.firebaseio.com/newproducts.json"
                );
                const arr = [];
                for (let key in data) {
                    arr.push({
                        id: key,
                        ...data[key]
                    });
                }
                commit("setNewRecipeData", arr)
            } catch (err) {
                console.error(err)
            }
        },
        async getNewRecipeDetail({
            commit
        }, payload) {
            try {
                const {
                    data
                } = await axios.get(
                    `https://ecommerce-vin-default-rtdb.firebaseio.com/newproducts/${payload}.json`);
                commit("setNewRecipeDetail", data);
            } catch (err) {
                console.error(err);
            }
        },
        async addNewRecipe({ commit, rootState }, payload) {
            const newData = {
                ...payload,
                username: rootState.auth.userLogin.username,
                createdAt: Date.now(),
                likes: ["null"],
                userId: rootState.auth.userLogin.userId,
            };
            try {
                const { data } = await axios.post(
                    `https://ecommerce-vin-default-rtdb.firebaseio.com/newproducts.json?
                auth=${rootState.auth.token}`, newData);

                commit("setNewRecipeData", { id: data.name, ...newData });
            } catch (err) {
                console.log(err)
            }
        },
        async deleteRecipe({ dispatch, rootState }, payload) {
            try {
                const { data } = await axios.delete(
                    `https://ecommerce-vin-default-rtdb.firebaseio.com/products/${payload}.json?auth=${rootState.auth.token}`);
                await dispatch("getNewRecipeData")
            } catch (err) {
                console.log(err);
            }
        }
    }
};
