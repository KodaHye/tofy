import { apiInstance } from "./index.js";

const api = apiInstance();

async function join(user, success, fail) {
    await api.post('/user/join', user).then(success).catch(fail);
}

async function login(user, success, fail) {
  await api.post(`/user`, user).then(success).catch(fail);
}

async function idCheck(userId, success, fail) {
    await api.get(`/user/idcheck/${userId}`).then(success).catch(fail);
}

async function findById(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/${userId}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await api.delete(`/user/logout/${userid}`).then(success).catch(fail);
}

export { join, login, idCheck, findById, tokenRegeneration, logout };