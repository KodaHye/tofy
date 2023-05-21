<template>
    <div></div>
</template>

<script>
import http from "@/api/http";
export default {
    name: 'FreeboardDelete',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {
        console.log(this.$route.params.boardno);
        http.delete(`/freeboard/${this.$route.params.boardno}`).then(({ data }) => {
            this.board = data
        })
        this.$router.push({ name: "freeboardList" });
    },
    methods: {},
};
</script>

<style scoped></style>