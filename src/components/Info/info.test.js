import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Info } from './index.js'

describe('Info Component', () => {
  it('renders without crashing', () => {
    shallow(<Info />)
  })
})
