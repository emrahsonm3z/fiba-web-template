import React from 'react'
import { shallow } from 'enzyme'
import App from 'App'

describe('rendering app', () => {
  it('render app component without crashing', () => {
    shallow(<App />)
  })

  it('render app component button without crashing', () => {
    const wrapper = shallow(<App />)

    expect(
      wrapper.contains(
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      )
    ).toEqual(true)
  })
})
