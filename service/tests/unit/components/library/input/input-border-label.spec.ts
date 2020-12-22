import { shallowMount } from '@vue/test-utils'
import INPUT_TYPE from "@/components/library/input/consts";
import InputBorderLabel from "@/components/library/input/InputBorderLabel.vue";

describe('InputBorderLabel.vue', () => {
  it('render label', () => {
    const wrapper = shallowMount(InputBorderLabel, {
      props: {id: 'test', label: 'test'}
    })

    expect(wrapper.find('label').text()).toMatch('test')
  })

  it('input value', () => {
    const wrapper = shallowMount(InputBorderLabel, {
      props: {id: 'test', label: 'test'}
    })
    wrapper.find('input').element.value = 'input text'

    expect(wrapper.find('input').element.value).toMatch('input text')
  })

  it('check input type', () => {
    for (const type of INPUT_TYPE) {
      const wrapper = shallowMount(InputBorderLabel, {
        props: {id: 'test', label: 'test', type: type}
      })

      expect(wrapper.vm.$options.props.type.validator(type)).toBe(true)
    }
  })
})
