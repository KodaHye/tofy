<template>
    <div class="box">
        <div class="contentdetail">
            <div style="margin: 20px 0px 50px 0px;">
                <div>
                    <h2>관광지 상세정보</h2>
                </div>
                <div>
                    <span>{{ }}에 대한 상세정보입니다.</span>
                </div>
            </div>

            <div style="margin: 20px 0px;">
                <div class="row">
                    <div>
                        <h2>`{{ 관광지이름 }}`</h2>
                    </div>
                    <div>
                        평균별점:
                    </div>
                </div>

                <div>이미지</div>
                <div>
                    <div>주소</div>
                    <div>설명</div>
                </div>
            </div>

            <div style="margin: 20px 0px;">
                <div>
                    비슷한 여행지 추천
                </div>

                <div>
                    비슷한 여행지 추천 캐러셀
                </div>

                <div>이미지</div>
                <div>
                    <div>주소</div>
                    <div>설명</div>
                </div>
            </div>

            <div style="margin: 20px 0px;">
                <div>
                    후기
                </div>

                <div>후기 리스트</div>
            </div>
        </div>
    </div>
</template>s

<script>
export default {
    name: 'AttractionDetail',
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
.contentdetail {
    min-height: 80;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 80vw;
    padding: 30px 18px 43px;
    border-radius: 20px;
    /* background-color: #fff; */
}
</style>