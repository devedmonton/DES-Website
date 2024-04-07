import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextAreaStyled from '~/components/app/form/TextArea.vue'

test('TextareaStyled.vue', async () => {
  const wrapper = mount(TextAreaStyled)
  expect(wrapper.get('textarea')).toBeTruthy()
})
