<template>
  <table>
    <tbody>
        <div v-for="(worldcup, i) in worldcupResult" :key="i" >
            <div class="worldcup-content" @click="$router.push({ name: 'attractionDetail', params: { attrno:  worldcup.detail.attractionDto.contentId }})"
            style="padding-bottom: 20px;">
                <b-row style="height: 100%; width: 100%; margin: 0;">
                    <!--이미지 section start-->
                    <b-col cols="3" style="height: 100%; width: 100%; ">
                        <img :src="worldcup.detail.attractionDto.firstImage" alt="" style="width: 100%; height: 100%; object-fit: cover;">
                    </b-col>
                    <!--이미지 section end-->
                    <!--설명 section start-->
                    <b-col style="height: 100%; width: 100%; ">
                        <!--여행지 이름, 여행지 설명 start-->
                        <b-row>
                            <b-col>
                                <div>{{ worldcup.create }}</div>
                                <div>{{ worldcup.detail.attractionDto.title }}</div>
                                <div>{{ worldcup.detail.attractionDto.addr }}</div>

                            </b-col>
                        </b-row>
                    </b-col>
                    <!--설명 section end-->
                </b-row>
            </div>
            <!--회색 박스 end-->
        </div>
    </tbody>
  </table>
</template>

<script>

import http from "@/api/http";
import { mapState } from "vuex";
const userStore = "userStore";

export default {
    components: {},
    data() {
      return {
        worldcupResult: [],
      }
    },
    created() {
        http.get(`/worldcup/${this.userInfo.userNo}`).then(({data}) => {
            console.log(data.data);
            // this.worldcupResult = data.data.results;
            
            for(var i = 0; i < data.data.results.length; i++) {
                console.log(data.data.results[i])
                var tmp = data.data.results[i];
                http.get(`/attraction/${data.data.results[i].contentId}`).then(( {data}) => {
                    console.log(">>" + tmp.worldCupCreate);
                    var tmpObject = {
                        create: tmp.worldCupCreate,
                        detail: data,
                    }
                    this.worldcupResult.push(tmpObject);

                    console.log(this.worldcupResult)
                })
            }

            // console.log(this.worldcupResult);
        })
    },
    computed: {
		...mapState(userStore, ["userInfo"]),
    },
}
</script>

<style>
    .worldcup-content {
        width: 55vw;
        height: 150px;
        border-radius: 10px;
        margin-left: 14px;
        margin-bottom: 10px;
        background-color: whitesmoke;
    }
</style>