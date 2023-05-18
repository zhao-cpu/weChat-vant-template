import CommonServices from "../services/common";
export const hasLogined = (cb, flag = true) => {
    const token = wx.getStorageSync("token") ? true : false;
    const finishAt = wx.getStorageSync("finishAt") ? true : false;
    if (!token || !finishAt) {
        if (flag) {
            wx.showToast({
                title: "请先完成注册",
                icon: "none",
                duration: 1000,
            });

            setTimeout(() => {
                return wx.navigateTo({
                    url: "/pages/user-info/explain/explain",
                });
            }, 1000);
        } else {
            return wx.navigateTo({
                url: "/pages/user-info/explain/explain",
            });
        }
    } else cb?.();
};

export const hasFirstLogin = () => {
    const finishAt = wx.getStorageSync("finishAt") ? true : false;
    return finishAt;
};

export const requestSubscribeMessage = (tmplIds = ["16sQK6zFtZNB8eXMyf6yYcAmACnSpug8kM-yXQ22pjU"]) => {
    wx.requestSubscribeMessage({
        tmplIds,
        success(res) {
            try {
                tmplIds.forEach(async (tmplId) => {
                    if (res[tmplId] === "accept") await CommonServices.addSubscribe(tmplId);
                });
            } catch (error) {
                console.log(error);
            }
        },
        fail(err) {
            console.log("requestSubscribeMessage err", err);
        },
    });
};

//防抖
export const debounce = (fn, delay = 250) => {
    let timer = undefined;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
};

// 节流
export const throttle = (fn, gapTime = 1000) => {

    let _lastTime = null;

    // 返回新的函数
    return function () {
        let _nowTime = +new Date();
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            fn.apply(this, arguments); //将this和参数传给原函数
            _lastTime = _nowTime;
        }
    };
};
