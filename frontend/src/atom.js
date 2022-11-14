import { atom } from "recoil";

export const isInfo = atom({
    key: "isInfo",
    default: [],
});

export const isClick = atom({
    key : "isClick",
    default : 0
})