import { shallowMount } from '@vue/test-utils'
import INPUT_TYPE from "@/components/library/input/consts";
import InputBorderLabel from "@/components/library/input/InputBorderLabel.vue";

describe('InputBorderLabel.vue', () => {
  function wrapperFactory(propsData = {}) {
    return shallowMount(InputBorderLabel, {
      props: {
        ...propsData,
          id: 'test',
          label: 'test'
      }
    });
  }

  it('render label', () => {
    expect(wrapperFactory().find('label').text()).toMatch('test')
  })

  it('input value', () => {
    const wrapper = wrapperFactory()
    wrapper.find('input').element.value = 'input text'

    expect(wrapper.find('input').element.value).toMatch('input text')
  })

  it('check input type', () => {
    for (const type of INPUT_TYPE) {
      const wrapper = wrapperFactory({type: type})

      expect(wrapper.vm.$options.props.type.validator(type)).toBe(true)
    }
  })
})
