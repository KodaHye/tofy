<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h1>여행계획 작성 게시판 입니다.</h1>
                </div>
                <div><span>나만의 여행계획을 만들어보세요.</span></div>
            </div>

            <div class="mb-3">
                <label for="subject" class="form-label">제목 : </label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="제목..." />
                <!-- <input type="text" class="form-control" id="subject" name="subject" placeholder="제목..." v-model="subject" /> -->
            </div>

            <div class="row" style="margin: 20px 0px;">

                <div class="border col-sm-12 col-md-12 col-lg-3 col-3"
                    style="border: 1px; border-color:#ced4da; border-radius: 0.375rem;">
                    <div style="margin: 10px 0px;">
                        <span>관광지를 검색해주세요</span>
                    </div>
                    <div class="input-group mb-3">
                        <!-- <input type="search-keyword" v-model="keyword" class="form-control" placeholder="관광지 이름 입력"
                            style="border-right: 0px;"> -->
                        <input type="search-keyword" v-model="keyword" class="form-control" placeholder="관광지 이름 입력"
                            style="border-right: 0px;">
                        <button class="btn btn-outline-secondary" type="button" @click="getAttractions"
                            style="border-radius: 0 0.25rem 0.25rem 0; border-color: #ced4da;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></button>
                    </div>

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
                                <tr v-for="attraction in this.attractionList" :key="attraction.contentId"
                                    @click="addPlan(attraction.contentId);">
                                    <!-- @click="addPlan(attraction.contentId); moveCenter(attraction.latitude, attraction.longitude);"> -->

                                    <td><img :src="attraction.firstImage" width="100px"></td>
                                    <td>{{ attraction.title }}</td>
                                    <td>{{ attraction.addr }} {{ attraction.addr2 }}</td>
                                    <!-- <td><button @click="buttonClicked(area.contentId)">추가</button></td> -->
                                    <!-- <td><input type="hidden" :name="attraction.contentId" :value="attraction.contentId"></td> -->
                                </tr>
                                <!-- 여행지 조회 결과 출력 -->
                                <!-- Fetch API + REST 처리 결과로 JSON 데이터를 받아와 JS에서 처리 -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-6">
                    <!-- kakaoMap API  start  -->
                    <div class="map container">
                        <div id="map" style="height: 600px"></div>
                    </div>
                    <!-- kakaoMap API  end -->
                </div>
                <div class="border col-sm-12 col-md-12 col-lg-3 col-3"
                    style="border: 1px; border-color:#ced4da; border-radius: 0.375rem;">
                    <div style="margin: 10px 0px;"><span>내가 추가한 여행코스</span></div>
                    <div class="container" style="overflow: auto; height: 500px;">
                        <table id="attractions" class="table table-striped align-middle">
                            <draggable v-model="attractionPlanList">
                            <tr v-for="attraction in this.attractionPlanList" :key="attraction.contentId"
                                    @click="addPlan(attraction.contentId);">
                                    <!-- @click="addPlan(attraction.contentId); moveCenter(attraction.latitude, attraction.longitude);"> -->

                                    <td><img :src="attraction.firstImage" style="width: 100px;"></td>
                                    <td style="width: 300px">{{ attraction.title }}</td>
                                    <!-- <td><button @click="buttonClicked(area.contentId)">추가</button></td> -->
                                    <!-- <td><input type="hidden" :name="attraction.contentId" :value="attraction.contentId"></td> -->
                            </tr>
                        </draggable>
                        </table>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-5 col-5">
                    <div style="margin: 10px 0px;">
                        <span>출발일</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="date" class="form-control">
                    </div>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-2 col-2">
                </div>

                <div class="col-sm-12 col-md-12 col-lg-5 col-5" style="">
                    <div style="margin: 10px 0px;">
                        <span>도착일</span>
                    </div>
                    <div class="input-group mb-3">
                        <input type="date" class="form-control">
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
                        <!-- <button type="button" id="btn-register" class="btn btn-outline-primary"
                            @click="writeBoard">글작성</button> -->
                        <button type="button" id="btn-register" class="btn btn-outline-primary" @click="submitPlan">글작성</button>
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
import http from "@/api/http";
import draggable from 'vuedraggable'

