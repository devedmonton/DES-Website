import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputStyled from '~/components/app/form/Input.vue'

test('renders the input', () => {
  const wrapper = mount(InputStyled)
  expect(wrapper.get('input')).toBeTruthy()
})
