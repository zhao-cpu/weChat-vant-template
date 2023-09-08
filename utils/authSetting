/**
 * 授权
 * @param {*} param0
 */
export function authSetting({
  title = "授权提示",
  content = "请确认授权，否则部分功能将无法使用",
  scope = "scope.writePhotosAlbum",
  success,
}) {
  wx.getSetting({
    success(res) {
      if (!res.authSetting?.[scope]) {
        wx.authorize({
          scope,
          success() {
            success?.();
          },
          fail() {
            wx.showModal({
              title,
              content,
              success(data) {
                if (data.confirm) {
                  wx.openSetting({
                    success() {},
                  });
                }
              },
            });
          },
        });
      } else {
        success?.();
      }
    },
  });
}
