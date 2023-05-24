<template>
    <tr class="text-center">
        <th scope="row">{{ notice.freeBoardNo }}</th>
        <td class="text-start">
            <router-link :to="{ name: 'freeboardDetail', params: { noticeNo: notice.freeBoardNo } }">
                {{ notice.freeBoardTitle }}
            </router-link>
        </td>
        <td>{{ notice.userNo }}</td>
        <td>{{ notice.freeBoardHit }}</td>
        <td>{{ notice.freeBoardCreate }}</td>
    </tr>
</template>

<script>

export default {
    name: 'NoticeListItem',
    props: {
        notice: Object,
    },
    created() {
        console.log(this.notice);
    }
};
</script>

<style scoped></style>