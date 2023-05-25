<template>
    <div></div>
</template>

<script>

import http from "@/api/http"

export default {
    name: 'NoticeDelete',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {
        if (confirm('정말 글을 삭제하시겠습니까?')) {
            console.log(this.$route.params.noticeno);
            http.delete(`/notice/${this.$route.params.noticeno}`).then(({ data }) => {
                this.board = data
            })
            alert("글이 삭제되었습니다.")
            this.$router.push({ name: "noticeList" });
        } else this.$router.back()
    },
    methods: {},
};
</script>

<style scoped></style>