export default {
    name: 'PlanWrite',
    components: {
        draggable,
    },
    data() {
        return {
            map: null,
            keyword: "",
            mapContainer: {},
            mapOption: {},
            positions: [],
            plan: {},
            title: "",
            content: "",
            startDate: "",
            endDate: "",
            attractionList: [],
            attractionListItem: [],
            attractionPlanList: [], // 계획 상세 배열
        };
    },
    created() { },
    methods: {
        submitPlan() {
            this.plan.title = this.title;
            this.plan.content = this.content;
            this.plan.attractionPlanList = this.attractionList;

            console.log(this.attractionPlanList)
        },
        getAttractions() {

            const attractionInfo = {
                keyword: this.keyword,
            }
            http.post(`attraction/map`, attractionInfo)
                .then(res => {
                    console.log("결과 : " + res[0]);
                    this.attractionList = res.data;
                    console.log(this.attractionList);
                    // this.makeList(res.data);
                    // console.log(res.data)
                }).then(() => this.makeAttractionList(this.attractionList))
                .catch(Error => {
                    console.log(Error);
                })
        },
        // 관광지 검색후, 조건에 맞는 관광지 list 보이기
        makeAttractionList(data) {
            document.querySelector("#attractions").setAttribute("style", "display: ;");

            console.log("makeAttractionList");
            console.log(data)

            for (const attraction of this.attractionList) {
                if (attraction.contentId === data.attractionDto.contentId) {
                    return;
                }
            }

            this.attractionListItem.push({
                contentId: data.attractionDto.contentId,
                latitude: data.attractionDto.latitude,
                longitude: data.attractionDto.longitude,
                firstImage: data.attractionDto.firstImage,
                title: data.attractionDto.title,
                addr1: data.attractionDto.addr1,
                addr2: data.attractionDto.addr2
            });
        },
        addPlan(contentId) {

            // 선택한 contentId에 맞는 여행지 정보 불러오기
            // 나의 여행코스에 추가하기
            // document.querySelector("")
            console.log(this.attractionPlanList);
            if (this.attractionPlanList.some(item => item.contentId === contentId)) {
                return;
            }
            // if (this.attractionPlanList.includes(contentId === contentId)) return;
            // attractionPlanList에 추가하고, 삭제할 수 있어야 됨
            // this.attractionPlanList.push(contentId);
            // console.log(this.attractionPlanList);
            // console.log(this.attractionList.attractionDesc)

            http.get(`/attraction/${contentId}`).then(({ data }) => {
                this.planAttr = data;
                console.log(this.planAttr)
                console.log(this.planAttr.attractionDesc)

                this.attractionPlanList.push(this.planAttr.attractionDto);
                // const tmpAttractionDesc = this.planAttr.attractionDto;
                console.log(this.attractionPlanList);
            })
            // http.get(`/attraction/${contentId}`).then(({ data }) => {
            // console.log(data)
            // this.attractionDto = data.attractionDto;
            // this.attractionDesc = data.attractionDesc;
            // // console.log(this.attractionDto)
            // // console.log(this.attractionDesc)
            // }

        },
        loadScript() {
            const SERVICE_KEY = process.env.VUE_APP_KAKAO_API_KEY;
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${SERVICE_KEY}&libraries=services,clusterer,drawing&autoload=false`;

            script.onload = () => window.kakao.maps.load(this.loadMap);

            document.head.appendChild(script); //html => head 안에 스크립트 소스를 추가
        },

        loadMap() {

            this.mapContainer = document.getElementById("map");
            this.mapOption = {
                //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(37.500613, 127.036431),
                level: 5,
            };

            this.map = new window.kakao.maps.Map(this.mapContainer, this.mapOption);
        },
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            //카카오 객체가 있고, 카카오 맵을 그릴 준비가 되어 있다면 맵 실행
            this.loadMap();
        } else {
            //없다면 카카오 스크립트 추가 후 맵 실행
            this.loadScript();
        }
    },
};
</script>

<style scoped></style>