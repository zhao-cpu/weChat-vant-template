import CommonServices from "../../services/common";
import { debounce } from "../../utils/util";
Page({
    data: {
        desc:
            "一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字",
    },
    onLoad() {
        this.init();
    },
    async init() {
        const res = await CommonServices.dict("projectLabel");
        console.log("res", res);
    },

    handleSearch: debounce(function () {}),
});
