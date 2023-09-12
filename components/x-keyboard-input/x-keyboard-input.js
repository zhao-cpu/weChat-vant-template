Component({
  options: {
      addGlobalClass: true,
      multipleSlots: true,
  },
  externalClasses: ["custom-class", "content-class"],
  properties: {
      show: {
          type: Boolean,
          value: false,
      },
      custom: {
          type: String,
          value: "",
      },
      placeholder: {
          type: String,
          value: "请输入标签（6个字内）",
      },
      btnText: {
          type: String,
          value: "确认",
      },
      // 是否使用 cover-view 标签
      isCoverView: {
          type: Boolean,
          value: true,
      },
      holdKeyboard: {
          type: Boolean,
          value: true,
      },
      focus: {
          type: Boolean,
          value: true,
      },
  },

  data: {
      keyboardheight: -1,
  },

  methods: {
      // 隐藏
      handleHide() {
          this.triggerEvent("hide");
      },
      handlePass() {},
      // 监听输入
      handleInput({ detail: { value } }) {
          this.triggerEvent("change", { value });
      },
      // 键盘高度监听
      keyboardChange({ detail: { height } }) {
          if (height === 0) this.triggerEvent("hide");
      },
      handleFocus({ detail: { height } }) {
          this.setData({ keyboardheight: height - 1 });
          this.triggerEvent("focus");
      },
      handleBlur() {
          this.setData({ keyboardheight: -1 });
          this.triggerEvent("hide");
      },
      handleMask() {
          this.triggerEvent("mask");
      },
      confirm() {
          this.triggerEvent("confirm");
      },
  },
});
