import log from "./log";
class Baidu {
  errorCode = {
    222202: "图片中没有人脸或者图片质量太差",
    222203: "无法解析人脸;图片质量太差",
    223123: "质量检测未通过 左脸遮挡程度过高",
    223122: "质量检测未通过 右眼遮挡程度过高",
    223121: "质量检测未通过 左眼遮挡程度过高",
    223120: "活体检测未通过",
    223124: "质量检测未通过 右脸遮挡程度过高",
    223125: "质量检测未通过 下巴遮挡程度过高",
    223126: "质量检测未通过 鼻子遮挡程度过高",
    223127: "质量检测未通过 嘴巴遮挡程度过高",
    223114: "人脸模糊",
  };

  config = {
    grant_type: "client_credentials",
    client_id: "xxx",
    client_secret: "xxx",
  };

  getTokenAsync() {
    return new Promise((resolve, reject) => {
      const that = this;
      wx.request({
        url: "https://aip.baidubce.com/oauth/2.0/token",
        data: {
          grant_type: that.config.grant_type,
          client_id: that.config.client_id,
          client_secret: that.config.client_secret,
        },
        success(res) {
          return resolve(res.data.access_token);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  async faceMatch(image) {
    const that = this;
    const newToken = await this.getTokenAsync();
    return new Promise((resolve, reject) => {
      wx.request({
        method: "POST",
        url:
          "https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=" +
          newToken,
        data: [...image],
        success(res) {
          log.info("baidu:request", res);
          res = res.data;
          if (res.error_code !== 0) {
            reject(
              that.errorCode[String(res.error_code)]
                ? that.errorCode[String(res.error_code)]
                : "人脸识别失败，请重试！" + String(res.error_code)
            );
          } else {
            if (res.result.score < 80) {
              reject("人脸不匹配,请重试！");
            }
          }
          resolve(res);
        },
        fail(err) {
          log.error("baidu:request", err);
          reject(err);
        },
      });
    });
  }
}

export default new Baidu();
