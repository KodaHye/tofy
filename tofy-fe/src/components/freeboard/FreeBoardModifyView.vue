<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h1>글을 수정해주세요.</h1>
                </div>
                <div><span>작성했던 글을 수정해요.</span></div>
            </div>

            <div class="mb-3">
				<label for="subject" class="form-label"><span>제목</span></label> 
				<input
					type="text" class="form-control" id="subject" name="subject"
					placeholder="제목..." v-model="board.freeBoardTitle"/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea class="form-control" id="content" name="content" rows="7" placeholder="내용 입력..." v-model="board.freeBoardContent"></textarea>
			</div>
			<div class="col-auto text-center">
				<button type="button" id="btn-register"
					class="btn btn-outline-primary mb-3" @click="modifyboard">글작성</button>
				<button type="reset" class="btn btn-outline-danger mb-3">초기화</button>
			</div>


        </div>
    </div>
</template>

<script>

import http from '@/api/http';

export default {
    name: 'FreeBoardModify',
    components: {},
    data() {
        return {
            message: '',
            board: Object,
        };
    },
    created() {
        http.get(`/freeboard/${this.$route.params.boardno}`).then(({data}) => {
            this.board = data
            console.log(data)
        })
    },
    methods: {
        modifyboard() {
            console.log(this.board)
            http.put(`/freeboard`, this.board);
            this.$router.push({ name: 'freeboardDetail', params: { boardno: this.board.freeBoardNo } })
        }
    },
};
</script>

<style scoped>

</style>