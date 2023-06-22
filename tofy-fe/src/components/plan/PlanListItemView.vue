<template>
    <tr class="text-center">
        <th scope="row">{{ planboard.planNo }}</th>
        <td class="text-start">
            <router-link :to="{ name: 'planDetail', params: { boardno: planboard.planNo } }">
                {{ planboard.planTitle }}
            </router-link>
        </td>
        <td>{{ planboard.user.userNm }}</td>
        <td>{{ planboard.planHit }}</td>
        <td>{{ planboard.planCreate }}</td>
    </tr>
</template>

<script>
export default {
    name: 'PlanListItem',
    components: {},
    props: { 
        planboard: Object,
    },
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>