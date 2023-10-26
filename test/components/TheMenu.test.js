import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import SectionTheMenu from "../@/components/SectionTheMenu.vue";

test("SectionTheMenu.vue", async () => {
    const wrapper = mount(SectionTheMenu);
    expect(wrapper.html()).toBeTruthy();
});

test("closeMenu", async () => {
    const wrapper = mount(SectionTheMenu);
    const spy = vi.spyOn(wrapper.vm, "closeMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.closeMenu();
    expect(spy).toHaveBeenCalled();
});

test("closeMenuHandler", async () => {
    const wrapper = mount(SectionTheMenu);
    const spy = vi.spyOn(wrapper.vm, "closeMenuHandler");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.closeMenuHandler();
    expect(spy).toHaveBeenCalled();
});

test("openMenu", async () => {
    const wrapper = mount(SectionTheMenu);
    const spy = vi.spyOn(wrapper.vm, "openMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.openMenu();
    expect(spy).toHaveBeenCalled();
});

test("toggleMenu", async () => {
    const wrapper = mount(SectionTheMenu);
    const spy = vi.spyOn(wrapper.vm, "toggleMenu");
    spy.mockImplementationOnce(() => {});
    wrapper.vm.toggleMenu();
    expect(spy).toHaveBeenCalled();
});
