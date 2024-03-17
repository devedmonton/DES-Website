import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AppHeader from "../../components/app/Header.vue";

test("AppHeader.vue", async () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.html()).toBeTruthy();
});

test("closeMobileMenu", async () => {
    const wrapper = mount(AppHeader);
    const spy = vi.spyOn(wrapper.vm, "closeMobileMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.closeMobileMenu();
    expect(spy).toHaveBeenCalled();
});

test("toggleMobileMenu", async () => {
    const wrapper = mount(AppHeader);
    const spy = vi.spyOn(wrapper.vm, "toggleMobileMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.toggleMobileMenu();
    expect(spy).toHaveBeenCalled();
});
