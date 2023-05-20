<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h1>글을 작성해주세요.</h1>
                </div>
                <div><span>자유롭게 글을 작성해주세요.</span></div>
            </div>

            <div class="mb-3">
				<label for="subject" class="form-label">제목 : </label> 
				<input
					type="text" class="form-control" id="subject" name="subject"
					placeholder="제목..." v-model="subject"/>
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용 : </label>
				<textarea class="form-control" id="content" name="content" rows="7" placeholder="내용 입력..." v-model="content"></textarea>
			</div>
			<div class="col-auto text-center">
				<button type="button" id="btn-register"
					class="btn btn-outline-primary mb-3" @click="writeBoard">글작성</button>
				<button type="reset" class="btn btn-outline-danger mb-3">초기화</button>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FreeBoardView',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() { },
    methods: {},
};
</script>

<style scoped>

</style>