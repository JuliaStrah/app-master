import Vue from "vue";

const USER_LIST_URL = "https://jsonplaceholder.typicode.com/users";
let userList = null;

export default {
    name: "FirstSubmodule",
    data: function() {
        return {
            users: userList
        }
    },
    beforeRouteEnter (to, from, next) {
        Vue.http.get(USER_LIST_URL)
            .then(
                function(response) {
                    console.log("RESPONSE: ", response.body);
                    userList = response.body;
                    next(true);
                },
                function(error) {
                    console.warn("ERROR: ", error);
                    next(false);
                }
            );
    },
    methods: {}
};