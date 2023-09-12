Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  externalClasses: ["custom-class"],
  properties: {
    label: {
      type: String,
      value: "",
    },
    // 自定义内容
    useCustom: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
      value: "",
    },
    // 表单类型：input textarea
    formType: {
      type: String,
      value: "input",
    },
    // input 类型
    type: {
      type: String,
      value: "text",
    },
    value: {
      type: String,
      value: "",
    },
  },

  data: {},

  methods: {
    onInput(e) {
      const { value } = e.detail;
      this.triggerEvent("input", { value });
    },

    onShow(){
      this.triggerEvent("show")
    }
  },
});
