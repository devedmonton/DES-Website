import vue from "@vitejs/plugin-vue";

export default {
    plugins: [vue()],
    test: {
        environment: "happy-dom",
    },
};
