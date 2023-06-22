<template>
    <tr class="text-center">
        <th scope="row">{{ notice.noticeNo }}</th>
        <td class="text-start">
            <router-link :to="{ name: 'noticeDetail', params: { noticeno: notice.noticeNo } }">
                {{ notice.noticeTitle }}
            </router-link>
        </td>
        <td>관리자</td>
        <td>{{ notice.noticeHit }}</td>
        <td>{{ notice.noticeCreate }}</td>
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