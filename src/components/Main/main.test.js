import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Main } from './index.js'

describe('Main Component', () => {
  it('renders without crashing', () => {
    shallow(<Main />)
  })
})
