import getUrl from "./config";

/**
 * uploadFile 封装
 * @param {*} Object { name = "file", filePath, ...rest }
 *
 * @see [https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)
 */
export function customUpload({ name = "file", filePath, ...rest }) {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: `${getUrl()}/upload/image`,
            filePath,
            name,
            header: {
                Authorization: `Bearer ${wx.getStorageSync("token")}`,
            },
            ...rest,
            success(res) {
                const data = JSON.parse(res.data);
                if (data?.code !== 200) {
                    return wx.showToast({
                        title: data?.msg,
                        icon: "none",
                    });
                }
                return resolve(data);
            },
            fail(error) {
                reject(error);
            },
        });
    });
}
