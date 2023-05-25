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
        if (confirm('정말 글을 삭제하시겠습니까?')) {
            console.log(this.$route.params.boardno);
            http.delete(`/freeboard/${this.$route.params.boardno}`).then(({ data }) => {
                this.board = data
            })
            alert("글이 삭제되었습니다.")
            this.$router.push({ name: "freeboardList" });
        } else this.$router.back()
    },
    methods: {},
};
</script>

<style scoped></style>