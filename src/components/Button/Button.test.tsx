import { shallow } from 'enzyme'
import React from 'react'

import { Button } from '.'

it('runs correctly', () => {
  const wrapper = shallow(<Button />)

  expect(wrapper).toMatchSnapshot()
})

describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.html()).toMatch(/Click/)
  })

  it('renders snapshots, too', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })
})
