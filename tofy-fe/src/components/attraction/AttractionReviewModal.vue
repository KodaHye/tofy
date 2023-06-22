<template>
    <!-- Modal에서  -->
    <b-modal id="review" title="BootstrapVue">
        <template #modal-title>
            <h2>관광지이름</h2>
        </template>
        <!-- https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating -->

        <div class="star-rating space-x-4 mx-auto" style="margin-bottom: 10px;">
            <input type="radio" id="5-stars" name="rating" value="5" v-model="review.ratings" />
            <label for="5-stars" class="star pr-4">★</label>
            <input type="radio" id="4-stars" name="rating" value="4" v-model="review.ratings" />
            <label for="4-stars" class="star">★</label>
            <input type="radio" id="3-stars" name="rating" value="3" v-model="review.ratings" />
            <label for="3-stars" class="star">★</label>
            <input type="radio" id="2-stars" name="rating" value="2" v-model="review.ratings" />
            <label for="2-stars" class="star">★</label>
            <input type="radio" id="1-star" name="rating" value="1" v-model="review.ratings" />
            <label for="1-star" class="star">★</label>
        </div>
        <div style="margin-bottom: 10px;">
            관광지의 후기를 등록해주세요.
            <b-form-textarea id="textarea" v-model="review.text" placeholder="후기를 작성해주세요." rows="3" max-rows="3"></b-form-textarea>
        </div>

        <!-- https://bootstrap-vue.org/docs/components/form-file#multiple-files -->
        <div>이미지 업로드</div>
        <b-form-file multiple></b-form-file>
        <!-- <b-form-file multiple :file-name-formatter="formatNames"></b-form-file> -->
        
        <!-- modal footer override -->
        <template #modal-footer>
            <button v-b-modal.modal-close_vissit class="btn btn-primary success btn-sm m-1" @click="registerReview">리뷰작성</button>
            <button v-b-modal.modal-close_visit class="btn btn-danger btn-sm m-1" @click="cancel">취소</button>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: 'AttractionReviewModal',
    components: {},
    props: {
    },
    data() {
        return {
            message: '',
            review: {},
        };
    },
    created() { },
    methods: {
        // 리뷰 등록
        registerReview() {
            this.$emit('sendReveiwData', this.review);
            console.log("부모 객체에 review를 전달합니다.")
            this.$bvModal.hide('review'); 
        }, 
        // 리뷰 작성 취소
        cancel() {
            this.$bvModal.hide('review'); 
        }
    },
};
</script>

<style scoped>

.star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2.25rem;
    line-height: 2.5rem;
    justify-content: space-around;
    padding: 0 0.2em;
    text-align: center;
    width: 5em;
    -webkit-text-fill-color: transparent;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
}

.star-ratings-fill {
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
}

.star-ratings-base {
    z-index: 0;
    padding: 0;
}

.star-rating input {
    display: none;
}

.star-rating label {
    -webkit-text-fill-color: transparent;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #2b2a29;
    cursor: pointer;
}

.star-rating :checked~label {
    -webkit-text-fill-color: gold;
}

.star {
    padding-right: 5px;
}

</style>