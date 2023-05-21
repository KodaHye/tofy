<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h2>지역별검색지 조회</h2>
                </div>
                <div>
                    <span>찾고싶은 지역을 검색해보세요.</span>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-6">
                    <!-- 검색조건 -->
                    <div class="row" style="padding-bottom: 10px;">
                        <!-- 여행지 정보 검색 <Select> -->
                        <div class="col-4">
                            <b-form-select id="search-area" v-model="sidoCode" @change="getGugun" class="form-select me-2"
                                name="sidoSelect">
                                <!-- JS에서 JSON 데이터를 받아오면 이곳에 도시(Sido) <option> 생성 -->
                            </b-form-select>
                        </div>

                        <div class="col-4">
                            <!-- 시도 선택 후 나타나는 Select Box : JS (구군 정보) -->
                            <b-form-select id="regionDetail" class="form-select me-2" name="gugunSelect">
                                <!--시도 선택 후 시도 코드와 일치하는 구군(Gugun) <option> 생성-->>
                            </b-form-select>
                        </div>
                        <!-- 여행지 분류 Select -->
                        <div class="col-4">
                            <b-form-select v-model="type" id="search-content-id" class="form-select me-2" name="type">
                                <option value="0" selected>관광지 유형</option>
                                <option value="12">관광지</option>
                                <option value="14">문화시설</option>
                                <option value="15">축제공연행사</option>
                                <option value="25">여행코스</option>
                                <option value="28">레포츠</option>
                                <option value="32">숙박</option>
                                <option value="38">쇼핑</option>
                                <option value="39">음식점</option>
                            </b-form-select>
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 10px;">
                        <!-- 검색어 입력 여행지 이름을 기준으로 검색할 수 있다. -->
                        <div class="col-8">
                            <input id="search-keyword" v-model="keyword" class="form-control me-2" name="keyword"
                                type="search" placeholder="검색어" aria-label="검색어" />
                        </div>

                        <div class="col-4" style="text-align: right;">
                            <button id="search-btn" @click="getAttractions" class="btn btn-success"
                                type="button" style="width: 70px">검색</button>
                        </div>
                    </div>

                    <!-- 여행지 검색 결과를 보여주는 List Table 부분 -->
                    <div class="row">
                        <div class="container" style="overflow: auto; height: 450px;">
                            <table id="attractions" class="table table-striped align-middle">
                                <thead>
                                    <tr>
                                        <th>대표이미지</th>
                                        <th>관광지명</th>
                                        <th>주소</th>
                                    </tr>
                                </thead>
                                <tbody id="trip-list">
                                    <!-- 여행지 조회 결과 출력 -->
                                    <!-- Fetch API + REST 처리 결과로 JSON 데이터를 받아와 JS에서 처리 -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-6 col-6" style="">
                    <div class="map container">
                        <div id="map" style="height: 600px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AttractionSearch',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() { },
    methods: {},
    mounted() {}
};
</script>

<style scoped></style>