import axios from "axios";

export const APIURL = "10.80.7.86"
// 127.0.0.1

export const API = axios.create({
    baseURL: `http://${APIURL}:8000`,
    headers:{
        "Content-Type": "application/json",
    },
});