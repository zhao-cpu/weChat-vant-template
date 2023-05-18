Component({
    options: {
        addGlobalClass: true,
    },
    properties: {
        lineHight: {
            type: Number,
            value: 22,
        },
        desc: {
            type: null,
            value: "",
        },
    },

    data: {
        showMore: false,
        isExceed: false, // 是否超过三行
    },

    observers: {
        desc(newValue) {
            // 如果当前被截断则直接返回
            if (this.data.showMore) return;
            if (newValue) this.init();
        },
    },

   
    methods: {
        handleLink(){
            this.triggerEvent("link")
        },
        handleHideMore(){
            this.setData({ showMore: true })
        },
        handleReadMore() {
            this.setData({ showMore: false });
        },
        init() {
            const { lineHight } = this.data;
            let showMore = false;
            let isExceed = false;
            var query = this.createSelectorQuery();
            query.select(".content").boundingClientRect();
            query.exec((res) => {
                var height = res[0]?.height;
                if (!height) return;
                var line = height / lineHight;
                if (line > 3) {
                    showMore = true;
                    isExceed = true
                } 
                else {
                    showMore = false;
                    isExceed = false
                } 
                this.setData({ showMore, isExceed });
            });
        },
    },
});
