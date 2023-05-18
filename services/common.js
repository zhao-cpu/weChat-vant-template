import Services from "../utils/http";

const http = Services.getInstance();

class CommonServices {
    // 获取配置信息
    async dict(type) {
        const res = await http.request({ url: "/dict", data: { type } });
        return res;
    }

}

export default new CommonServices();
