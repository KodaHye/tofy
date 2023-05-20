<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h1>여행계획 게시판 입니다.</h1>
                </div>
                <div><span>나만의 여행계획을 만들어보세요.</span></div>
            </div>

            <div class="mb-3">
                <label for="subject" class="form-label">제목 : </label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="제목..." v-model="subject" />
            </div>

            <div class="row" style="margin: 20px 0px;">

                <div class="border col-sm-12 col-md-12 col-lg-3 col-3"
                    style="border: 1px; border-color:#ced4da; border-radius: 0.375rem;">
                    <div style="margin: 10px 0px;">
                        <span>관광지를 검색해주세요</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="관광지 이름 입력">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
                                class="bi bi-search"></i></button>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-6">
                    <!-- kakaoMap API  start  -->
                    <div id="map" style="width: 100%; height: 400px;">

                    </div>
                    <!-- kakaoMap API  end -->
                </div>
                <div class="border col-sm-12 col-md-12 col-lg-3 col-3"
                    style="border: 1px; border-color:#ced4da; border-radius: 0.375rem;">
                    <div style="margin: 10px 0px;"><span>나의 여행코스</span></div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-5">
                    <div style="margin: 10px 0px;">
                        <span>출발일</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="date" class="form-control" placeholder="관광지 이름 입력">
                    </div>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-2 col-2">
                </div>

                <div class="col-sm-12 col-md-12 col-lg-5 col-5" style="">
                    <div style="margin: 10px 0px;">
                        <span>도착일</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="date" class="form-control" placeholder="관광지 이름 입력">
                    </div>
                </div>

            </div>

            <div class="mb-3">
                <label for="content" class="form-label">내용 : </label>
                <textarea class="form-control" id="content" name="content" rows="7" placeholder="내용 입력..."
                    v-model="content"></textarea>
            </div>

            <div class="col-auto" style="text-align: right; padding-right: 0px;">
                <div class="row" style="float: right; margin-right: 2px; margin-bottom: 6px;">
                    <div style="padding-right: 7px;">
                        <button type="button" id="btn-register" class="btn btn-outline-primary"
                            @click="writeBoard">글작성</button>
                    </div>
                    <div>
                        <button type="reset" class="btn btn-outline-danger">초기화</button>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'PlanWrite',
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

<style scoped></style>