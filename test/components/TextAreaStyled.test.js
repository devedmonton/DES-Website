import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TextAreaStyled from "../../components/app/TextAreaStyled.vue";

test("TextareaStyled.vue", async () => {
    const wrapper = mount(TextAreaStyled);
    expect(wrapper.get("textarea")).toBeTruthy();
});
