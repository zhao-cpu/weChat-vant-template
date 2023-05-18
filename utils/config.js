// Api域名
const HOST = {
  DEV: "https://swy.mnsn.cn/api",
  TEST:"https://swy.mnsn.cn/api",
  PROD:""
}
const URL = () => {
  if (!wx.canIUse('getAccountInfoSync')) {
    return HOST.PROD;
  }
  if (wx.getAccountInfoSync().miniProgram.envVersion == "develop") {
    return HOST.DEV
  }
  if(wx.getAccountInfoSync().miniProgram.envVersion == "trial"){
    return HOST.DEV
  }
  if(wx.getAccountInfoSync().miniProgram.envVersion == "release"){
    return HOST.PROD
  }
  return HOST.PROD
};
export default URL