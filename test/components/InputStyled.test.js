import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import InputStyled from "../../components/InputStyled.vue";

test("renders the input", () => {
    const wrapper = mount(InputStyled);
    expect(wrapper.get("input")).toBeTruthy();
});
