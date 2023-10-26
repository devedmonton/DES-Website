import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheMenu from "../../components/section/TheMenu.vue";

test("TheMenu.vue", async () => {
    const wrapper = mount(TheMenu);
    expect(wrapper.html()).toBeTruthy();
});
