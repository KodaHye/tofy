<template>
    <tr class="text-center">
        <th scope="row">{{ board.articleNo }}</th>
        <td class="text-start">
            <router-link :to="{ name: 'boardDetail', params: { boardno: board.articleNo } }">
                {{ board.subject }}
            </router-link>
        </td>
        <td>{{ board.userId }}</td>
        <td>{{ board.hit }}</td>
        <td>{{ board.registerTime }}</td>
    </tr>
</template>

<script>

import http from "@/api/http";

export default {
    name: 'FreeBoardListItem',
    props: {
        freeboard: Object,
    },
    created() {
        http.get(`/freeboard/${this.$route.params.boardno}`).then(({ data }) => {
            this.board = data
        })

        http.get(`/freeboard/${this.$route.params.boardno}/comment`).then(({ data }) => {
            console.log(data)
            this.comments = data;
        })
    }
};
</script>

<style scoped></style>