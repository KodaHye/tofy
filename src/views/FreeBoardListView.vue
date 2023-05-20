<template>
    <tr class="text-center">
        <th scope="row">{{board.articleNo}}</th>
        <td class="text-start">
            <router-link :to="{ name: 'boardDetail', params: { boardno: board.articleNo } }">
                {{ board.subject }}
            </router-link>
        </td>
        <td>{{board.userId}}</td>
        <td>{{board.hit}}</td>
        <td>{{board.registerTime}}</td>
    </tr>
</template>

<script>
export default {
    name: 'FreeBoardListItem',
    props: {
        board: Object,
    },
};
</script>

<style scoped></style>