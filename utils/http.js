import getBaseUrl from "./config";
import log from "./log";

class CustomRequestInstance {
    static instance = null;
    static getInstance() {
        if (!this.instance) {
            this.instance = new CustomRequestInstance();
        }
        return this.instance;
    }
    request({ url = "", method = "get", data = {}, headers = {} }) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: getBaseUrl() + url,
                header: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${wx.getStorageSync("token")}`,
                    ...headers,
                },
                method: method.toUpperCase(),
                data: {
                    ...data,
                },
                success: function (res) {
                    log.info(`request-${url}-`, res.data);
                    if (res.data?.code === 200) {
                        resolve(res.data);
                    } else {
                        wx.showToast({
                            title: res.data?.msg,
                            icon: "none",
                        });
                        reject(res);
                    }
                },
                fail: function (err) {
                    log.error(`request-${url}-${err}`);
                    wx.showToast({
                        title: err?.errMsg || "网络异常请稍后再试",
                        icon: "none",
                    });
                    reject(err);
                },
            });
        });
    }
}

export default CustomRequestInstance;
