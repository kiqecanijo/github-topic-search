/** @format */

import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Item } from './index.js'

describe('Item Component', () => {
  it('renders without crashing', () => {
    shallow(<Item />)
  })
})
