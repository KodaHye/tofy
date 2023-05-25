import { worldCupInstance } from "./index";

const worldcup = worldCupInstance();

function pickRandomAttractions(success, fail) {
    worldcup.get().then(success).catch(fail);
}

async function saveWorldCupResult(result, success, fail) {
    await worldcup.post(result).then(success).catch(fail);
}

export { pickRandomAttractions, saveWorldCupResult };