import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TheMenu from "../../components/TheMenu.vue";

test("TheMenu.vue", async () => {
    const wrapper = mount(TheMenu);
    expect(wrapper.html()).toBeTruthy();
});

test("closeMenu", async () => {
    const wrapper = mount(TheMenu);
    const spy = vi.spyOn(wrapper.vm, "closeMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.closeMenu();
    expect(spy).toHaveBeenCalled();
});

test("closeMenuHandler", async () => {
    const wrapper = mount(TheMenu);
    const spy = vi.spyOn(wrapper.vm, "closeMenuHandler");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.closeMenuHandler();
    expect(spy).toHaveBeenCalled();
});

test("openMenu", async () => {
    const wrapper = mount(TheMenu);
    const spy = vi.spyOn(wrapper.vm, "openMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.openMenu();
    expect(spy).toHaveBeenCalled();
});

test("toggleMenu", async () => {
    const wrapper = mount(TheMenu);
    const spy = vi.spyOn(wrapper.vm, "toggleMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.toggleMenu();
    expect(spy).toHaveBeenCalled();
});
