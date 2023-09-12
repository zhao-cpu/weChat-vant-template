Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  externalClasses: ["user-class", "main-class"],
  properties: {
    avatar: {
      type: String,
      value: "/components/x-user-info/images/avatar.png",
    },
    name: {
      type: String,
      value: "蜡笔没有芯",
    },
    subname: {
      type: String,
      value: "视频剪辑师/自由摄影师",
    },
  },

  data: {},

  methods: {
    onLink() {
      this.triggerEvent("link");
    },
  },
});
