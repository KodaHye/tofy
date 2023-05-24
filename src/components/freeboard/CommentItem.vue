<template>
    <div>
        <div class="row" style="display: flex; justify-content: space-between; padding: 0 20px;">
            <div style="padding-bottom: 5px;">
                <img class="avatar me-2 float-md-start bg-light p-2"
                                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" />
                <!-- 작성자 이름 -->
                {{ comment.user.userNm }}
            </div>
            <div class="row" style="padding-right: 20px">
                <div style>{{ comment.commentCreate }}</div>
                <div style="margin-left: 5px;"><a href="#" style="color: black;">수정</a></div>
                <div style="margin-left: 5px;"><a href="#" style="color: black;">삭제</a></div>
            </div>
        </div>
        <div style="padding: 0px 15px">{{ comment.commentContent }}</div>
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
    created() {
        console.log(this.comment)
     },
    methods: {},
};
</script>

<style scoped>
</style>