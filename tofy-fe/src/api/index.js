import axios from "axios";

// local vue api axios instance
function apiInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function noticeInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_NOTICE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function worldCupInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_WORLDCUP_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function attractionInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_ATTRACTION_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
  return instance;
}

export { apiInstance, noticeInstance, worldCupInstance, attractionInstance};
