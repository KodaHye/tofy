<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h1>여행계획 게시판 입니다.</h1>
                </div>
                <div><span>나만의 여행계획을 만들어주세요.</span></div>
                
            </div>
            <div class="">
                <div class="row align-self-center mb-2">
                    <div class="col-md-2 text-start">
                        <b-button variant="outline-primary" @click="$router.push({ name: 'freeboardwrite' })">글쓰기</b-button>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-md-7">
                        <div class="row" style="float: right;">
                            <div style="padding-right: 5px;">
                                <b-form-select name="sort_list" id="sort_list" style="width: 130px;" aria-label="정렬조건"
                                    :value="null">
                                    <option value="null">게시글 정렬</option>
                                    <option value="notice">최신 순</option>
                                    <option value="sort_hit">조회수 순</option>
                                </b-form-select>
                            </div>
                            <div style="padding-right: 5px;">
                                <!-- <input type="hidden" name="action" value="notice" /> <input
						type="hidden" name="pgno" value="1" />  -->
                                <b-form-select name="key" id="key" style="width: 130px" aria-label="검색조건" :value="null">
                                    <option value="null">검색조건</option>
                                    <option value="article_no">글번호</option>
                                    <option value="subject">제목</option>
                                    <option value="user_id">작성자</option>
                                </b-form-select>
                            </div>
                            <div style="padding-right: 5px;">
                                <b-input type="text" name="word" id="word" style="width: 150px" placeholder="검색어..." />
                                <!-- <b-button id="btn-search" class="btn btn-dark" type="button">검색</b-button> -->
                            </div>
                            <div style="padding-right: 5px;">
                                <b-button>검색</b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-self-center mb-2"></div>
                <table class="table table-hover">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">글번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성자</th>
                            <th scope="col">조회수</th>
                            <th scope="col">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <free-board-list-item v-for="(freeboard, i) in freeboardList" :key="i" :board="board"></free-board-list-item>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlanList',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped>
.box {
    height: 973px;
    margin: 51px 0 0;
    padding: 67px 0 0;
    opacity: 0.8;
}

.content {
    height: 779px;
    margin: 0 32px 41px 33px;
    padding: 30px 18px 422px 43px;
    border-radius: 20px;
    background-color: #fff;
}
</style>