export default {
    name: "TodoModule",
    data: function() {
        return {}
    },
    beforeRouteEnter (to, from, next) {
        next(true);
    },
    methods: {}
};