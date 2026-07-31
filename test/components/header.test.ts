import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '~/components/app/Header.vue'

test('Header.vue', async () => {
  const wrapper = mount(Header)
  expect(wrapper.html()).toBeTruthy()
})

test('Header.vue closes the mobile menu on Escape', async () => {
  const wrapper = mount(Header, { attachTo: document.body })

  await wrapper.get('button[aria-label="Menu"]').trigger('click')
  expect(wrapper.find('#mobile-menu').exists()).toBe(true)

  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  await nextTick()

  expect(wrapper.find('#mobile-menu').exists()).toBe(false)

  wrapper.unmount()
})
