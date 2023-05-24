<template>
    <b-col align-self="center" style="align-items: center;">
        <b-row style="align-items: center;" v-for="(row, rowIndex) in groupedTags" :key="rowIndex" class="tag-row">
            <b-col v-for="(tag, index) in row" :key="index" style="text-align: center;">
                <button :class="{ 'tag-selected': selectedTags.includes(tag.tagNm) }" @click="selectTag(tag)" class="tag-button">
                    {{ tag.tagNm }}
                </button>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
import { getAllTags } from '@/api/tag';

export default {
    name: 'TagItems',
    data() {
        return {
            tags: [],
            selectedTags: []
        }
    },
    created() {
        getAllTags(
            res => {
                console.log("태그", res.data);
                this.tags = res.data.data.tags;
                console.log("데이터 들어간 후", this.tags);
            },
            err => {
                console.log(err);
            }
        )
    },
    computed: {
        groupedTags() {
            let groups = [];
            for (let i = 0; i < this.tags.length; i += 4) {
                groups.push(this.tags.slice(i, i + 4));
            }
            return groups;
        }
    },
    methods: {
        selectTag(tag) {
            if (this.selectedTags.includes(tag.tagNm)) {
                this.selectedTags = this.selectedTags.filter(t => t !== tag.tagNm);
                this.$emit('selectTag', tag);
            } else {
                if (this.selectedTags.length < 5) {
                    //배열에 저장
                    this.selectedTags.push(tag.tagNm);
                    this.$emit('selectTag', tag);
                    
                } else {
                    alert('최대 5개의 태그까지만 선택 가능합니다.');
                }
            }
            
            //상위 컴포넌트에 해당 태그 객체 보내기
            // if (this.selectedTags.length < 5) {
            // }
        }
    }
}
</script>

<style>
.tag-row {
    margin-bottom: 10px;
}

.tag-button {
    border: #fff;
    background-color: skyblue;
    border-radius: 15px;
    margin-right: 10px;
    width: 160px;
    /* 너비를 설정합니다. */
    height: 50px;
    /* 높이를 설정합니다. */
    text-align: center;
    /* 텍스트를 가운데로 정렬합니다. */
    color: white;
    transform: scale(1);
    /* 기본 크기 */
    transition: transform 2.0s ease;
    /* 크기 변경에 애니메이션 적용 */
    transition: background-color 0.4s ease;
}

.tag-button:hover {
    transform: scale(1.1);
}

.tag-selected {
    background-color: pink;
    color: white;
    transition: background-color 0.4s ease;
}</style>