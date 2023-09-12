Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
    },

    externalClasses: ["btn-class"],

    properties: {
        text: {
            type: String,
            value: "发布",
        },

        isActive: {
            type: Boolean,
            value: false,
        },
    },

    data: {},

    methods: {
        handleSubmit() {
            this.triggerEvent("submit");
        },
    },
});
