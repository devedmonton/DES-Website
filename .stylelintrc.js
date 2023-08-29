export default {
    extends: ["@zazen/stylelint-config"],
    rules: {
        "at-rule-no-unknown": [true, { ignoreAtRules: ["include", "mixin"] }],
        "value-list-comma-newline-after": null,
    },
};
