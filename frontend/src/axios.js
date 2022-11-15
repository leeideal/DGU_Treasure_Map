import axios from "axios";

export const APIURL = "ec2-52-78-33-221.ap-northeast-2.compute.amazonaws.com"

export const API = axios.create({
    baseURL: `http://${APIURL}:8000`,
    headers:{
        "Content-Type": "application/json",
    },
});