<template>
    <b-container fluid class="worldcup-box">
        <h1>여행지 이상형 월드컵</h1>
        <div v-if="isLoading">
            Loading...
        </div>
        <b-row v-else>
            <b-row v-if="currentRound === 1">
                <b-col><h2>16 강</h2></b-col>
                <div class="w-100"></div>
                <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                    <div class="destination">{{ match.destination1.name }}</div>
                    <button @click="selectDestination(match, match.destination1, 0)">Choose</button>
                    <div class="vs">VS</div>
                    <div class="destination">{{ match.destination2.name }}</div>
                    <button @click="selectDestination(match, match.destination2, 0)">Choose</button>
                </div>
            </b-row>
            <div v-else-if="currentRound === 2">
                <h2>8 강</h2>
                <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                    <div class="destination">{{ match.destination1.name }}</div>
                    <button @click="selectDestination(match, match.destination1, 1)">Choose</button>
                    <div class="vs">VS</div>
                    <div class="destination">{{ match.destination2.name }}</div>
                    <button @click="selectDestination(match, match.destination2, 1)">Choose</button>
                </div>
            </div>
            <div v-else-if="currentRound === 3">
                <h2>4 강</h2>
                <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                    <div class="destination">{{ match.destination1.name }}</div>
                    <button @click="selectDestination(match, match.destination1, 2)">Choose</button>
                    <div class="vs">VS</div>
                    <div class="destination">{{ match.destination2.name }}</div>
                    <button @click="selectDestination(match, match.destination2, 2)">Choose</button>
                </div>
            </div>
            <div v-else-if="currentRound === 4">
                <h2>결승</h2>
                <div v-for="match in matches" :key="match.id" class="match" v-show="match.id === currentMatchId">
                    <div class="destination">{{ match.destination1.name }}</div>
                    <button @click="selectDestination(match, match.destination1, 3)">Choose</button>
                    <div class="vs">VS</div>
                    <div class="destination">{{ match.destination2.name }}</div>
                    <button @click="selectDestination(match, match.destination2, 3)">Choose</button>
                </div>
            </div>
            <div v-else>
                <h2>Winner: {{ winner.name }}</h2>
                <div v-if="isWinnerSelected">
                    <p>축하합니다! {{ winner.name }}을(를) 고르셨습니다!</p>
                </div>
            </div>
        </b-row>
    </b-container>
</template>
  
<script>
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
        this.fetchDestinations();
    },
    methods: {
        fetchDestinations() {

            this.destinations[0] = [
                { id: 1, name: 'Destination 1' },
                { id: 2, name: 'Destination 2' },
                { id: 3, name: 'Destination 3' },
                { id: 4, name: 'Destination 4' },
                { id: 5, name: 'Destination 5' },
                { id: 6, name: 'Destination 6' },
                { id: 7, name: 'Destination 7' },
                { id: 8, name: 'Destination 8' },
                { id: 9, name: 'Destination 9' },
                { id: 10, name: 'Destination 10' },
                { id: 11, name: 'Destination 11' },
                { id: 12, name: 'Destination 12' },
                { id: 13, name: 'Destination 13' },
                { id: 14, name: 'Destination 14' },
                { id: 15, name: 'Destination 15' },
                { id: 16, name: 'Destination 16' }
            ];
            console.log(this.destinations[0]);
            this.createMatches(0);
            this.isLoading = false;
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
        }
    }
};
</script>
  
<style>
.worldcup-box {
    /* margin-top: 100px; */
}
.match {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.destination {
    font-size: 20px;
    margin-right: 10px;
}

.vs {
    margin: 0 10px;
}
</style>