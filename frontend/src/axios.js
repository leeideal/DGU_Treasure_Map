import axios from "axios";

export const APIURL = "172.20.10.3"

export const API = axios.create({
    baseURL: `http://${APIURL}:8000`,
    headers:{
        "Content-Type": "application/json",
    },
});