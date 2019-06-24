import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Paginator } from './index.js'

describe('Paginator Component', () => {
  it('renders without crashing', () => {
    shallow(<Paginator />)
  })
})
