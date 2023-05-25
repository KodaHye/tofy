<template>
    <div class="box">
        <div class="worldcup-content">
            <h2>여행지 이상형 월드컵</h2>
            <div v-if="isLoading">
                Loading...
            </div>
            <div v-else>
                <div v-if="currentRound === 1">
                    <h3>16 강</h3>
                    <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                        <!--매치 start-->
                        <b-row>
                            <!--왼쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination1.firstImage === '' ? require('/public/no_image.jpg') : match.destination1.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination1, 0)"
                                    >
                                <div class="destination">{{ match.destination1.title }}</div>
                                <div class="destination">{{ match.destination1.addr }}</div>
                            </b-col>
                            <!--왼쪽 여행지 end-->
                            <b-col cols="3" style="text-align: center; font-size: 30px; font-weight: bolder;">vs</b-col>
                            <!--오른쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination2.firstImage === '' ? require('/public/no_image.jpg') : match.destination2.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination2, 0)"
                                    >
                                <div class="destination">{{ match.destination2.title }}</div>
                                <div class="destination">{{ match.destination2.addr }}</div>
                            </b-col>
                            <!--오른쪽 여행지 end-->
                        </b-row>
                        <!--매치 end-->
                    </div>
                </div>
                <div v-else-if="currentRound === 2">
                    <h2>8 강</h2>
                    <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                        <!--매치 start-->
                        <b-row>
                            <!--왼쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination1.firstImage === '' ? require('/public/no_image.jpg') : match.destination1.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination1, 1)"
                                    >
                                <div class="destination">{{ match.destination1.title }}</div>
                                <div class="destination">{{ match.destination1.addr }}</div>
                            </b-col>
                            <!--왼쪽 여행지 end-->
                            <b-col cols="3" style="text-align: center; font-size: 30px; font-weight: bolder;">vs</b-col>
                            <!--오른쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination2.firstImage === '' ? require('/public/no_image.jpg') : match.destination2.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination2, 1)"
                                    >
                                <div class="destination">{{ match.destination2.title }}</div>
                                <div class="destination">{{ match.destination2.addr }}</div>
                            </b-col>
                            <!--오른쪽 여행지 end-->
                        </b-row>
                        <!--매치 end-->
                    </div>
                </div>
                <div v-else-if="currentRound === 3">
                    <h2>4 강</h2>
                    <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                        <!--매치 start-->
                        <b-row>
                            <!--왼쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination1.firstImage === '' ? require('/public/no_image.jpg') : match.destination1.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination1, 2)"
                                    >
                                <div class="destination" >{{ match.destination1.title }}</div>
                                <div>{{ match.destination1.addr }}</div>
                            </b-col>
                            <!--왼쪽 여행지 end-->
                            <b-col cols="3" style="text-align: center; font-size: 30px; font-weight: bolder;">vs</b-col>
                            <!--오른쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination2.firstImage === '' ? require('/public/no_image.jpg') : match.destination2.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination2, 2)"
                                    >
                                <div class="destination">{{ match.destination2.title }}</div>
                                <div class="destination">{{ match.destination2.addr }}</div>
                            </b-col>
                            <!--오른쪽 여행지 end-->
                        </b-row>
                        <!--매치 end-->
                    </div>
                </div>
                <div v-else-if="currentRound === 4">
                    <h2>결승</h2>
                    <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                        <!--매치 start-->
                        <b-row>
                            <!--왼쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination1.firstImage === '' ? require('/public/no_image.jpg') : match.destination1.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination1, 3)"
                                    >
                                <div class="destination">{{ match.destination1.title }}</div>
                                <div class="destination">{{ match.destination1.addr }}</div>
                            </b-col>
                            <!--왼쪽 여행지 end-->
                            <b-col cols="3" style="text-align: center; font-size: 30px; font-weight: bolder;">vs</b-col>
                            <!--오른쪽 여행지 start-->
                            <b-col :style="{ 'background-image': `url(${match.destination2.firstImage === '' ? require('/public/no_image.jpg') : match.destination2.firstImage})` }" 
                                    class="worldcup-content-card"
                                    @click="selectDestination(match, match.destination2, 3)"
                                    >
                                <div class="destination">{{ match.destination2.title }}</div>
                                <div class="destination">{{ match.destination2.addr }}</div>
                            </b-col>
                            <!--오른쪽 여행지 end-->
                        </b-row>
                        <!--매치 end-->
                    </div>
                </div>
                <div v-else>
                    <h1>우승 !!!!!</h1>
                    <div v-if="isWinnerSelected">
                        <p>축하합니다! {{ winner.title }}을(를) 고르셨습니다!</p>
                        <div class="worldcup-content-card"
                            :style="{ 'background-image': `url(${winner.firstImage === '' ? require('/public/no_image.jpg') : winner.firstImage})` }" 
                            style="margin: auto;"
                            @click="goToDetailView(winner.contentId)"
                        >
                            <div class="destination">{{ winner.title }}</div>
                            <div class="destination">{{ winner.addr }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import { pickRandomAttractions, saveWorldCupResult} from '@/api/worldcup';

const userStore = "userStore";

export default {
    name: 'TravelWorldCup',
    data() {
        return {
            isLoading: true,
            destinations: [
                [],
                [],
                [],
                []
            ],
            matches: [],
            currentRound: 1,
            currentMatchId: 0, // 수정: 현재 진행 중인 매치의 id
            winner: null,
            isWinnerSelected: false
        };
    },
    created() {
        pickRandomAttractions(
            data => {
                this.destinations[0] = data.data.data.attractions;
                this.fetchDestinations();
            },
            err => {
                console.log(err);
            }
        )
    },
    computed: {
        ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"])
    },
    watch: {
        isWinnerSelected() {
            if (this.isWinnerSelected) {
                const result = {
                    contentId: this.winner.contentId,
                    userNo: this.userInfo.userNo
                }

                console.log(result);

                saveWorldCupResult (
                    result,
                    res => {
                        if (res.data.status === "success") {
                            console.log("월드컵 결과 저장 성공");
                        }
                    },
                    err => {
                        console.log("결과 저장 에러", err);
                    }
                )
            }
        }
    },
    methods: {
        fetchDestinations() {
            this.createMatches(0);
            this.isLoading = false;
            console.log(this.matches);
        },
        createMatches(round) {
            //현재 라운드에 올라간 여행지를 섞는다.
            this.shuffleStack(this.destinations[round]);
            this.matches = [];
            //경기수
            const numMatches = this.destinations[round].length / 2;
            for (let i = 0; i < numMatches; i++) {
                //매치 생성
                const match = {
                    id: i,
                    destination1: this.destinations[round][i * 2],
                    destination2: this.destinations[round][i * 2 + 1],
                    winner: null
                };
                this.matches.push(match);
            }
        },
        selectDestination(match, destination, round) {
            console.log(destination, round);
            console.log("경기 수 : " + this.matches.length);
            if (round == 3) {
                this.winner = destination;
                this.isWinnerSelected = true;
                this.currentRound++;
            } else {
                this.destinations[round + 1].push(destination);
                console.log("승자 : " + this.destinations[round + 1][this.currentMatchId].id);
                console.log("현재 매치 순서 : " + this.currentMatchId);
                console.log("총 매치 수 : " + this.matches.length);
                if (this.currentMatchId <= this.matches.length) {
                    console.log("다음 매치 진행하자");
                    this.moveToNextRound(round + 1);
                }
            }
        },
        moveToNextRound(round) {
            console.log("다음 경기 진행 !");
            this.currentMatchId++; // 수정: 다음 매치로 진행
            if (this.currentMatchId === this.matches.length) {
                this.currentMatchId = 0; // 수정: 다음 라운드로 진행하기 전에 첫 번째 매치로 돌아감
                this.currentRound++;
                console.log("다음 라운드로 갑니다 !");
                this.createMatches(round);
                console.log(this.matches);
            }
        },
        shuffleStack(stack) {
            // Fisher-Yates 알고리즘을 사용하여 배열을 랜덤하게 섞음
            for (let i = stack.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [stack[i], stack[j]] = [stack[j], stack[i]];
            }

            return stack;
        },
        async goToDetailView(no) {
            await this.$router.push(`/attraction/detail/${no}`);
        }
    }
};
</script>
  
<style>
.match {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.destination {
    font-size: 20px;
    margin-right: 10px;
    margin-top: 20px;
    color: black;
    text-shadow: 2px 2px 4px rgb(255, 255, 255);
}

.vs {
    margin: 0 10px;
}

.worldcup-content {
    min-height: 80;
    margin: 0 auto;
    flex-grow: 1;
    border-radius: 20px;
    max-width: 80vw;
    text-align: center;
}

.worldcup-content-card {
    border-radius: 10px; 
    box-shadow: 10px; 
    height: 60vh; 
    width: 60vw; 
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    animation: move 1.0s alternate;
    transition: transform 0.3s ease-in-out;
}

.worldcup-content-card:hover {
    transform: scale(1.05);
}

@keyframes move {
    0% { transform: scale(1, 1); }
    5% {transform: scale(0.9, 0.9);}
    0% {transform: scale(1, 1);}
}
</style>