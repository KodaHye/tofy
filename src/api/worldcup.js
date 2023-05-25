import { worldCupInstance } from "./index";
import { apiInstance } from "./index.js";

const api = apiInstance();

const worldcup = worldCupInstance();

function pickRandomAttractions(success, fail) {
    worldcup.get().then(success).catch(fail);
}

async function saveWorldCupResult(result, success, fail) {
    await api.post('/worldcup', result).then(success).catch(fail);
}

export { pickRandomAttractions, saveWorldCupResult };