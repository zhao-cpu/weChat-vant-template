import CommonServices from "../../services/common";
import { debounce } from "../../utils/util";
import Baidu from '../../utils/baidu'
Page({
  data: {
    desc:
      "一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字一段很长的文字",
    user: {
      name: "",
    },
  },
  async onLoad() {
    this.init();
  },

  async init() {
    const res = await CommonServices.dict("projectLabel");
    console.log("res", res);
  },

  _onInput(e) {
    const { type } = e.currentTarget.dataset;
    let { value } = e.detail;
    value = value.trimStart();
    this.setData({ [type]: value });
  },

  handleSearch: debounce(function () {}),
});
