<template>
    <tr class="text-center">
        <th scope="row">{{ freeboard.freeBoardNo }}</th>
        <td class="text-start">
            <router-link :to="{ name: 'freeboardDetail', params: { boardno: freeboard.freeBoardNo } }">
                {{ freeboard.freeBoardTitle }}
            </router-link>
        </td>
        <td>{{ freeboard.user.userNm }}</td>
        <td>{{ freeboard.freeBoardHit }}</td>
        <td>{{ freeboard.freeBoardCreate }}</td>
    </tr>
</template>

<script>

export default {
    name: 'FreeBoardListItem',
    props: {
        freeboard: Object,
    },
    created() {
        // http.get(`/freeboard/${this.$route.params.boardno}`).then(({ data }) => {
        //     this.board = data
        // })

        // http.get(`/freeboard/${this.$route.params.boardno}/comment`).then(({ data }) => {
        //     console.log(data)
        //     this.comments = data;
        // })
    }
};
</script>

<style scoped></style>