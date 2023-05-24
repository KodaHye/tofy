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
                                <!--시도 선택 후 시도 코드와 일치하는 구군(Gugun) <option> 생성-->
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
                            <button id="search-btn" @click="getAttractions" class="btn btn-success" type="button"
                                style="width: 70px">검색</button>
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
import axios from 'axios';

export default {
    name: 'AttractionSearch',
    components: {},
    data() {
        return {
            map: null,
            sidoCode: String,
            gugunCode: String,
            type: String,
            keyword: "",
            mapContainer: {},
            mapOption: {},
            positions: [],
        };
    },
    created() {
        fetch('http://localhost:9999/tofy/attraction/sido')
            .then(response => response.json())
            .then(data => {
                // <select> 태그의 <option> 데이터 업데이트
                const selectTag = document.getElementById("search-area");

                const option = document.createElement("option");
                option.value = "0";
                option.textContent = "검색 할 지역 선택";
                selectTag.appendChild(option);

                data.forEach(item => {
                    const option = document.createElement("option");
                    option.value = item.sidoCode;
                    option.textContent = item.sidoName;
                    selectTag.appendChild(option);
                });
            })
            .catch(error => console.error(error));
    },
    methods: {
        loadScript() {
            const script = document.createElement("script");
            const SERVICE_KEY = process.env.VUE_APP_KAKAO_API_KEY;
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

        getGugun() {
            axios.get(`http://localhost:9999/tofy/attraction/gugun/${this.sidoCode}`)
                .then(res => {
                    // <select> 태그의 <option> 데이터 업데이트
                    const selectTag = document.getElementById("regionDetail");

                    //원래 있던 option을 삭제
                    while (selectTag.firstChild) {
                        selectTag.removeChild(selectTag.firstChild);
                    }

                    const option = document.createElement("option");
                    option.value = "0";
                    option.textContent = "검색 할 지역 선택";
                    selectTag.appendChild(option);
                    console.log("res")

                    // console.log(res.data)

                    res.data.data.gugunList.forEach(item => {
                        const option = document.createElement("option");
                        option.value = item.gugunCode;
                        option.textContent = item.gugunName;
                        selectTag.appendChild(option);
                        console.log(option);
                    });
                })
                .catch(Error => {
                    console.log(Error);
                })
        },

        getAttractions() {
            const attractionInfo = {
                gugun: this.gugunCode,
                keyword: this.keyword,
                sido: this.sidoCode,
                type: this.type
            }

            axios.post(`http://localhost:9999/tofy/attraction/map`, attractionInfo)
                .then(res => {
                    console.log("결과 : " + res[0]);
                    this.makeList(res.data);
                    console.log(res.data)
                })
                .catch(Error => {
                    console.log(Error);
                })
        },

        makeList(data) {
            document.querySelector("#attractions").setAttribute("style", "display: ;");
            let tripList = ``;

            //data = 검색 결과로 DB에서 가져온 여행지 정보 리스트  => forEach 내에서는 area로 사용
            data.forEach((area) => {
                // 여행지 정보 리스트 출력 목적의 TagSet 추가
                tripList += `
                <tr @click="moveCenter(${area.latitude}, ${area.longitude})">
                    <td><img src="${area.firstImage}" width="100px" height="60px"></td>
                    <td>${area.title}</td>
                    <td>${area.addr} ${area.addr2}</td>
                </tr>
            `;

            /*
                positions 배열에 들어가는 값
                - content   : maker에 마우스 커서 이벤트 (overlay)로 나타날 여행지 간략 정보
                - latlng    : maker가 배치될 좌표 (위/경도)
                - title     : 여행지 이름
                - type      : 여행지 구분 코드
                - contentid : 여행지 고유 번호 (DB Key)
                - address   : 여행지 주소
                - imgsrc    : 여행지 대표 사진
            */
                let markerInfo = {
                    content: 
        `<div class="container">
            <div class="row p-1 bg-success bg-opacity-10">
              <p class="text-center fs-6">${area.title}</p>
            </div>
            <div class="row p-1">
              <div class="col-4 attraction-first-card" style="background-image: url(${area.firstImage}); padding-bottom: 3px;"></div>
              <div class="col-8">
                <p class="text-start fs-6">${area.addr}</p>
            </div>
        </div>
                `,
                    latlng: new window.kakao.maps.LatLng(area.latitude, area.longitude),
                    title: area.title,
                    type: area.contentTypeId,
                    contentid: area.contentId,
                    address: area.addr + area.addr2,
                    imgsrc: area.firstImage,
                };
                this.positions.push(markerInfo);
            });

            //console.log(positions);
            //HTML에 여행지 정보 리스트 출력
            document.getElementById("trip-list").innerHTML = tripList;

            //카카오맵에 여행지 리스트 Maker 생성
            this.displayMarker();
        },

        displayMarker() {
            this.map = new window.kakao.maps.Map(this.mapContainer, this.mapOption);

            // 마커 기본 이미지 주소
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

            //마커 이미지 크기
            var imageSize = new window.kakao.maps.Size(24, 35);

            for (var i = 0; i < this.positions.length; i++) {
                if (this.positions[i].type == "12") { //관광지
                    imageSrc = require(`@/assets/img/maker/Timg.png`);
                }
                else if (this.positions[i].type == "14") { //문화시설
                    imageSrc = require(`@/assets/img/maker/Cimg.png`);
                }
                else if (this.positions[i].type == "15") { //축제공연행사
                    imageSrc = require(`@/assets/img/maker/Eimg.png`);
                }
                else if (this.positions[i].type == "28") { //레포츠
                    imageSrc = require(`@/assets/img/maker/Rimg.png`);
                }
                else if (this.positions[i].type == "32") { //숙박
                    imageSrc = require(`@/assets/img/maker/Pimg.png`);
                }
                else if (this.positions[i].type == "38") { //쇼핑
                    imageSrc = require(`@/assets/img/maker/Simg.png`);
                }
                else if (this.positions[i].type == "39") { //음식점
                    imageSrc = require(`@/assets/img/maker/Fimg.png`);
                }

                // 마커 이미지 생성
                var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);


                // Maker 생성
                var marker = new window.kakao.maps.Marker({
                    map: this.map, // 마커를 표시할 지도
                    position: this.positions[i].latlng, // 마커를 표시할 위치
                    title: this.positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
                    image: markerImage, // 마커 이미지
                });


                // 마커에 표시할 인포윈도우를 생성합니다
                var infoWindow = new window.kakao.maps.InfoWindow({
                    content: this.positions[i].content,
                });

                // Closer EventListener에서 사용할 Data Set
                var data = {
                    contentid: this.positions[i].contentid,
                    address: this.positions[i].address,
                    imgaddr: this.positions[i].imgsrc,
                    title: this.positions[i].title
                }


                // 마커에 mouseover, mouseout, click 이벤트 설정 (closer 방식)
                // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록된다.
                window.kakao.maps.event.addListener(
                    marker,
                    "mouseover",
                    this.makeOverListener(this.map, marker, infoWindow)
                );

                window.kakao.maps.event.addListener(
                    marker,
                    "mouseout",
                    this.makeOutListener(infoWindow)
                );

                // Maker 클릭 이벤트 => 모달 창으로 정보 띄우기
                window.kakao.maps.event.addListener(marker, 'click', this.attractionDetail(data));

                // 첫번째 검색 정보를 이용하여 지도 중심을 이동 시킵니다
                this.map.setCenter(this.positions[0].latlng);
            }
        },
        // Maker 클릭 이벤트 발생 시 Method (Closer 방식)
        attractionDetail(data) {
            const router =this.$router;
            return function () {

                // REST 호출 (Fetch API)
                // REST에서 가져온 데이터를 바탕으로 Modal 페이지에 표현

                // 여행지 상세 페이지로 이동
                router.push({ name: "attractionDetail", params: { attrno: data.contentid }});
            };
        },

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        makeOverListener(map, marker, infoWindow) {
            return function () {
                infoWindow.open(map, marker);
            };
        },

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        makeOutListener(infoWindow) {
            return function () {
                infoWindow.close();
            };
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
    }
};
</script>

<style scoped></style>