import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '~/components/app/Header.vue'

test('Header.vue', async () => {
  const wrapper = mount(Header)
  expect(wrapper.html()).toBeTruthy()
})
