import { worldCupInstance } from "./index";

const worldcup = worldCupInstance();

function pickRandomAttractions(success, fail) {
    worldcup.get().then(success).catch(fail);
}

export { pickRandomAttractions };