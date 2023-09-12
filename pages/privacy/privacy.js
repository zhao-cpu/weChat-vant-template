// pages/privacy/privacy.js
import { authSetting } from "../../utils/authSetting";
Page({
  data: {},

  onLoad() {},

  onChooseImage() {
    wx.chooseMedia({
      count: 9,
      mediaType: ["image", "video"],
      sourceType: ["album", "camera"],
      maxDuration: 30,
      camera: "back",
      success(res) {
        console.log(res.tempFiles.tempFilePath);
      },
    });
  },

  onDownload() {
    authSetting({
      title: "授权提示",
      content: "需要授权才能保存到手机",
      success() {
        wx.saveImageToPhotosAlbum({
          filePath: "",
          success() {
            wx.showToast({
              title: "已经保存到相册了哟~",
              icon: "none",
            });
          },
        });
      },
    });
  },
});
