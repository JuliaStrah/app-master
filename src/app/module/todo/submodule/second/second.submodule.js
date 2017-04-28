export default {
    name: "SecondSubmodule",
    data: function() {
        return {}
    },
    beforeRouteEnter (to, from, next) {
        next(true);
    },
    methods: {}
};
