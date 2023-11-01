import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TheMenu from "../../components/section/TheMenu.vue";

test("TheMenu.vue", async () => {
    const wrapper = mount(TheMenu);
    expect(wrapper.html()).toBeTruthy();
});

test("closeMobileMenu", async () => {
    const wrapper = mount(TheMenu);
    const spy = vi.spyOn(wrapper.vm, "closeMobileMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.closeMobileMenu();
    expect(spy).toHaveBeenCalled();
});

test("toggleMobileMenu", async () => {
    const wrapper = mount(TheMenu);
    const spy = vi.spyOn(wrapper.vm, "toggleMobileMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.toggleMobileMenu();
    expect(spy).toHaveBeenCalled();
});
