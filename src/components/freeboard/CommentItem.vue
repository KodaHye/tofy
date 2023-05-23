<template>
    <div>
        <div class="row" style="display: flex; justify-content: space-between; padding: 0 20px;">
            <div>
                <!-- 작성자 이름 -->
                <span>작성자: </span>{{ comment.userNo }}
            </div>
            <div class="row" style="padding-right: 20px">
                <div style>{{ comment.commentCreate }}</div>
                <div style="margin-left: 5px;">수정</div>
                <div style="margin-left: 5px;">삭제</div>
            </div>
        </div>
        <div style="padding: 0px 5px">{{ comment.commentContent }}</div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'CommentItem',
    props: {
        comment: Object,
    },
    components: {
    },
    data() {
        return {
            message: '',
        };
    },
    created() { },
    methods: {},
};
</script>

<style scoped></style>