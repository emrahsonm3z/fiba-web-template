import { shallow } from 'enzyme'
import React from 'react'

import { Button } from '.'

it('runs correctly', () => {
  const wrapper = shallow(<Button />)

  expect(wrapper).toMatchSnapshot()
})
