import { apiInstance } from "./index";

const tag = apiInstance();

function getAllTags(success, fail) {
    tag.get('/tag').then(success).catch(fail);
}

function saveSelectedTags(tags, success, fail) {
    tag.post('/tag', tags).then(success).catch(fail);
}

async function getUserTags(userNo, success, fail) {
    await tag.get(`/tag/${userNo}`).then(success).catch(fail);
}

export {getAllTags, saveSelectedTags, getUserTags};