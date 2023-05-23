import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.208.73:9999/tofy",
    headers: {
        "Content-type": "application/json",
    }
})